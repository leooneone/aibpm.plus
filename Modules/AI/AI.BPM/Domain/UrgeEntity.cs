
using ZhonTai.Admin.Core.Entities;

using FreeSql.DataAnnotations;
using System;
using System.Collections.Generic;

using ZhonTai.Admin.Core.Entities;
namespace AI.Core.Model.BPM
{ 
    /// <summary>
    /// 催办 
    /// </summary>
	[Table(Name = "ai_urge")]
    [Index("idx_{tablename}_01",    nameof(TenantId), true)]
    public class UrgeEntity : EntityTenant  
    {
        /// <summary>
        /// 实例Id
        /// </summary>
        public long InstanceId { get; set; }
        

        /// <summary>
        /// 活动Id
        /// </summary>
        public long ActivityId { get; set; }

         
        /// <summary>
        /// 消息
        /// workf flow name
        /// </summary>
        [Column(StringLength = 256)]
        public string Message { get; set; }
          
         
            
    }
}