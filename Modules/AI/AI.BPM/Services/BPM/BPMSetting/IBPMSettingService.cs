

using AI.Core.Model.BPM;

using AI.BPM.Services.BPMSetting.Input;
using System.Threading.Tasks;

using ZhonTai.Admin.Core.Dto;
using AI.BPM.Services.Instance.Dto;

namespace AI.BPM.Services.BPMSetting
{
    /// <summary>
    /// ÊµÀý·þÎñ
    /// </summary>
    public interface IBPMSettingService
    {
        Task<BPMSettingEntity> GetAsync();
       

        Task UpdateAsync(BPMSettingUpdateInput input);
 
    }
}