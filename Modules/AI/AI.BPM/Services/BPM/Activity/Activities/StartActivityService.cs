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
    public class StartActivityService : DefaultActivityService
    {

        #region 当前节点是Start
        /// <summary>
        /// 工作项提交
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>

        public override async Task<ActivityOutput> Submit(InstanceDataInput input)
        {

            InstanceEntity instance = null;

            WorkflowTemplateEntity tpl = null;
            ActivityModel currentActivity = null;
            var workItemId = 0l;
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

                    workItemId=input.WorkItemId;

                }
            }
            else
            if (input.Type == QueryType.Template)
            {
                tpl = await _workflowTemplateRepository.GetAsync(input.TemplateId);

                if (input.InstanceId <= 0)
                {//如果还没有创建实例，先创建实例

                    instance = new InstanceEntity();
                    instance.FormModel = JsonConvert.SerializeObject(input.Form);

                    instance.TemplateId = input.TemplateId;
                    instance.GroupId = tpl.GroupId;
                    instance.Name = tpl.Name;
                    instance.OUId = input.OUId;
                    instance.InitiatorId = User.Id;
                    if (!input.IsSaveOnly)
                    ///仅保存的话不存储流程实例
                    {
                        instance.State = InstanceState.Running;
                        //
                        instance.ReferenceNo = AiliCould.Core.BPM.Helper.ReferenceNoHelper.GetNo(new AiliCould.Core.BPM.Helper.ReferenceNoSetting { DateFormat = "yyyyMMdd", Length = 10, Type = AiliCould.Core.BPM.Helper.ReferenceNoType.Global, Format = "" }, "");
                    }
                    else
                        instance.State = InstanceState.UnInitiated;
                    var res = await _instanceRepository.InsertAsync(instance);

                }
                currentActivity = _activityService.GetActivity(tpl, input.ActivityCode);
                {//沒有創建 workItem 則創建 workItem
                    workItem = await AddCurrentWorkItem(instance, tpl, currentActivity,input.IsSaveOnly);
                    //完成当前节点工作项目

                }
                  workItemId = workItem.Id;
            }


            if (string.IsNullOrEmpty(instance.ReferenceNo) && !input.IsSaveOnly)
            {  instance.ReferenceNo = AiliCould.Core.BPM.Helper.ReferenceNoHelper.GetNo(new AiliCould.Core.BPM.Helper.ReferenceNoSetting { DateFormat = "yyyyMMdd", Length = 10, Type = AiliCould.Core.BPM.Helper.ReferenceNoType.Global, Format = "" }, "");
                instance.State = InstanceState.Running;
            }

            ///根据表单设置的权限更新表单
            var formModel = _activityService.UpdateForm(instance.FormModel, currentActivity.Permission, input.Form);

            instance.FormModel = JsonConvert.SerializeObject(formModel);
            ///更新表单信息
            await _instanceRepository.UpdateAsync(instance);
            if (input.IsSaveOnly)
                return null;
            else
            {
                await FinishWorkItem(workItemId, input.Comment, input.ApprovalResult);
                return new ActivityOutput
                {
                    Instance = instance,
                    Template = tpl,
                    OptionalParticipants = input.OptionalParticipants,
                    FormModel = formModel,
                    CurrentActivity = currentActivity

                };

            }


        }


    
        async Task<WorkItemEntity> AddCurrentWorkItem(InstanceEntity instance, WorkflowTemplateEntity tpl, ActivityModel activity,bool isSaveOnly)
        {
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
            item.PreviousActivityId = "";
            item.Title = activity.Title;//+ $"({activity.Name})";
            item.Type = activity.Type;
            item.ActivityId = activity.Id;
            item.InstanceId = instance.Id;
            item.GroupId = groupId;
            item.index = 1;
            item.Total = 1;
            //发起人是用户自己
            item.ParticipantId = User.Id;

          
              item.State = ActivityState.ToDo;


            var res = await _workItemRepository.InsertAsync(item);

            return res;
        }
        #endregion
    }
}
