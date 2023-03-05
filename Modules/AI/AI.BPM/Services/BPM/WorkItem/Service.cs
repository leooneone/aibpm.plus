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
        private  IInstanceRepository _instanceRepository => LazyGetRequiredService<IInstanceRepository>();
        private  IInstanceService _InstanceService => LazyGetRequiredService<IInstanceService>();

        private  IActivityService _activityService => LazyGetRequiredService<IActivityService>();
        private IOrganizationService _orgService => LazyGetRequiredService<IOrganizationService>();

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


            /*InstanceEntity instance = null;
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
                        if (currentActivity.Type == ActivityType.Approve)
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
                    workItemIds.Add(input.WorkItemId);

                }
            }
            else if (input.Type == QueryType.Template)
            {
                tpl = await _workflowTemplateRepository.GetAsync(input.TemplateId);

                if (input.InstanceId <= 0)
                {//如果还没有创建实例，先创建实例

                    instance = new InstanceEntity();
                    instance.FormModel = Newtonsoft.Json.JsonConvert.SerializeObject(input.Form);

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
                    workItemIds = await AddWorkItem(currentActivity, instance, tpl, "", input.OptionalParticipants);
                    //完成当前节点工作项目

                }
                workItem = await _workItemRepository.GetAsync(workItemIds[0]);
            }
            else
            {
                throw ResultOutput.Exception("非法请求！");
            }


            if (string.IsNullOrEmpty(instance.ReferenceNo) && !input.IsSaveOnly)
                instance.ReferenceNo = AiliCould.Core.BPM.Helper.ReferenceNoHelper.GetNo(new AiliCould.Core.BPM.Helper.ReferenceNoSetting { DateFormat = "yyyyMMdd", Length = 10, Type = AiliCould.Core.BPM.Helper.ReferenceNoType.Global, Format = "" }, "");

            ///根据表单设置的权限更新表单
            var formModel = UpdateForm(instance.FormModel, currentActivity.Permission, input.Form);

            instance.FormModel = JsonConvert.SerializeObject(formModel);
            ///更新表单信息
            await _instanceRepository.UpdateAsync(instance);
            


            if (!input.IsSaveOnly)
            {
                bool IsContinue = true;
                if (currentActivity.Type == ActivityType.Approve)
                {
                    IsContinue = await ProcessSignWorkItem(currentActivity, tpl, instance, workItem, input.ApprovalResult, input.OptionalParticipants);
                }
               


                //沒有後續工作項則進入下一個節點
                if (IsContinue)
                {
                    await AddNextAsync(tpl, workItem.ActivityId, formModel, instance, input.OptionalParticipants);
                    
                }

                if (workItemIds.Count == 1)
                    await FinishWorkItem(workItemIds[0], input.Comment, input.ApprovalResult);
            }*/

            //完成當前活動節點 激活後續活動 
        }

        async Task AddNextAsync(WorkflowTemplateEntity tpl, string activityId, Dictionary<string, object> formModel, InstanceEntity instance, Dictionary<string, List<Participant>> optionalParticipants)
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
                            await AddNextAsync(tpl, nextActivity.Id, formModel, instance, optionalParticipants);


                    }
                    else

                        await AddWorkItem(nextActivity, instance, tpl, activityId, optionalParticipants);
                }
                //完成当前节点工作项目
            }
            else
            {
                ///没有找到后续节点 流程异常
                throw new Exception("没有找到后续节点 流程异常");
            }
        }

        /// <summary>
        /// 根据权限跟新表单数据
        /// </summary>
        /// <param name="currentForm"></param>
        /// <param name="permissions"></param>
        /// <param name="inputFields"></param>
        /// <returns></returns>
        Dictionary<string, object> UpdateForm(string currentForm, List<FieldPermission> permissions, Dictionary<string, object> inputFields)
        {
            var res = new Dictionary<string, object>();
            if (string.IsNullOrEmpty(currentForm))
                return res;
            var currentFields = JsonConvert.DeserializeObject<Dictionary<string, object>>(currentForm);
            for (var k = 0; k < permissions.Count; k++)
            {
                var per = permissions[k];
                if (per.FormOperate == 2)//可编辑的情况下才允许更新数据
                    if (inputFields.ContainsKey(per.FieldId))
                    {
                        if (currentFields.ContainsKey(per.FieldId))
                        {
                            currentFields[per.FieldId] = inputFields[per.FieldId];
                        }
                        else
                            currentFields.Add(per.FieldId, inputFields[per.FieldId]);
                    }

            }

            return currentFields;

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
        async Task<bool> ProcessSignWorkItem(ActivityModel currentActivity, WorkflowTemplateEntity tpl, InstanceEntity instance, WorkItemEntity workItem, ApprovalResult approvalResult, System.Collections.Generic.Dictionary<string, List<Participant>> optionalParticipants)
        {
            ///是否查找后续节点   
            bool IsFindNext = false;

            if (approvalResult == ApprovalResult.False)
            {
                //查找上一个节点
                var activity = _activityService.GetStartActivity(tpl);
                var items = await _workItemRepository.Select.Where(w => w.InstanceId == instance.Id &&
                //w.ActivityId == workItem.ActivityId && w.Id != workItem.Id &&
                (w.State == ActivityState.Waiting || w.State == ActivityState.ToDo)).ToListAsync();
                //await _workItemRepository.Select.Where(w => w.InstanceId == instance.Id && w.ActivityId == workItem.ActivityId && w.Id != workItem.Id && (w.State == ActivityState.Waiting || w.State == ActivityState.ToDo)).ToListAsync();
                //关闭所有未完成工作项
                items.ForEach(async item =>
                {
                    await CancelWorkItem(item.Id, "其他审批人已拒绝，工作项取消");
                });
                //自动驳回到开始节点
                AddWorkItem(activity, instance, tpl, workItem.ActivityId, optionalParticipants);

            }
            else
            {
                if (currentActivity.Approve.SignType == "counterAnd")
                {//判斷是否所有的工作項已經完成  index /total
                    var cnt = _workItemRepository.Select.Where(w => w.InstanceId == workItem.InstanceId && w.GroupId == workItem.GroupId && w.State == ActivityState.Finished
                    ).Count();
                    //當前工作項尚未完成，所以需要+1
                    if (workItem.Total == (cnt + 1))
                        IsFindNext = true;
                }
                else if (currentActivity.Approve.SignType == "counterOr")
                {//任意一個完成 


                    var items = await _workItemRepository.Select.Where(w => w.InstanceId == instance.Id && w.GroupId == workItem.GroupId && w.Id != workItem.Id && (w.State == ActivityState.Waiting || w.State == ActivityState.ToDo)).ToListAsync();
                    //关闭所有未完成工作项
                    items.ForEach(async item =>
                    {
                        await CancelWorkItem(item.Id, "其他审批人已处理，工作项取消");
                    });
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
                        //激活後續工作
                        nextWorkItem.State = ActivityState.ToDo;
                        await _workItemRepository.UpdateAsync(nextWorkItem);
                    }

                }

            }
            return IsFindNext;
        }

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
        async Task<bool> ProcessParallelWorkItem(ActivityModel parallelActivity, WorkflowTemplateEntity tpl, string preActvitiyId, InstanceEntity instance)
        {
            ///是否查找后续节点   
            bool IsFindNext = false;
            var totalBranches = tpl.fs.Lines.Where(line => line.ToId == parallelActivity.Id).Select(a => a.FromId).Count();
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
                await AddWorkItem(parallelActivity, instance, tpl, preActvitiyId, null);
            }
            if (finshedBranches == (totalBranches - 1))
            {
                IsFindNext = true;


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
                return await _workItemRepository.Select.Where(w => w.index == (index + 1) &&
               w.GroupId == ent.GroupId
                //ent.StartTime == w.StartTime && ent.ActivityId == w.ActivityId 
                && w.Id != ent.Id && w.State == ActivityState.Waiting).ToOneAsync();

            }
            else
                return null;

        }


        /// <summary>
        /// 获取配置的参与人
        /// </summary>
        /// <param name="humans"></param> 
        /// <returns></returns>
        async Task<List<EmployeeSelectDto>> GetParticipants(Dictionary<string, List<Participant>> participants)
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
        /// <summary>
        /// 查找节点参与人
        /// </summary>
        /// <param name="instance"></param>
        /// <param name="activity"></param>
        /// <returns></returns>
        async Task<List<long>> GetParticipants(InstanceEntity instance, ActivityModel activity, Dictionary<string, List<Participant>> optionalParticipants)
        {

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
                            var dicFields = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, object>>(instance.FormModel);
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


                            var temp = await GetParticipants(optionalParticipants);
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

        async Task<List<WorkItemEntity>> AddWorkItems(InstanceEntity instance, WorkflowTemplateEntity tpl, ActivityModel activity, string PreviousActivityId, Dictionary<string, List<Participant>> optionalParticipants)
        {
            if (activity == null)
                throw ResultOutput.Exception("未找到活动节点");
            var employees = await GetParticipants(instance, activity, optionalParticipants);
            var list = new List<WorkItemEntity>();
            var idx = 0;
            var now = DateTime.Now;

            /*if (activity.Type == ActivityType.Approve && tpl.advanced.AutoRepeat)
            {*/

            var groupId = AiliCould.Core.Helpers.UUIDHelper.GetUUID();
            if (activity.Type == ActivityType.ParallelGW)
            {
                var formActivityIds = tpl.fs.Lines.Where(line => line.ToId == activity.Id).Select(a => a.FromId).ToList();

                formActivityIds.ForEach(waitingActivityId =>
                {
                    var item = new WorkItemEntity();

                    ///这里时间必须一致，以便FindNextWorkItem不增加字段区分不同时间进入该节点的情况
                    item.StartTime = now;

                    item.ActivityName = activity.Title;
                    //item.OUId=input.OUId;
                    item.WorkflowTemplateId = tpl.Id;
                    item.Title = activity.Title;//+ $"({activity.Name})";
                    item.Type = activity.Type;
                    ///这里的activityId是需要等待的activiyId
                    item.PreviousActivityId = waitingActivityId;// activity.Id;
                    item.ActivityId = activity.Id;
                    item.InstanceId = instance.Id;
                    item.GroupId = groupId;
                    item.index = ++idx;
                    item.Total = formActivityIds.Count;
                    item.ParticipantId = 0;
                    if (PreviousActivityId == waitingActivityId)
                        item.State = ActivityState.Finished;
                    else
                        item.State = ActivityState.Waiting;
                    item.FinishTime = now;
                    //                    item.Comment = "并行网关，等待分支到达";
                    list.Add(item);

                });
            }
            else
            {
                var items = await GetWorkItems(instance.Id);
                //提取发起人和者审批人
                items = items.Where(item => item.Type == ActivityType.Approve && item.State == ActivityState.Finished).ToList();
                //|| item.Type == ActivityType.Start var initiator
                //}
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
                    if (activity.Type == ActivityType.End)
                    {
                        item.State = ActivityState.Finished;
                        item.FinishTime = DateTime.Now;
                    }
                    else if (activity.Type == ActivityType.Approve)
                    {   ///串签
                        if (activity?.Approve?.SignType == "string")
                        {
                            if (idx == 1)
                                item.State = ActivityState.ToDo;
                            else
                                item.State = ActivityState.Waiting;
                        }
                        else
                            item.State = ActivityState.ToDo;

                    }
                    else
                    {
                        item.State = ActivityState.ToDo;
                    }


                    if (activity.Type == ActivityType.Start && instance.Id == 0)
                    {
                        item.State = ActivityState.Draft;
                    }
                    if (activity.Type == ActivityType.Approve)
                    {
                        if (tpl.advanced.AutoRepeat && items.Any(item => item.ParticipantId == employeeId))
                        {//已经存在 根据去重规则去重 
                            item.State = ActivityState.Skiped;
                            item.Comment = "审批人自动去重，跳过审批人";
                        }
                        else if ((tpl.advanced.MyAuditAutoPass && instance.InitiatorId == employeeId))
                        {//已经存在 根据去重规则去重 
                            item.State = ActivityState.Skiped;
                            item.Comment = "审批人为发起人，跳过审批人";
                        }
                    }

                    list.Add(item);
                });

            }
            var res = await _workItemRepository.InsertAsync(list);

            return res;
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
        async Task<List<long>> AddWorkItem(ActivityModel activity, InstanceEntity instance, WorkflowTemplateEntity tpl, string previousActivityId, System.Collections.Generic.Dictionary<string, List<Participant>> optionalParticipants)
        {

            if (activity == null)
            {//找不到后续工作节点，记录异常转给管理员处理  

                throw ResultOutput.Exception("找不到后续节点！");
            }

            var res = await AddWorkItems(instance, tpl, activity, previousActivityId, optionalParticipants);


            return res.Select(a => a.Id).ToList();

        }
        /// <summary>
        /// 完成工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <param name="comment"></param>
        /// <param name="approvalResult"></param>
        /// <returns></returns>
        async Task FinishWorkItem(long itemId, string comment, ApprovalResult approvalResult, long nextWorkItemId = 0)
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

        /// <summary>
        /// 取消工作项
        /// </summary>
        /// <param name="itemId"></param>
        /// <param name="comment"></param>
        /// <returns></returns>
        public async Task CancelWorkItem(long itemId, string comment)
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

    }
}