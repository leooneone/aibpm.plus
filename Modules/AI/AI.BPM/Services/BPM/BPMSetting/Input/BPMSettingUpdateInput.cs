using AiliCould.Core.BPM.Helper;
using FreeSql.DataAnnotations;
using System.ComponentModel.DataAnnotations;
using ZhonTai.Admin.Core.Validators;

namespace AI.BPM.Services.BPMSetting.Input;

/// <summary>
/// 修改
/// </summary>
public class BPMSettingUpdateInput
{

    public long Id { get; set; } = 0;

    public long AdminId { get; set; } 
    
    public ReferenceNoSetting ReferenceNoSetting { get; set; }   
}