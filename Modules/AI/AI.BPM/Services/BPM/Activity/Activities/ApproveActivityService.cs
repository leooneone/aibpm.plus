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
using System.Diagnostics;

namespace AI.BPM.Services.BPM.Activity.Activities
{
    /// <summary>
    /// 审批活动
    /// </summary>
    public class ApproveActivityService : DefaultActivityService
    {
        public override async Task<ActivityOutput> Submit(InstanceDataInput input)
        {
            return await base.Submit(input);

        }
        /// <summary>
        /// 校验输入
        /// </summary>
        /// <param name="input"></param>
        /// <param name="tpl"></param>
        public override void ValidInput(InstanceDataInput input, WorkflowTemplateEntity tpl)
        {


            if (input.ApprovalResult == ApprovalResult.NA)
            {
                throw ResultOutput.Exception("请选择审批结果。");
            }
            else
            if (tpl.advanced.Approve.RemarkRequired && string.IsNullOrEmpty(input.Comment))
            {
                throw ResultOutput.Exception("请提交审批意见。");
            }



        }




        /// <summary>
        /// 是否可以通过，查找后续活动节点
        /// </summary>
        /// <returns></returns>
        public override async Task<bool> CanContinue(ActivityInput  activityInput, WorkItemEntity workItem, InstanceDataInput input)
        {

            return await ProcessSignWorkItem(activityInput, workItem, input.ApprovalResult);

        }

        /// <summary>
        /// 处理多人参与工作
        /// </summary>
        /// <param name="currentActivity"></param>
        /// <param name="tpl"></param>
        /// <param name="instance"></param>
        /// <param name="workItem"></param>
        /// <param name="approvalResult"></param>
        /// <returns></returns>
        async Task<bool> ProcessSignWorkItem(ActivityInput  activityInput, WorkItemEntity workItem, ApprovalResult approvalResult)
        {
            ///是否查找后续节点   
            bool IsFindNext = false;
            var tpl = activityInput.Template;
            var instance = activityInput.Instance;
            var currentActivity = activityInput.CurrentActivity;
            if (approvalResult == ApprovalResult.False)
            {
                //查找上一个节点
                var activity = _activityService.GetStartActivity(tpl);
                var items = await _workItemRepository.Select.Where(w => w.InstanceId == instance.Id &&
                //w.ActivityId == workItem.ActivityId && w.Id != workItem.Id &&
                (w.State == ActivityState.Waiting || w.State == ActivityState.ToDo)).ToListAsync();
                //await _workItemRepository.Select.Where(w => w.InstanceId == instance.Id && w.ActivityId == workItem.ActivityId && w.Id != workItem.Id && (w.State == ActivityState.Waiting || w.State == ActivityState.ToDo)).ToListAsync();
                //关闭所有未完成工作项
                for (var k = 0; k < items.Count; k++)
                {

                    await CancelWorkItem(items[k].Id, "其他审批人已拒绝，工作项取消");
                }
               
                //自动驳回到开始节点
                // AddStartWorkItem(activity, workItem.ActivityId, activityInput);

                var previousActivityId = currentActivity.Id;
                activityInput.CurrentActivity = activity;
                var res = await AddReturnWorkItem(activityInput, previousActivityId);

            }
            else
            {
                if (currentActivity.Approve.SignType == "counterAnd")
                {//判斷是否所有的工作項已經完成  index /total
                    var cnt = _workItemRepository.Select.Where(w => w.InstanceId == workItem.InstanceId && w.GroupId == workItem.GroupId && w.State == ActivityState.Finished
                    ).Count();
                    //當前工作項尚未完成，所以需要+1
                    if (workItem.Total == cnt + 1)
                        IsFindNext = true;
                }
                else if (currentActivity.Approve.SignType == "counterOr")
                {//任意一個完成 


                    var items = await _workItemRepository.Select.Where(w => w.InstanceId == instance.Id && w.GroupId == workItem.GroupId && w.Id != workItem.Id && (w.State == ActivityState.Waiting || w.State == ActivityState.ToDo)).ToListAsync();
                    //关闭所有未完成工作项
                   
                    for (var k = 0; k < items.Count; k++)
                    {

                        await CancelWorkItem(items[k].Id, "其他审批人已拒绝，工作项取消");
                    }
                    IsFindNext = true;
                }
                else
                if (currentActivity.Approve.SignType == "string")
                {//無需處理
                    var nextWorkItem = await FindStringNextWorkItem(workItem);

                    if (nextWorkItem == null)
                        IsFindNext = true;
                    else
                    {
                       
                        //nextWorkItem.State = ActivityState.ToDo;
                        ActiveWorkItem(nextWorkItem, currentActivity);
                        await _workItemRepository.UpdateAsync(nextWorkItem);
                    }

                }

            }
            return IsFindNext;
        }

        /// <summary>
        /// 查找串签后续工作项
        /// </summary>
        /// <param name="ent"></param>
        /// <returns></returns>
        async Task<WorkItemEntity> FindStringNextWorkItem(WorkItemEntity ent)
        {

            var index = ent.index;
            if (ent.index < ent.Total)
            {
                ///根据接收时间来区分不同时间进入的同一个活动节点
                //  return  await _workItemRepository.Select.Where(w=>w.index==(index+1)&&ent.StartTime==w.StartTime).ToOneAsync();
                return await _workItemRepository.Select.Where(w => w.index == index + 1 &&
               w.GroupId == ent.GroupId
                //ent.StartTime == w.StartTime && ent.ActivityId == w.ActivityId 
                && w.Id != ent.Id && w.State == ActivityState.Waiting).ToOneAsync();

            }
            else
                return null;

        }



        /// <summary>
        /// 查找节点参与人
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="activity"></param>
        /// <returns></returns>
        public override async Task<List<long>> GetParticipants(ActivityInput  acitivityInput)
        {
            var activity = acitivityInput.CurrentActivity;
            var instance = acitivityInput.Instance;
            var tpl = acitivityInput.Template;
            //0表示找不到或者不需要處理人
            List<long> employees = new List<long> { 0 };
            //"start"

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


                        var temp = await GetParticipants(acitivityInput.OptionalParticipants);
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
          /*  if (employees.Count == 0)
            {//无人处理，转给管理员
                employees.Add(0);
            }*/
            return employees;
        }





        public virtual async Task<WorkItemEntity> AddReturnWorkItem(ActivityInput  activityInput, string PreviousActivityId)
        {
            ActivityModel activity = activityInput.CurrentActivity;
            var instance = activityInput.Instance;
            var tpl = activityInput.Template;
            if (activity == null)
                throw ResultOutput.Exception("未找到活动节点");
             
            var now = DateTime.Now; 

            var groupId = AiliCould.Core.Helpers.UUIDHelper.GetUUID(); 

            var item = new WorkItemEntity();

            ///这里时间必须一致，以便FindNextWorkItem不增加字段区分不同时间进入该节点的情况
            item.StartTime = now;
            item.ActivityName = activity.Title;
            //item.OUId=input.OUId;
            item.WorkflowTemplateId = tpl.Id;
            item.PreviousActivityId = PreviousActivityId;
            item.Title = activity.Title;//+ $"({activity.Name})";
            item.Type = activity.Type;
            item.ActivityId = activity.Id;
            item.InstanceId = instance.Id;
            item.GroupId = groupId;
            item.index = 1;
            item.Total = 1;
            item.ParticipantId = instance.InitiatorId;
            ActiveWorkItem(item, activity); 


            var res = await _workItemRepository.InsertAsync(item);

            return res;
        }
        /// <summary>
        /// 新增工作项
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="templateId"></param>
        /// <param name="activity"></param>
        /// <returns></returns>

        public override async Task<List<WorkItemEntity>> AddNextWorkItems(ActivityInput  activityInput, string PreviousActivityId)
        {
            ActivityModel activity = activityInput.CurrentActivity;
            var instance = activityInput.Instance;
            var tpl = activityInput.Template;
            if (activity == null)
                throw ResultOutput.Exception("未找到活动节点");
            var employees = await GetParticipants(activityInput);
            var list = new List<WorkItemEntity>();



            if (employees.Count == 0)
            {
                if (activity.Approve.WhenNullParticipant == WhenNullParticipant.ToAdmin)
                {
                    var setting = await base.GetSetting();
                    employees.Add(setting.AdminId);
                }
                else
                        if (activity.Approve.WhenNullParticipant == WhenNullParticipant.Pass)
                {
                    ///直接返回 继续后续流转；
                    return list;
                }
            }

            var idx = 0;
            var now = DateTime.Now;


            var groupId = AiliCould.Core.Helpers.UUIDHelper.GetUUID();


            var items = await GetWorkItems(instance.Id);
            //提取发起人和者审批人
            items = items.Where(item => item.Type == ActivityType.Approve && item.State == ActivityState.Finished).ToList();

            employees.ForEach(employeeId =>
            {
                var item = new WorkItemEntity();

                ///这里时间必须一致，以便FindNextWorkItem不增加字段区分不同时间进入该节点的情况
                item.StartTime = now;
                item.ActivityName = activity.Title;
                //item.OUId=input.OUId;
                item.WorkflowTemplateId = tpl.Id;
                item.PreviousActivityId = PreviousActivityId;
                item.Title = activity.Title;//+ $"({activity.Name})";
                item.Type = activity.Type;
                item.ActivityId = activity.Id;
                item.InstanceId = instance.Id;
                item.GroupId = groupId;
                item.index = ++idx;
                item.Total = employees.Count;
                item.ParticipantId = employeeId;
                ///串签
                if (activity?.Approve?.SignType == "string")
                {
                    if (idx == 1)
                        ActiveWorkItem(item, activity);
                    else
                        item.State = ActivityState.Waiting;
                }
                else
                    ActiveWorkItem(item, activity); 



                if (tpl.advanced.AutoRepeat && items.Any(item => item.ParticipantId == employeeId))
                {//已经存在 根据去重规则去重 
                    item.State = ActivityState.Skiped;
                    item.Comment = "审批人自动去重，跳过审批人";
                }
                else if (tpl.advanced.MyAuditAutoPass && instance.InitiatorId == employeeId)
                {//已经存在 根据去重规则去重 
                    item.State = ActivityState.Skiped;
                    item.Comment = "审批人为发起人，跳过审批人";
                }


                list.Add(item);
            });

            var res = await _workItemRepository.InsertAsync(list);

            return res;
        }


    }
}
