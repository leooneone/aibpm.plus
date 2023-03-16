using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Configs;
using ZhonTai.Admin.Core.Helpers;


using AI.Core.Model.BPM;
using ZhonTai.Admin.Core.Repositories;
using AI.Core.Repository.BPM;
using AI.BPM.Services.WorkItem.Input;
using AI.BPM.Services.WorkItem.Output;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AI.BPM.Services.Activity;
using System;
using AI.BPM.Services.Instance.Input;
using Microsoft.AspNetCore.Http;
using AI.BPM.Services.Instance;
using Newtonsoft.Json.Linq;

using ZhonTai.Admin.Services;
using ZhonTai.Admin.Core.Dto;
using ZhonTai.Admin.Services.Org;
using AI.BPM.Services.Organization.OU;
using AI.BPM.Services.Organization.X;

using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;
using Microsoft.AspNetCore.Authorization;
using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Domain.Activity;
using AI.BPM.Services.BPM.WorkflowItem.Dto;
using System.Diagnostics;
using AI.BPM.Services.Instance.Dto;
using System.Xml.Linq;
using AI.BPM.Core.Enums;
using NetTopologySuite.Operation.Overlay.Snap;
using COSXML.Log;
using ZhonTai.Admin.Core.Exceptions;
using AI.BPM.Services.X.Dto;
using SixLabors.ImageSharp.ColorSpaces;
using System.Reflection;
using Newtonsoft.Json;
using AI.BPM.Services.WorkflowTemplate.Output;
using Minio.DataModel;
using AI.Core.Extensions;
using System.Text.RegularExpressions;
using AI.BPM.Services.BPM.Activity.Activities;
using Ubiety.Dns.Core.Records;

namespace AI.BPM.Services.WorkItem
{
    /// <summary>
    /// 工作項服务
    /// </summary>
    [DynamicApi(Area = BPMConstants.AreaName)]
    [AllowAnonymous]
    public class WorkItemService : BaseService, IWorkItemService, IDynamicApi
    {

        /// 0. REST
        /// 1.激活 2.取消 3.挂起 4.恢復 5.調整、完成   其他：咨詢、轉發、協助、催辦
        private  IWorkItemRepository _workItemRepository => LazyGetRequiredService<IWorkItemRepository>();
        private  IWorkflowTemplateRepository _workflowTemplateRepository => LazyGetRequiredService<IWorkflowTemplateRepository>();
 
        private  IInstanceService _InstanceService => LazyGetRequiredService<IInstanceService>();

        private  IActivityService _activityService => LazyGetRequiredService<IActivityService>(); 

        private StartActivityService _startActivityService => LazyGetRequiredService<StartActivityService>();
        private DealActivityService _dealActivityService => LazyGetRequiredService<DealActivityService>();
        private ApproveActivityService _approveActivityService => LazyGetRequiredService<ApproveActivityService>();
        private DefaultActivityService _defaultActivityService => LazyGetRequiredService<DefaultActivityService>();
        private EndActivityService _endActivityService => LazyGetRequiredService<EndActivityService>();
        private ParallelGatewayActivityService _parallelGatewayActivityService => LazyGetRequiredService<ParallelGatewayActivityService>();
        private ExclusiveGatewayActivityService _exclusiveGatewayActivityService => LazyGetRequiredService<ExclusiveGatewayActivityService>();
        
        
        // private readonly IRepositoryBase<WorkItemOUEntity> _WorkItemOrganizationRepository;

        public WorkItemService(
            
        )
        {

              
        }
        /// <summary>
        /// 激活工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>
        public async Task ActivateAsync(long itemId)
        {
            var item = await GetAsync(itemId);


        }
        /// <summary>
        /// 暂停工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>
        public async Task SuspendAsync(long itemId)
        {

        }

        /// <summary>
        /// 取消工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>
        public async Task CancelAsync(long itemId)
        {

        }
        /// <summary>
        /// 恢复工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>
        public async Task ResumeAsync(long itemId)
        {

        }
        /// <summary>
        /// 调整工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>
        public async Task AdustifyAsync(long itemId)
        {

        }
        /// <summary>
        /// 催单
        /// </summary>
        /// <param name="itemId"></param>
        /// <returns></returns>

        public async Task UrgeAsync(long itemId)
        {

        }
        /// <summary>
        /// 获取工作项
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<WorkItemGetOutput> GetAsync(long id)
        {
            var res = new WorkItemGetOutput();

            var dto = await _workItemRepository.Select
            .WhereDynamic(id)
            // .IncludeMany(a => a.Organizations.Select(b => new OUEntity { Id = b.Id }))
            .ToOneAsync(a => new WorkItemGetOutput
            {
                //  OrganizationName = a.Organization.Name,
                //  PositionName = a.Position.Name
            });

            return dto;
        }


        public async Task<dynamic> Statstics()
        {

            var employeeId = User.Id;

            ///我参与的
            var list = await _workItemRepository.Select.Where(w => w.ParticipantId == User.Id).GroupBy(w => new { w.State })
             .ToListAsync(a => new
             {
                 a.Key.State,
                 Count = a.Count()
             });
            ///我处理的
            var list1 = await _workItemRepository.Select.Where(w => w.ExecutorId == User.Id).GroupBy(w => new { w.State })
            .ToListAsync(a => new
            {
                a.Key.State,
                Count = a.Count()
            });
            ///我创建的
            var list2 = await _workItemRepository.Select.Where(w => w.CreatedUserId == User.Id).GroupBy(w => new { w.State })
           .ToListAsync(a => new
           {
               a.Key.State,
               Count = a.Count()
           });

            return new { list, list1, list2 };
        }

        /// <summary>
        /// 工作项分页
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PageOutput<WorkItemGetPageOutput>> PageAsync(PageInput<WorkItemGetPageDto> input)
        {

            var employeeId = User.Id;


            // return ResponseOutput.NotOk();
            var list = await _workItemRepository.Select
             .WhereIf(input.Filter.State >= 0, w => w.State == input.Filter.State)
             .WhereIf(!string.IsNullOrEmpty(input.Filter.Name), w => w.Name.Contains(input.Filter.Name))
             .WhereDynamicFilter(input.DynamicFilter)
             .WhereIf(input.Filter.IsMyself, w => w.ParticipantId == employeeId)
             .WhereIf(!input.Filter.IsMyself, w => w.ParticipantId != employeeId || w.Instance.InitiatorId == employeeId)

             .Count(out var total)
             .OrderByDescending(true, a => a.Id)
             //   .IncludeMany(a => a.Organizations.Select(b => new OUEntity { Name = b.Name }))
             .Page(input.CurrentPage, input.PageSize)
             .ToListAsync(a => new WorkItemGetPageOutput
             {
                 Participant = a.Participant.NickName ?? a.Participant.Name,
                 InstanceName = a.Instance.Name,
                 Initiator = a.Instance.Initiator.NickName ?? a.Instance.Initiator.Name,
                 OUName = a.Instance.OU.Name,
                 Executor = a.Executor.NickName ?? a.Executor.Name,
                 ReferenceNo = a.Instance.ReferenceNo
                 // OrganizationName = a.Organization.Name,  
             });

            var data = new PageOutput<WorkItemGetPageOutput>()
            {
                List = list,
                Total = total
            };

            return data;
        }

        /// <summary>
        /// 根据工作项ID 启动流程
        /// </summary>
        /// <param name="workItemId"></param>
        /// <returns></returns>

        [Transaction]
        public async Task<dynamic> StartAsync(long workItemId)
        {

            var workItem = await _workItemRepository.GetAsync(workItemId);

            if (workItem == null)
            {
                throw ResultOutput.Exception("该工作项不存在。");
            }
            /*  if (workItem.State == ActivityState.Finished)
              {

                  return ("该工作项已完成。");
              }*/



            var res = await GetInstanceAsync(workItem.InstanceId);
            ActivityModel activity = null;

            var tpl = await _workflowTemplateRepository.GetAsync(workItem.WorkflowTemplateId);
            activity = _activityService.GetActivity(tpl, workItem.ActivityId);
            if (activity.Type != ActivityType.Copy)
                res.Form = _activityService.GetPermissionFormData(activity.Permission, tpl.FormSetting);

            return new { form = res.Form, model = res.Model, items = res.Items, activity = activity, approveSetting = (workItem.Type == ActivityType.Approve ? tpl.advanced.Approve : null) };


        }
        /// <summary>
        /// 获取流程所有工作项节点
        /// </summary>
        /// <param name="instanceId"></param>
        /// <returns></returns>
        async Task<List<WorkItemOutput>> GetWorkItems(long instanceId)
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
        /// 获取实例及相关信息
        /// </summary>
        /// <param name="instanceId"></param>
        /// <param name="workItemId"></param>
        /// <returns></returns>
        public async Task<InstanceOutput> GetInstanceAsync(long instanceId)
        {

            var instance = await _InstanceService.GetAsync(instanceId);
            if (instance == null)
            {
                ResultOutput.NotOk("流程实例不存在！");
                throw ResultOutput.Exception("流程实例不存在！");
            }

            ///获取该实例所有工作节点
            var items = await GetWorkItems(instanceId);
            var tpl = await _workflowTemplateRepository.GetAsync(instance.TemplateId);

            var formData = tpl.FormSetting;


            //默认只读权限  
            formData = _activityService.GetPermissionFormData(new List<FieldPermission>(), tpl.FormSetting);

            var data = new InstanceOutput
            {
                //  Activity = activity,
                Form = formData,
                Model = instance.FormModel,
                Items = items,
                Template = Mapper.Map<WorkflowTemplateGetOutput>(tpl),
                //   lines = tpl.fs.Lines,
                Instance = instance
            };

            return data;
        }
        DefaultActivityService GetService(ActivityType type)
        {

            DefaultActivityService srv = _defaultActivityService;
            if (type == ActivityType.Start)
            {
                srv = _startActivityService;

            }
            else if (type == ActivityType.End)
            {
                srv = _endActivityService;

            }
            else if (type == ActivityType.Approve)
            {
                srv = _approveActivityService;
            }
            else if (type == ActivityType.Deal)
            {
                srv = _dealActivityService;
            }
            else if (type == ActivityType.ExclusiveGW)
            {
                srv = _exclusiveGatewayActivityService;
            }
            else if (type == ActivityType.ParallelGW)
            {
                srv = _parallelGatewayActivityService;

            }
            else
            {
                srv = _defaultActivityService;

            }
            return srv;
        }
       /// <summary>
       /// 流程流转
       /// </summary>
       /// <param name="srv"></param>
       /// <param name="activityInput"></param>
       /// <returns></returns>
        public async Task GoNext(DefaultActivityService srv, ActivityOutput activityInput)
        {
            var previousActivityId = activityInput.CurrentActivity.Id;
            var nextActivities = await srv.AddNextActivitiesAsync(activityInput);

            nextActivities.ForEach(async nextActivity =>
            {
                //切换当前活动节点
                activityInput.CurrentActivity = nextActivity;
                var nextSrv = GetService(nextActivity.Type);

           
                var res = await nextSrv.WhatsNext( activityInput, previousActivityId);
                if (res.IsFindNext)
                {
                     
                    await GoNext(nextSrv, activityInput);
                }
                if(res.IsAddTodo)
                {
                   
                    await nextSrv?.AddNextWorkItems(activityInput, previousActivityId);
                }

            });
        }
        /// <summary>
        /// 工作项提交
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        [Transaction]
        public async Task Submit(InstanceDataInput input)
        {
            ActivityType type = ActivityType.Start;
            if (input.Type == QueryType.WorkItem)
            {
                var wi = await _workItemRepository.GetAsync(input.WorkItemId);
                type = wi.Type;
            }

            else if (input.Type == QueryType.Template)
            {
                type = ActivityType.Start;
            }
            else
            {
                throw ResultOutput.Exception("非法请求！");
            }


            var srv = GetService(type);

            var activityOutput = await srv.Submit(input);

            if(activityOutput!=null)
                await GoNext(srv, activityOutput);

 
        }
 

            

    }
}