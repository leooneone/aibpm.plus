
using AI.Core.Model.BPM;
using AI.BPM.Services.WorkflowTemplate.Input;
using AI.BPM.Services.WorkflowTemplate.Output;
using System.Threading.Tasks;
using ZhonTai.Admin.Core.Dto;
using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Services.BPM.Template.Dto;

namespace AI.BPM.Services.WorkflowTemplate
{
    /// <summary>
    /// 员工服务
    /// </summary>
    public interface IWorkflowTemplateService
    {
        /// <summary>
        /// 列出所有模板
        /// </summary>
        /// <returns></returns>
        Task<List<WorkflowTemplateListOutput>> ListPublishedAsync();
        Task<TemplateGetOutput> GetAsync(long id);
        Task<string> GetFormDataAsync(long id);
        
        Task<PageOutput<WorkflowTemplateListOutput>> GetPageAsync(PageInput<TemplateGetPageDto> input);

        Task<IList<string>> GetBizListAsync(long id);
        Task SaveAsync(WorkflowTemplateUpdateInput input);

     //   Task UpdateAsync(WorkflowTemplateUpdateInput input);

       // Task DeleteAsync(long id);

       // Task SoftDeleteAsync(long id);

        //Task BatchSoftDeleteAsync(long[] ids);
    }
}