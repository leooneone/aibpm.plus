using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Configs;
using ZhonTai.Admin.Core.Helpers;


using AI.Core.Model.BPM;
using ZhonTai.Admin.Core.Repositories;
using AI.Core.Repository.BPM;
using AI.BPM.Services.WorkflowTemplate.Input;
using AI.BPM.Services.WorkflowTemplate.Output;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZhonTai.Admin.Core.Dto;
using ZhonTai.Admin.Services;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;
using Microsoft.AspNetCore.Authorization;

using AI.BPM.Domain.WorkflowTemplate;
using Microsoft.AspNetCore.Mvc;
using AI.BPM.Services.BPM.Template.Dto;
using AI.Core.Model.BPM;
using System.Linq; 
using ZhonTai.Admin.Domain.Role;
using Newtonsoft.Json;
using AI.BPM.Services.Organization.X;
using AI.Core.Helpers;
using System.Text;
using System.Security.Cryptography.X509Certificates;

namespace AI.BPM.Services.WorkflowTemplate
{
    /// <summary>
    /// 模板服务
    /// </summary>
    [DynamicApi(Area = BPMConstants.AreaName)]
    public class WorkflowTemplateService : BaseService, IWorkflowTemplateService, IDynamicApi
    {
        private IWorkflowTemplateRepository _workflowTemplateRepository => LazyGetRequiredService<IWorkflowTemplateRepository>();

        private IInstanceRepository _instanceRepository => LazyGetRequiredService<IInstanceRepository>();

        private IOrganizationService _orgService => LazyGetRequiredService<IOrganizationService>();
        public WorkflowTemplateService()
        {
        }
        /// <summary>
        /// 获取表单数据
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<string> GetFormDataAsync(long id)
        {

            var dto = await _workflowTemplateRepository.Select
            .WhereDynamic(id)
            .ToOneAsync(a => a.FormSetting);

            return dto;
        }




        /// <summary>
        /// 获取流程模板
        /// </summary>
        /// <param name="id"></param>
        /// <param name="version"></param>
        /// <returns></returns>

        public async Task<TemplateGetOutput> GetAsync(long id)
        { 
            var ent = await _workflowTemplateRepository.Select
          .WhereDynamic(id)
          //.Where(a => a.Version == version)
          .ToOneAsync<TemplateGetOutput>();
            return ent;
        }
        /// <summary>
        /// 已发布模板列表
        /// </summary>
        /// <returns></returns>
        public async Task<List<WorkflowTemplateListOutput>> ListPublishedAsync()
        {
            var list = await _workflowTemplateRepository.Select
            .Where(t => t.State == TemplateState.Published)
            .OrderByDescending(true, a => a.Id)
            .ToListAsync();
            /*a => new WorkflowTemplateListOutput
            {
            }*/

            var res = new List<WorkflowTemplateEntity>();
            for(var k= 0; k < list.Count;k++)
             
            {
                var tpl= list[k];
                var setting = JsonConvert.DeserializeObject<AI.Core.Model.BPM.BaseSetting>(tpl.BasicContext);

                if (setting != null)
                {
                    if (setting.Range == 0)
                        res.Add(tpl);
                    else
                    {
                        var participants = await _orgService.GetParticipants(setting.initiators);
                        if (participants.Any(p => p.Id == User.Id))
                            res.Add(tpl);
                    }

                }
            }

            return Mapper.Map<List<WorkflowTemplateListOutput>>(res);
        }

        /// <summary>
        /// 查询模板列表
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<PageOutput<WorkflowTemplateListOutput>> GetPageAsync(PageInput<TemplateGetPageDto> input)
        {
            var list = await _workflowTemplateRepository.Select
            .WhereDynamicFilter(input.DynamicFilter)
            .WhereIf(!String.IsNullOrEmpty(input.Filter.Name), t => t.Name.Contains(input.Filter.Name))
            .WhereIf(input.Filter.States.Count > 0, t => input.Filter.States.Contains(t.State))
            .Count(out var total)
            .OrderByDescending(true, a => a.Id)
            .Page(input.CurrentPage, input.PageSize)
            .ToListAsync(a => new WorkflowTemplateListOutput
            {
                UserName = a.CreatedUserName

            });

            var data = new PageOutput<WorkflowTemplateListOutput>()
            {
                List = list,
                Total = total
            };

            return data;
        }
        /// <summary>
        /// 校验流程名称唯一性
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        async Task ValidName(string name)
        {

            var isExist = await _workflowTemplateRepository.Select.AnyAsync(tpl => tpl.Name == name);

            if (isExist)
                throw ResultOutput.Exception("流程名称已经存在，请修改后再提交。");
        }
        /// <summary>
        /// 保存模板,名称相同则增加新版本，不同则新增
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>

        [Transaction]
        public async Task SaveAsync(WorkflowTemplateUpdateInput input)
        {
            WorkflowTemplateEntity ent = Mapper.Map<WorkflowTemplateEntity>(input.BasicSetting);
            bool isUpdate = false;

            var maxVersion = await _workflowTemplateRepository.Select
                .Where(b => b.Name == input.BasicSetting.Name && b.State == TemplateState.Published)


            .Count(out var total)
            .MaxAsync(a => a.Version);
            if (input.Id > 0)
            {
                var entTmp = await _workflowTemplateRepository
                  .Select.WhereDynamic(input.Id)
                 .ToOneAsync();

                if (entTmp != null)
                {

                    if (entTmp.State == TemplateState.Draft)
                    {
                        isUpdate = true;
                    }
                    else if (!await _instanceRepository.Select.AnyAsync(t => t.TemplateId == input.Id))
                    { ///减少过多无用版本号，如果使用版没有关联任何流程 那么覆盖旧的版本，而不创建新版本
                        if (maxVersion == entTmp.Version)
                            isUpdate = true;


                    }
                    if (isUpdate)
                    {
                        ent = entTmp;

                        Mapper.Map(input.BasicSetting, ent);
                    }
                }

            }


            ent.FormSetting = input.FormSetting;
            ent.FlowSetting = input.FlowSetting;

            ent.BasicContext = input.BasicContext;
            ent.AdvancedContext = input.AdvancedContext;
            if (string.IsNullOrEmpty(ent.Code))
                ent.Code = Guid.NewGuid().ToString();
            ent.State = input.IsPublish ? TemplateState.Published : TemplateState.Draft;
            //旧版设置为挂起状态
            if (input.IsPublish)//&&!isUpdate)
                await _workflowTemplateRepository.Select.ToUpdate()
                    .Set(t => t.State, TemplateState.Suspend)
                    .Where(t => t.Name == input.BasicSetting.Name && t.State == TemplateState.Published && t.Version < ent.Version).ExecuteAffrowsAsync();

            ///编译生成DLL 方便后续使用强类型调用
            var code = new StringBuilder();

            code.AppendLine("namespace AI.BPM.Templates");
            code.AppendLine("{");
            code.AppendLine($"[Table(\"ai_{ent.Name}_{ent.Version}\")]");
            code.AppendLine($"public class {ent.Name}_{ent.Version}  : EntityTenant");
            code.AppendLine("{");

        
            var formItems = new List<FormItem>();
            for (var k = 0; k < formItems.Count; k++) { 
                var item =formItems[k];
              //  code.AppendLine($"[]");
                code.AppendLine($"public ${item.TypeCode.ToString()} ${item.Code}"+ @"{get;set;}");
            }
            

            code.AppendLine("}");
            code.AppendLine("}");
           // CompilerHelper.CompileCode(code.ToString(),$"templates/{ent.Code}.{ent.Version}.dll");
             
            if (isUpdate)
            {

                await _workflowTemplateRepository.UpdateAsync(ent);


            }
            else
            {
                ent.Id = 0;
                ent.Version = maxVersion + 1;
                var newEnt = await _workflowTemplateRepository.InsertAsync(ent);
                if (!(newEnt?.Id > 0))
                {
                    throw ResultOutput.Exception("存储失败");
                }

            }
        }
        /// <summary>
        /// 更新模板
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /* [Transaction]
         public async Task UpdateAsync(WorkflowTemplateUpdateInput input)
         {
             if (!(input?.Id > 0))
             {
                 throw ResultOutput.Exception("workflow tempalte id 为空");
             }

             var WorkflowTemplate = await _workflowTemplateRepository.GetAsync(input.Id);
             if (!(WorkflowTemplate?.Id > 0))
             {
                 throw ResultOutput.Exception("用户不存在！");
             }

             Mapper.Map(input.BasicSetting, WorkflowTemplate);
             await _workflowTemplateRepository.UpdateAsync(WorkflowTemplate);

         }
         /// <summary>
         /// 删除模板
         /// </summary>
         /// <param name="id"></param>
         /// <returns></returns>

         [Transaction]
         public async Task DeleteAsync(long id)
         {
             var isExist= await _workflowTemplateRepository.Orm.Select<InstanceEntity>().AnyAsync(ins=>ins.TemplateId== id);
             if(isExist)
              throw ResultOutput.Exception("存在关联的流程实例，无法删除。");
             //删除模板
             await _workflowTemplateRepository.DeleteAsync(m => m.Id == id);

         }
         /// <summary>
         /// 软删除模板
         /// </summary>
         /// <param name="id"></param>
         /// <returns></returns>
         public async Task SoftDeleteAsync(long id)
         {
             await _workflowTemplateRepository.SoftDeleteAsync(id);

         }
         /// <summary>
         /// 批量软删除模板
         /// </summary>
         /// <param name="ids"></param>
         /// <returns></returns>
         public async Task BatchSoftDeleteAsync(long[] ids)
         {
             await _workflowTemplateRepository.SoftDeleteAsync(ids);

         }*/
    }
}