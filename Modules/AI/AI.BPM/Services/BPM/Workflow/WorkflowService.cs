using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Configs;
using ZhonTai.Admin.Core.Helpers;
using AI.BPM.Services.Instance.Input;
using AI.Core.Model.BPM;
using ZhonTai.Admin.Core.Repositories;
using AI.Core.Repository.BPM;
using AI.BPM.Services.WorkItem;
using AI.BPM.Services.Activity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AI.BPM.Services.WorkflowTemplate;
using System;
using System.Collections.Concurrent;
using AI.BPM.Services.Instance;
using ZhonTai.Admin.Services;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;
using AI.BPM.Domain.Activity;
using Microsoft.AspNetCore.Mvc;
using ZhonTai.Admin.Core.Dto;
using AI.BPM.Services.Instance.Dto;
using AI.BPM.Core.Enums;
using AI.BPM.Services.Template.Dto;
using Microsoft.AspNetCore.Components;

namespace AI.BPM.Services.Workflow
{
    /// <summary>
    /// 工作流服务
    /// </summary>
    [DynamicApi(Area = BPMConstants.AreaName)]
    public class WorkflowService : BaseService, IWorkflowService, IDynamicApi
    {
        private static ConcurrentDictionary<long, InstanceGetOutput> _instances = new ConcurrentDictionary<long, InstanceGetOutput>();
        private readonly IInstanceRepository _instanceRepository;
        // private readonly IRepositoryBase<InstanceOUEntity> _InstanceOrganizationRepository;
        private readonly IWorkflowTemplateService _WorkflowTemplateService;
        private readonly IWorkflowTemplateRepository _workflowTemplateRepository;
        private readonly IWorkItemService _WorkItemService;
        private readonly IActivityService _activityService;
        private readonly IInstanceService _InstanceService;
        public WorkflowService(
            IInstanceRepository instanceRepository,
             IWorkflowTemplateRepository workflowTemplateRepository,
            IWorkflowTemplateService workflowTemplateService,
            IWorkItemService workItemService,
            IActivityService activityService,
             IInstanceService instanceService
        )
        {
            _workflowTemplateRepository = workflowTemplateRepository;
            _instanceRepository = instanceRepository;
            _WorkflowTemplateService = workflowTemplateService;
            _WorkItemService = workItemService;
            _activityService = activityService;
            _InstanceService = instanceService;
        }
        /// <summary>
        /// 强制swagger导出 displaytype
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public async Task<DisplayType> GetState(WorkflowInputDto dto)
        {
            return DisplayType.Success;
        }
        /// <summary>
        /// 根据模板ID 启动流程
        /// </summary>
        /// <param name="templateId"></param>
        /// <returns></returns>

        [HttpGet]
        [Transaction]
        public async Task<dynamic> OpenAsync(WorkflowInputDto dto)
        {



            if (dto.Type == QueryType.Template)
            {
                var tpl = await _workflowTemplateRepository.GetAsync(dto.TemplateId);
                if (dto.TemplateId == 0)
                {

                    throw ResultOutput.Exception(" 模板ID必须大于0");
                }
                List<ActivityModel> activities = new List<ActivityModel>();
                _activityService.FindNextActivity(tpl, "", activities, null);//  Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(tpl.ProcessData);



                //var activity = tpl.StartActivity;
                var activity = activities.FirstOrDefault();
                var form = tpl.FormSetting;
                if (activity.Type != ActivityType.Copy)
                    form = _activityService.GetPermissionFormData(activity.Permission, form);

                var data = new
                {
                    form = form,
                    activity = activity
                };
                return data;
            }
            else
            if (dto.Type == QueryType.WorkItem)
            {
                if (dto.WorkItemId == 0)
                {

                    throw ResultOutput.Exception(" 工作项ID必须大于0");
                }
                return await _WorkItemService.StartAsync(dto.WorkItemId);
            }
            else if (dto.Type == QueryType.Instance)
            {
                return await _WorkItemService.GetInstanceAsync(dto.InstanceId);
            }
            return new { };
        }
        /// <summary>
        /// 获取流程实例
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /* [HttpGet]
         [Transaction]
         public async Task<dynamic> GetByInstanceIdAsync(long id)
         {
             if (id == 0)
             {

                 throw ResultOutput.Exception(" ID必须大于0");
             }
             else
             {
                 return await _WorkItemService.GetInstanceAsync(id);
             }


         }*/
        /// <summary>
        /// 根据工作项获取流程信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>

        /*[HttpGet]
        [Transaction]
        public async Task<dynamic> GetByWorkItemIdAsync(long id)
        {
            if (id == 0)
            {

                throw ResultOutput.Exception(" ID必须大于0");
            }
            else
            {
                return await _WorkItemService.StartAsync(id);
            }
             
            
        }*/
        /* public async Task<dynamic> OpenAsync(long templateId) { }
         public async Task<dynamic> OpenAsync(long workItemId) { }
         public async Task<dynamic> OpenAsync(long InstanceId) { }*/

        
        /// <summary>
        /// 流程统计信息
        /// </summary>
        public async Task<dynamic> Statstics() {
           
           var res=await  _instanceRepository.Select
                .GroupBy(ins=>new {ins.State})
                .ToListAsync(a => new
                {
                    a.Key.State,
                    count = a.Count(),
                    //arg1 = a.Avg(a.Value.Clicks),
                   // arg2 = a.Sum(a.Value.Clicks > 100 ? 1 : 0)
                });

            var employeeId = User.Id;

            ///我发起的
            var list = await _instanceRepository.Select.Where(w => w.InitiatorId == User.Id).GroupBy(w => new { w.State })
             .ToListAsync(a => new
             {
                 a.Key.State,
                 Count = a.Count()
             });
            
            return res;
        }
        /// <summary>
        /// 提交表单
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        [Transaction]
        public async Task Submit(InstanceDataInput input)
        {
             await _WorkItemService.Submit(input);
            return;
              
        }
       /// <summary>
       /// 流程明细
       /// </summary>
       /// <param name="instanceId"></param>
       /// <returns></returns>
        public async Task GetDetailAsync(long instanceId)
        { 
         //    await _WorkItemService.GetInstanceAsync(instanceId, 0);
        
        } 
         
         
    }
}