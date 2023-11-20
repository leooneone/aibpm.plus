
using FreeSql.DataAnnotations;
using ZhonTai.Admin.Core.Entities;
using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Domain.User;
using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Core.Enums;
using Newtonsoft.Json;
using AiliCould.Core.BPM.Helper;

namespace AI.Core.Model.BPM
{

    /// <summary>
    /// 流程分组 
    /// </summary>
    [Table(Name = "ai_bpm_setting")]
    //[Index("idx_{tablename}_01", nameof(Name) + "," + nameof(TenantId), true)]
    public class BPMSettingEntity:Entity
    { 
        //public long Id { get; set; }
        public string  AdminName { get; set; }
        public long  AdminId { get; set;}
         
         
        public UserEntity  Admin { get; set; }
        [JsonMap]
        public ReferenceNoSetting ReferenceNoSetting { get; set; }=new ReferenceNoSetting();


    }

    
}