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
using AI.BPM.Services.Organization.X;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Diagnostics;

namespace AI.BPM.Services.BPM.Activity.Activities
{
    public class ActivityOutput
    {

        public InstanceEntity Instance { get; set; }
        public WorkflowTemplateEntity Template { get; set; }  
        /// <summary>
        /// 自选参与人
        /// </summary>
       public  Dictionary<string, List<Participant>> OptionalParticipants { get; set; }
        public ActivityModel CurrentActivity { get; set; }
        public List<ActivityModel> NextActivities { get; set; }

       public  Dictionary<string,object> FormModel { get; set; }
    }
    public class DefaultActivityService : BaseService, IBaseService
    {
        protected IInstanceRepository _instanceRepository => LazyGetRequiredService<IInstanceRepository>();
        protected IWorkflowTemplateRepository _workflowTemplateRepository => LazyGetRequiredService<IWorkflowTemplateRepository>();
        protected IActivityService _activityService => LazyGetRequiredService<IActivityService>();
        protected IOrganizationService _orgService => LazyGetRequiredService<IOrganizationService>();
        protected IWorkItemRepository _workItemRepository => LazyGetRequiredService<IWorkItemRepository>();
        /// <summary>
        /// 工作项提交
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        [Transaction]
        public virtual async Task<ActivityOutput> Submit(InstanceDataInput input)
        {

            InstanceEntity instance = null;
            WorkflowTemplateEntity tpl = null;
            ActivityModel currentActivity = null;
            var workItemIds = new List<long> { };
            var workItem = default(WorkItemEntity);
            if (input.Type == QueryType.WorkItem)
            {
                workItem = await _workItemRepository.GetAsync(input.WorkItemId);
                if (workItem == null)
                    throw ResultOutput.Exception("该工作项不存在。");
                else
                {
                    if (workItem.ParticipantId != User.Id)
                    {//后续考虑委托办理和管理员权限可以代为操作
                        //throw ResultOutput.Exception("您不是该节点审批人，无权进行此操作！");
                    }
                    if (workItem.State == ActivityState.Finished)
                    {
                        throw ResultOutput.Exception("该工作项已完成。");
                    }
                    tpl = await _workflowTemplateRepository.GetAsync(workItem.WorkflowTemplateId);
                    instance = await _instanceRepository.GetAsync(workItem.InstanceId);
                    currentActivity = _activityService.GetActivity(tpl, workItem.ActivityId);

                    if (!input.IsSaveOnly)
                        ValidInput(input, tpl);

                    workItemIds.Add(input.WorkItemId);

                }
            }
            /*  else
              {
                  throw ResultOutput.Exception("非法请求！");
              }*/



            ///根据表单设置的权限更新表单
            var formModel = _activityService.UpdateForm(instance.FormModel, currentActivity.Permission, input.Form);

            instance.FormModel = JsonConvert.SerializeObject(formModel);
            ///更新表单信息
            await _instanceRepository.UpdateAsync(instance);
            ///******************************************************************************************************************///


            if (!input.IsSaveOnly)
            {


                if (workItemIds.Count == 1)
                    await FinishWorkItem(workItemIds[0], input.Comment, input.ApprovalResult);
              var activityOutput=  new ActivityOutput
                {
                    Instance = instance,
                    Template = tpl,
                    OptionalParticipants = input.OptionalParticipants,
                    FormModel = formModel,
                    CurrentActivity = currentActivity

                };
                //沒有後續工作項則進入下一個節點
                if (await CanContinue(activityOutput, workItem, input))
                {

                    return activityOutput;
                 //   return await AddNextActivitiesAsync(tpl, workItem.ActivityId, formModel, instance, input.OptionalParticipants);

                }
            }
            return null;
        }
        /// <summary>
        /// 输入校验
        /// </summary>
        /// <param name="input"></param>
        /// <param name="tpl"></param>
        public virtual void ValidInput(InstanceDataInput input, WorkflowTemplateEntity tpl)
        {


        }
        /// <summary>
        /// 是否进入下一个活动
        /// </summary>
        /// <returns></returns>
        public virtual async Task<bool> CanContinue(ActivityOutput activityInput , WorkItemEntity workItem, InstanceDataInput input)
        {
            //Task.FromResult(true)
            return true;
        }

        /// <summary>
        /// 是否继续通过并继续查找后续
        /// </summary>
        /// <param name="activity"></param>
        /// <param name="output"></param>
        /// <param name="previousActvitiyId"></param>
        /// <returns></returns>
        public virtual async Task<(bool IsFindNext, bool IsAddTodo)> WhatsNext(ActivityOutput output, string previousActvitiyId)
        { 
            return (IsFindNext: false, IsAddTodo: true);
            ///如果满足所有条件，则通过并查找后续 活动
           // if (IsPass)
            //   await AddNextActivitiesAsync(tpl, nextActivity.Id, formModel, instance, optionalParticipants);



        }
        /// <summary>
        /// 添加后续活动节点
        /// </summary>
        /// <param name="tpl"></param>
        /// <param name="activityId"></param>
        /// <param name="formModel"></param>
        /// <param name="instance"></param>
        /// <param name="optionalParticipants"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public virtual async Task<List<ActivityModel>> AddNextActivitiesAsync(ActivityOutput input)
        {
            List<ActivityModel> nextActivities = new List<ActivityModel>();
            _activityService.FindNextActivity(input.Template, input.CurrentActivity.Id, nextActivities, input.FormModel);
           /* if (nextActivities.Count > 0)
            {
                for (var k = 0; k < nextActivities.Count(); k++)
                {//逐一激活节点
                    Console.WriteLine("激活活动：" + nextActivities[k].Title + nextActivities[k].Type.ToString());
                    var nextActivity = nextActivities[k];

                    await AddNextWorkItems(instance, tpl, nextActivity, activityId, optionalParticipants);
                }
                //完成当前节点工作项目
            }
            else
            {
                ///没有找到后续节点 流程异常
                throw new Exception("没有找到后续节点 流程异常");
            }*/

            return  nextActivities;
        }



        /// <summary>
        /// 查找节点参与人
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="activity"></param>
        /// <returns></returns>
        public virtual async Task<List<long>> GetParticipants(ActivityOutput acitivityInput)
        {

            //0表示找不到或者不需要處理人
            List<long> employees = new List<long> { 0 };


            return employees;
        }

        public virtual async Task<WorkItemEntity> AddCurrentWorkItem(ActivityModel activity, InstanceEntity instance, WorkflowTemplateEntity tpl, string previousActivityId, Dictionary<string, List<Participant>> optionalParticipants)
        {

            var res = new WorkItemEntity();
            return res;
        }
        /// <summary>
        /// 添加工作项
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="templateId"></param>
        /// <param name="activity"></param>
        /// <returns></returns>

        public virtual async Task<List<WorkItemEntity>> AddNextWorkItems(ActivityOutput activityInput,  string previousActivityId)
        {

            var activity = activityInput.CurrentActivity;
            if (activity == null)
            {//找不到后续工作节点，记录异常转给管理员处理  

                throw ResultOutput.Exception("未找到活动节点！");
            }
            var employees = await GetParticipants(activityInput);
            var list = new List<WorkItemEntity>();
            var idx = 0;
            var now = DateTime.Now;

            var groupId = AiliCould.Core.Helpers.UUIDHelper.GetUUID();


            var items = await GetWorkItems(activityInput.Instance.Id);
            //提取发起人和者审批人
            items = items.Where(item => item.Type == ActivityType.Approve && item.State == ActivityState.Finished).ToList();

            employees.ForEach(employeeId =>
            {
                var item = new WorkItemEntity();

                ///这里时间必须一致，以便FindNextWorkItem不增加字段区分不同时间进入该节点的情况
                item.StartTime = now;
                item.ActivityName = activity.Title;
                //item.OUId=input.OUId;
                item.WorkflowTemplateId = activityInput.Template.Id;
                item.PreviousActivityId = previousActivityId;
                item.Title = activity.Title;//+ $"({activity.Name})";
                item.Type = activity.Type;
                item.ActivityId = activity.Id;
                item.InstanceId = activityInput.Instance.Id;
                item.GroupId = groupId;
                item.index = ++idx;
                item.Total = employees.Count;
                item.ParticipantId = employeeId;

                item.State = ActivityState.ToDo; 

                list.Add(item);
            });

            var res = await _workItemRepository.InsertAsync(list);

            return res;
        }




        #region 活动通用操作
        


        /// <summary>
        /// 获取配置的参与人
        /// </summary>
        /// <param name="humans"></param> 
        /// <returns></returns>
        protected async Task<List<EmployeeSelectDto>> GetParticipants(Dictionary<string, List<Participant>> participants)
        {

            var list = new List<EmployeeSelectDto>();
            participants.ToList().ForEach(v =>
            {
                if (v.Key == "user")
                {
                    v.Value.ForEach(async h =>
                    {//直接賦值即可
                        list.Add(new EmployeeSelectDto { Id = h.Id, Name = h.Name, Type = h.Type });
                    });
                }
                else if (v.Key == "role")
                {

                    v.Value.ForEach(async h =>
                    {
                        //根據崗位查找員工
                        var employees = await _orgService.GetEmployeesByRoleAsync(h.Id);

                        list.AddRange(employees);
                    });
                }
                else if (v.Key == "org")
                {
                    v.Value.ForEach(async h =>
                    {
                        var employees = await _orgService.GetEmployeesByOUAsync(h.Id);
                        list.AddRange(employees);
                    });
                }


            }
            );
            return list;
        }

        #endregion
        #region 工作项通用操作

        /// <summary>
        /// 获取流程所有工作项节点
        /// </summary>
        /// <param name="instanceId"></param>
        /// <returns></returns>
        protected async Task<List<WorkItemOutput>> GetWorkItems(long instanceId)
        {

            ///获取该实例所有工作节点
            var items = await _workItemRepository.Where(i => i.InstanceId == instanceId).ToListAsync(
                r => new WorkItemOutput
                {
                    Type = r.Type,
                    Comment = r.Comment,
                    FinishTime = r.FinishTime,
                    StartTime = r.StartTime,
                    State = r.State,
                    Title = r.Title,
                    ActivityName = r.ActivityName,
                    ParticipantId = r.ParticipantId,
                    Name = r.Instance.Initiator.NickName ?? r.Instance.Initiator.Name,
                    Participant = r.Participant.NickName ?? r.Participant.Name,
                    Executor = r.Executor.NickName ?? r.Executor.Name,
                    ApprovalResult = r.ApprovalResult.ToString()
                });
            return items;
        }

        /// <summary>
        /// 取消工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <param name="comment"></param>
        /// <returns></returns>
        protected async Task CancelWorkItem(long itemId, string comment)
        {
            if (!(itemId > 0))
            {
                throw ResultOutput.Exception("id为0");
            }
            var workItem = await _workItemRepository.GetAsync(itemId);
            //更新處理人
            workItem.ExecutorId = User.Id;
            workItem.State = ActivityState.Canceled;
            workItem.Comment = comment;
            workItem.FinishTime = DateTime.Now;
            await _workItemRepository.UpdateAsync(workItem);
            ///检查是否有afteractive动作需要执行
            /// 
        }
        /// <summary>
        /// 完成工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <param name="comment"></param>
        /// <param name="approvalResult"></param>
        /// <returns></returns>
        protected async Task FinishWorkItem(long itemId, string comment, ApprovalResult approvalResult, long nextWorkItemId = 0)
        {
            if (!(itemId > 0))
            {
                throw ResultOutput.Exception("id为0");
            }
            var workItem = await _workItemRepository.GetAsync(itemId);
            //更新處理人
            workItem.ExecutorId = User.Id;
            workItem.State = ActivityState.Finished;
            workItem.FinishTime = DateTime.Now;
            workItem.Comment = comment;
            workItem.ApprovalResult = approvalResult;

            await _workItemRepository.UpdateAsync(workItem);
            ///检查是否有afteractive动作需要执行
            /// 
        }

        #endregion
    }
}
