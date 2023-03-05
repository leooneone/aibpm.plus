

using AI.Core.Model.BPM;
using AI.BPM.Services.Instance.Input;
using AI.BPM.Services.Instance.Output;
using System.Threading.Tasks;
using AI.BPM.Core.Enums;
using AI.BPM.Services.Template.Dto;
namespace AI.BPM.Services.Workflow
{
    /// <summary>
    /// 工作流服务
    /// </summary>
    public interface IWorkflowService
    {
        Task Submit(InstanceDataInput input);
        //Task<string> GetFormDataAsync(long id);
        Task<dynamic> OpenAsync(WorkflowInputDto dto);
       // Task Submit(InstanceDataInput input);

        Task GetDetailAsync(long instanceId);

        Task<dynamic> Statstics();


    }
}