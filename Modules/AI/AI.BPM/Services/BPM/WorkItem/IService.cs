

using AI.Core.Model.BPM;
using AI.BPM.Services.WorkItem.Input;
using AI.BPM.Services.Instance.Input;
using AI.BPM.Services.WorkItem.Output;
using System.Threading.Tasks;
using System.Collections.Generic; 
using ZhonTai.Admin.Services;
using ZhonTai.Admin.Core.Dto;
using AI.BPM.Services.BPM.WorkflowItem.Dto;
using AI.BPM.Domain.Activity;
using AI.BPM.Services.Instance.Dto;
using AI.BPM.Core.Enums;
using AI.BPM.Domain.WorkflowTemplate;

namespace AI.BPM.Services.WorkItem
{
    /// <summary>
    /// 工作項服务 
    /// 0. REST
    /// 1.激活 2.取消 3.挂起 4.恢復 5.調整、完成   其他：咨詢、轉發、協助、催辦
    /// </summary>
    public interface IWorkItemService
    {
        /// <summary>
        /// 增加工作项
        /// </summary>
        /// <param name="activity"></param>
        /// <param name="instance"></param>
        /// <param name="templateId"></param>
      ///  Task<List<long>> AddWorkItem(ActivityModel activity, InstanceEntity instance, WorkflowTemplateEntity tpl,Dictionary<string,List<Participant>> optionalParticipants);
        /// <summary>
        /// 提交工作项
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        Task Submit(InstanceDataInput input);
        /// <summary>
        /// 完成工作項
        /// </summary>
        /// <param name="itemId"></param>
        /// <param name="comment"></param>
        /// <param name="approvalResult"></param>
        /// <returns></returns>
        //Task FinishWorkItem(long itemId, string comment, ApprovalResult approvalResult);

        /// <summary>
        /// 获取流程实例信息
        /// </summary>
        /// <param name="instanceId"></param>
        /// <param name="workItemId"></param>
        /// <returns></returns>
        Task<InstanceOutput> GetInstanceAsync( long instanceId);

        Task ActivateAsync(long itemId);
        Task SuspendAsync(long itemId);
        Task CancelAsync(long itemId);
        Task ResumeAsync(long itemId);
        Task AdustifyAsync(long itemId);
        Task UrgeAsync(long itemId);
        /* Task ConsultAsync(long itemId);
         Task ForwardAsync(long itemId);
         Task AssistAsync(long itemId);*/

        Task<dynamic> StartAsync(long workItemId);
        Task<WorkItemGetOutput> GetAsync(long id);

        Task<PageOutput<WorkItemGetPageOutput>> PageAsync(PageInput<WorkItemGetPageDto> input);

        Task<dynamic> Statstics();
         
    }
}