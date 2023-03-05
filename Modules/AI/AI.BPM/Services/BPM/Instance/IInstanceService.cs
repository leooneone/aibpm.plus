

using AI.Core.Model.BPM;
using AI.BPM.Services.Instance.Input;
using AI.BPM.Services.Instance.Output;
using System.Threading.Tasks;

using ZhonTai.Admin.Core.Dto;
using AI.BPM.Services.Instance.Dto;

namespace AI.BPM.Services.Instance
{
    /// <summary>
    /// ÊµÀý·þÎñ
    /// </summary>
    public interface IInstanceService
    {
        Task< InstanceGetOutput > GetAsync(long id);
        //Task<string> GetFormDataAsync(long id);
        Task<dynamic> StartAsync(long templateId); 
         
        Task<PageOutput<InstanceListOutput>> PageAsync(PageInput<InstanceGetPageDto> input);
         
        Task AddAsync(InstanceAddInput input);

        Task UpdateAsync(InstanceUpdateInput input);

        Task DeleteAsync(long id);

        Task SoftDeleteAsync(long id);

        Task BatchSoftDeleteAsync(long[] ids);
    }
}