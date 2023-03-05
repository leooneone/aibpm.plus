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
    public class EndActivityService : DefaultActivityService
    {
        /// <summary>
        /// 结束节点该干点啥
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public override async Task<(bool IsFindNext, bool IsAddTodo)> WhatsNext( ActivityOutput activityInput, string previousActvitiyId)
        { 
            ///结束时
            var instance = activityInput.Instance;
            var items = await _workItemRepository.Select.Where(w => w.InstanceId == instance.Id && (w.State == ActivityState.ToDo || w.State == ActivityState.Waiting)).ToListAsync();
            //关闭所有未完成工作项
            items.ForEach(async item =>
            {
                //不需要取消傳閱
                if (item.Type != ActivityType.Copy)
                    await CancelWorkItem(item.Id, "流程结束，工作项取消");
            });


            instance.FinishedTime = DateTime.Now;
            instance.State = InstanceState.Finished;

            //如需要，可在此处根据表单数据将数据

            await _instanceRepository.UpdateAsync(instance);
            Console.WriteLine("流程结束");
            await AddEndWorkItem(activityInput,previousActvitiyId);
            return (IsFindNext: false, IsAddTodo: false);
        }




        /// <summary>
        /// 激活活动,新增工作项
        /// </summary>
        /// <param name="activity"></param>
        /// <param name="instance"></param>
        /// <param name="templateId"></param>
        /// <param name="previousActivityId"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        [Transaction]
        async Task<WorkItemEntity> AddEndWorkItem(ActivityOutput activityInput, string previousActivityId)
        {
            var instance = activityInput.Instance;
            var tpl = activityInput.Template;
            var activity = activityInput.CurrentActivity;
            if (activity == null)
                throw ResultOutput.Exception("未找到活动节点");
            var list = new List<WorkItemEntity>();
            var now = DateTime.Now;
            var groupId = AiliCould.Core.Helpers.UUIDHelper.GetUUID();
            var item = new WorkItemEntity();

            ///这里时间必须一致，以便FindNextWorkItem不增加字段区分不同时间进入该节点的情况
            item.StartTime = now;
            item.ActivityName = activity.Title;
            item.WorkflowTemplateId = tpl.Id;
            item.PreviousActivityId = previousActivityId;
            item.Title = activity.Title;//+ $"({activity.Name})";
            item.Type = activity.Type;
            item.ActivityId = activity.Id;
            item.InstanceId = instance.Id;
            item.GroupId = groupId;
            item.index = 0;
            item.Total = 0;
            item.ParticipantId = 0;
            item.State = ActivityState.Finished;
            item.FinishTime = DateTime.Now;

            var res = await _workItemRepository.InsertAsync(item);

            return res;
        }
    }
}
