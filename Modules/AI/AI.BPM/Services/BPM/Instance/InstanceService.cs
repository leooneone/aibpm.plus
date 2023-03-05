using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Configs;
using ZhonTai.Admin.Core.Helpers;

using AI.Core.Model.BPM;
using ZhonTai.Admin.Core.Repositories;
using AI.Core.Repository.BPM;
using AI.BPM.Services.Instance.Input;
using AI.BPM.Services.Instance.Output;
using AI.BPM.Services.WorkItem;
using AI.BPM.Services.Activity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AI.BPM.Services.WorkflowTemplate;
using System;
using System.Collections.Concurrent;
using ZhonTai.Admin.Core.Dto;

using ZhonTai.Admin.Services;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;
using Microsoft.AspNetCore.Authorization;
using AI.BPM.Services.Instance.Dto;
using FreeSql;

namespace AI.BPM.Services.Instance
{
    /// <summary>
    /// 实例服务
    /// </summary>

    [DynamicApi(Area = BPMConstants.AreaName)]
    public class InstanceService : BaseService, IInstanceService, IDynamicApi
    {
        private static ConcurrentDictionary<long, InstanceGetOutput> _instances = new ConcurrentDictionary<long, InstanceGetOutput>();
        private readonly IInstanceRepository _instanceRepository;
        private readonly IWorkflowTemplateRepository _workflowTemplateRepository;
        public InstanceService(
            IInstanceRepository instanceRepository,
             IWorkflowTemplateRepository workflowTemplateRepository
        )
        {
            _workflowTemplateRepository = workflowTemplateRepository;
            _instanceRepository = instanceRepository;
        }


        /// <summary>
        /// 获取流程实例
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<InstanceGetOutput> GetAsync(long id)
        {
            var res = new InstanceGetOutput();
            InstanceGetOutput ins;
            if (_instances.ContainsKey(id))
            {
                ins = _instances[id];
            }
            else
            {
                ins = await _instanceRepository.Select
                .WhereDynamic(id)
                // .IncludeMany(a => a.Organizations.Select(b => new OUEntity { Id = b.Id }))
                .ToOneAsync(ins => new InstanceGetOutput
                {
                    InitiatorName = ins.Initiator.NickName ?? ins.Initiator.Name,
                    //  OrganizationName=String.Join(",", ins.Initiator.OUs.Select(a=>a.Name).ToList())

                });
            }
            //InstanceGetOutput dto = Mapper.Map<InstanceGetOutput>(ins);
            return ins;
        }
        /// <summary>
        /// 流程实例分页查询
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [Login]//登录可用 但是需要考虑数据权限
        public async Task<PageOutput<InstanceListOutput>> PageAsync(PageInput<InstanceGetPageDto> input)
        {
            var query = _instanceRepository.Select;

            if (input.Filter.IsHandled)
                query.InnerJoin<WorkItemEntity>((ins, w) => w.InstanceId == ins.Id && w.ExecutorId == User.Id);

            var list = await query.WhereIf(input.Filter?.State != null, i => i.State == input.Filter.State)
             .WhereDynamicFilter(input.DynamicFilter)

             .Distinct()
             .Aggregate(a => SqlExt.DistinctCount(a.Key.Id), out var total)
             //.Count(out var total)
             .OrderByDescending(true, a => a.Id)
             //   .IncludeMany(a => a.Organizations.Select(b => new OUEntity { Name = b.Name }))
             .Page(input.CurrentPage, input.PageSize)
             .ToListAsync(a => new InstanceListOutput
             {
                 Initiator = a.Initiator.Name,
                 //    DepartmentName= String.Join(",", a.Initiator.OUs.Select(b => b.Name).ToList())
             });

            var data = new PageOutput<InstanceListOutput>()
            {
                List = list,
                Total = total
            };

            return data;
        }


        /// <summary>
        /// 根据模板ID 创建并启动流程
        /// </summary>
        /// <param name="templateId"></param>
        /// <returns></returns>

        [Transaction]
        public async Task<dynamic> StartAsync(long templateId)
        {
            var tpl = await _workflowTemplateRepository.GetAsync(templateId);
            var d = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(tpl.fs.ChartData);

            //var activity = tpl.StartActivity;
            var activity = d;
            var data = new
            {
                form = tpl.FormSetting,
                activity = activity,
                instance = new { Name = tpl.Name }
            };

            return (data);
        }
        /// <summary>
        /// 新增实例
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [Transaction]
        public async Task AddAsync(InstanceAddInput input)
        {

            var entity = Mapper.Map<InstanceEntity>(input.BasicSetting);

            var InstanceId = (await _instanceRepository.InsertAsync(entity))?.Id;

            var fields = new List<dynamic>();
            /*   input.FormData.Fields.ForEach(f => { 
               if(f.Layout== "colFormItem")
               { ///字段
                       fields.Add(new { Name = f.VModel,f.Tag,f.Label,f.DefaultValue });
               }else { //子表或者布局组件


               }
               });*/
            if (!(InstanceId > 0))
            {
                throw ResultOutput.Exception("InstanceId 为空");
            }
            //_instanceRepository.SaveMany(entity, "Childs");



        }

        /// <summary>
        /// 更新流程实例
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [Transaction]
        public async Task UpdateAsync(InstanceUpdateInput input)
        {
            if (!(input?.Id > 0))
            {
                throw ResultOutput.Exception("id 不能为空");
            }

            var Instance = await _instanceRepository.GetAsync(input.Id);
            if (!(Instance?.Id > 0))
            {
                throw ResultOutput.Exception("用户不存在！");
            }

            Mapper.Map(input.BasicSetting, Instance);
            await _instanceRepository.UpdateAsync(Instance);

            //  await _InstanceOrganizationRepository.DeleteAsync(a => a.InstanceId == Instance.Id);



        }
        /// <summary>
        /// 删除实例
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Transaction]
        public async Task DeleteAsync(long id)
        {

            //删除实例
            await _instanceRepository.DeleteAsync(m => m.Id == id);

        }
        /// <summary>
        /// 软删除实例
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task SoftDeleteAsync(long id)
        {
            await _instanceRepository.SoftDeleteAsync(id);

        }
        /// <summary>
        /// 批量删除流程实例
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public async Task BatchSoftDeleteAsync(long[] ids)
        {
            await _instanceRepository.SoftDeleteAsync(ids);

        }
    }
}