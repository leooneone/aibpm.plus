using AI.BPM.Core.Enums;
using AI.BPM.Domain.Activity;
using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Services.Instance.Input;
using AI.BPM.Services.X.Dto;
using AI.Core.Model.BPM;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Dto;
using ZhonTai.Admin.Core.Exceptions;
using AI.BPM.Services.Activity;
using AI.BPM.Services.Instance.Dto;
using AI.BPM.Services.Instance;
using AI.BPM.Services.WorkflowTemplate;
using AI.BPM.Services.WorkItem;
using AI.Core.Repository.BPM;
using System.Collections.Concurrent;
using ZhonTai.Admin.Domain.Role;
using ZhonTai.Admin.Services;

namespace AI.BPM.Services.BPM.Activity.Activities
{
    /// <summary>
    /// 并行网关
    /// </summary>
    public class ParallelGatewayActivityService : DefaultActivityService
    {
        /// <summary>
        /// 工作项提交
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>

        public override async Task<ActivityOutput> Submit(InstanceDataInput input)
        {
          return  await base.Submit(input);

        }
        
        public  override async Task<( bool IsFindNext, bool IsAddTodo)> WhatsNext(ActivityInput  activityInput,string previousActvitiyId) {

            var IsFindNext = await ProcessParallelWorkItem(activityInput, previousActvitiyId);

            return (IsFindNext,IsAddTodo:false);
            ///如果满足所有条件，则通过并查找后续 活动
           // if (IsPass)
            //   await AddNextActivitiesAsync(tpl, nextActivity.Id, formModel, instance, optionalParticipants);



        }
       /* async Task AddNextActivitiesAsync(WorkflowTemplateEntity tpl, string activityId, Dictionary<string, object> formModel, InstanceEntity instance, Dictionary<string, List<Participant>> optionalParticipants)
        {
            List<ActivityModel> nextActivities = new List<ActivityModel>();
            _activityService.FindNextActivity(tpl, activityId, nextActivities, formModel);
            if (nextActivities.Count > 0)
            {
                for (var k = 0; k < nextActivities.Count(); k++)
                {//逐一激活节点
                    Console.WriteLine("激活活动：" + nextActivities[k].Title + nextActivities[k].Type.ToString());
                    var nextActivity = nextActivities[k];

                    if (nextActivity.Type == ActivityType.ParallelGW)
                    {
                        //每条分支创建一个等待的工作项 使用同一个groupId  逆向等待个路径到达
                        var IsPass = await ProcessParallelWorkItem(nextActivity, tpl, activityId, instance);
                        ///如果满足所有条件，则通过并查找后续 活动
                        if (IsPass)
                            await AddNextActivitiesAsync(tpl, nextActivity.Id, formModel, instance, optionalParticipants);


                    }
                    else

                        await AddNextWorkItems( instance, tpl, nextActivity, activityId, optionalParticipants);
                }
                //完成当前节点工作项目
            }
            else
            {
                ///没有找到后续节点 流程异常
                throw new Exception("没有找到后续节点 流程异常");
            }
        }
*/



        /// <summary>
        /// 并行网关
        /// </summary>
        /// <param name="currentActivity"></param>
        /// <param name="tpl"></param>
        /// <param name="instance"></param>
        /// <param name="workItem"></param>
        /// <param name="approvalResult"></param>
        /// <param name="optionalParticipants"></param>
        /// <returns></returns>
        [Transaction]
        async Task<bool> ProcessParallelWorkItem(ActivityInput activityInput,string preActvitiyId)
        {
            ///是否查找后续节点   
            bool IsFindNext = false;
            var totalBranches = activityInput.Template.fs.Lines.Where(line => line.ToId == activityInput.CurrentActivity.Id).Count();
            var res = await _workItemRepository.Select.Where(w => w.PreviousActivityId == preActvitiyId && w.State == ActivityState.Waiting).ToListAsync();
            long finshedBranches = 0;

            ///找到等待的节点 
            if (res != null && res.Count == 1)
            {
                var waitingWorkItem = res[0];
                finshedBranches = await _workItemRepository.Select.Where(w => w.GroupId == waitingWorkItem.GroupId && w.State == ActivityState.Finished).CountAsync();

                waitingWorkItem.State = ActivityState.Finished;
                await _workItemRepository.UpdateAsync(waitingWorkItem);
            }
            else
            {//没找到则创建等待节点 
                await AddNextWorkItems(activityInput, preActvitiyId);
            }
            if (finshedBranches == totalBranches - 1)
            {
                IsFindNext = true;


            }

            return IsFindNext;

        }

        /// <summary>
        /// 查找节点参与人
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="activity"></param>
        /// <returns></returns>
        public override async Task<List<long>> GetParticipants(ActivityInput  activityInput)
        {
            var instance= activityInput.Instance;
            var activity = activityInput.CurrentActivity;

            //0表示找不到或者不需要處理人
            List<long> employees = new List<long> { 0 };

            //"start"
            if (activity.Type == ActivityType.Start)// employees == null || employees.Count == 0)
            {   //發起人
                //賦值發起人給start節點
                var employee = instance.InitiatorId;
                employees = new List<long> { employee };
            }
            else if (activity.Type == ActivityType.Approve || activity.Type == ActivityType.Deal)
            {
                var ous = activity.Approve.Participants;
                if (activity != null && activity.Approve != null)
                    try
                    {

                        if (activity.Approve.AssigneeType == "myself")
                        {
                            var employeeId = instance.InitiatorId;
                            employees = new List<long> { employeeId };
                        }
                        else
                        if (activity.Approve.AssigneeType == "supervisor")
                        {

                            var level = activity.Approve.Level;
                            var employeeId = instance.InitiatorId;
                            var supervisors = await _orgService.GetSupervisors(employeeId, level, activity.Approve.OUType, activity.Approve.IsDirectorIn);
                            employees = supervisors;
                        }

                        else if (activity.Approve.AssigneeType == "form")
                        {//从表单获取
                            var dicFields = JsonConvert.DeserializeObject<Dictionary<string, object>>(instance.FormModel);
                            var fieldId = activity.Approve.FieldId;
                            if (!dicFields.ContainsKey(fieldId))
                            {
                                throw ResultOutput.Exception("表单内没有对应的联系人可用于审批");
                            }
                            //  var form = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string,JObject>>(instance.FormData);
                            var temp = dicFields[fieldId] as JObject;
                            // form2.TryGetValue(fieldId,out JObject temp);
                            /* var participants = new Dictionary<string,List<Participant>>();
                             temp.PropertyValues().ToList().ForEach(f => {
                                 participants.AddRange(f.ToObject<Dictionary<string, List<Participant>>>()); 
                             });*/
                            var participants = temp.ToObject<Dictionary<string, List<Participant>>>();
                            var ems = await GetParticipants(participants);
                            employees = ems.Select(a => a.Id).ToList();
                        }
                        else if (activity.Approve.AssigneeType == "director")
                        {

                            var employeeId = instance.InitiatorId;
                            var directorId = await _orgService.GetDirectorByOUType(employeeId, activity.Approve.OUType);

                            if (directorId > 0)
                                employees = new List<long> { directorId };
                        }
                        else if (activity.Approve.AssigneeType == "optional")
                        { //选择的时候已经限制可选人，这里可以不再次过滤 //增加的时候


                            var temp = await GetParticipants(activityInput.OptionalParticipants);
                            if (temp?.Count > 0)
                            {
                                employees = temp.Select(a => a.Id).ToList();
                            }
                            else
                            {
                                // ResultOutput.NotOk("abcd");
                                var ex = new AppException("请选择审批人", "-1");
                                var ems = await GetParticipants(activity.Approve.Participants);
                                ex.Data.Add("optional", new { Range = ems, Name = activity.Title });

                                throw ex;

                            }


                        }

                        else
                        {
                            if (activity.Approve.Participants != null)
                            {
                                var ems = await GetParticipants(activity.Approve.Participants);
                                employees = ems.Select(a => a.Id).ToList();
                            }
                        }
                    }
                    catch (AppException ex)
                    {
                        throw ex;
                    }
                    catch (Exception ex)
                    {
                        throw ResultOutput.Exception(ex.Message);
                        employees = new List<long>
                        { //管理员id
                        };
                    }
            }
            if (employees.Count == 0)
            {//无人处理，转给管理员
                employees.Add(0);
            }
            return employees;
        }
        /// <summary>
        /// 新增工作项
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="templateId"></param>
        /// <param name="activity"></param>
        /// <returns></returns>

        public override async Task<List<WorkItemEntity>> AddNextWorkItems(ActivityInput  activityInput,string previousActivityId)
        {
            var activity = activityInput.CurrentActivity;
            if (activity == null)
                throw ResultOutput.Exception("未找到活动节点");
            var employees = await GetParticipants(activityInput);
            var list = new List<WorkItemEntity>();
            var idx = 0;
            var now = DateTime.Now;

            var groupId = AiliCould.Core.Helpers.UUIDHelper.GetUUID();

            var formActivityIds = activityInput.Template.fs.Lines.Where(line => line.ToId == activity.Id).Select(a => a.FromId).ToList();

            formActivityIds.ForEach(waitingActivityId =>
            {
                var item = new WorkItemEntity();

                ///这里时间必须一致，以便FindNextWorkItem不增加字段区分不同时间进入该节点的情况
                item.StartTime = now;

                item.ActivityName = activity.Title;
                //item.OUId=input.OUId;
                item.WorkflowTemplateId = activityInput.Template.Id;
                item.Title = activity.Title;//+ $"({activity.Name})";
                item.Type = activity.Type;
                ///这里的activityId是需要等待的activiyId
                item.PreviousActivityId = waitingActivityId;// activity.Id;
                item.ActivityId = activity.Id;
                item.InstanceId = activityInput.Instance.Id;
                item.GroupId = groupId;
                item.index = ++idx;
                item.Total = formActivityIds.Count;
                item.ParticipantId = 0;
                if (previousActivityId == waitingActivityId)
                    item.State = ActivityState.Finished;
                else
                    item.State = ActivityState.Waiting;
                item.FinishTime = now;
                //                    item.Comment = "并行网关，等待分支到达";
                list.Add(item);

            });

            var res = await _workItemRepository.InsertAsync(list);

            return res;
        }


    }
}
