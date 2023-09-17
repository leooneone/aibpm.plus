
using FreeSql.DataAnnotations;
using ZhonTai.Admin.Core.Entities;
using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Domain.User;
using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Core.Enums;
using Newtonsoft.Json;
namespace AI.Core.Model.BPM
{

    /// <summary>
    /// 流程分组 
    /// </summary>
    [Table(Name = "ai_instance")]
    //[Index("idx_{tablename}_01", nameof(Name) + "," + nameof(TenantId), true)]
    public class InstanceEntity : EntityTenant
    {
        public string ReferenceNo { get; set; }

        public long TemplateId { get; set; }

        public int GroupId { get; set; }

        public WorkflowTemplateEntity Template { get; set; }
        public int Priority { get; set; }

        /// <summary>
        /// 流程实列名称
        /// workf flow name
        /// </summary>
        [Column(StringLength = 256)]
        public string Name { get; set; }


        /// <summary>
        /// 发起人组织
        /// </summary>
        public long CreaterOrgnization { get; set; }


        /// <summary>
        /// 父流程
        /// </summary>
        public long ParentId { get; set; }
        /// <summary>
        /// 父流程节点
        /// </summary>
        public long ParentActivityId { get; set; }

        public long InitiatorId { get; set; }

        public UserEntity Initiator { get; set; }
        /// <summary>
        /// 发起人所在OU
        /// </summary>
        public long OUId { get; set; }
        public OrgEntity OU { get; set; }

        /// <summary>
        /// 发起人以什么角色来发起流程，（由于岗位和职位都放在角色中，需要重新考虑对应关系）
        /// </summary>
        ///   public long  RoleId  { get; set; }


        /// <summary>
        /// 流程状态
        /// </summary>
        public InstanceState State { get; set; }

        /// <summary>
        /// 完成时间
        /// </summary>
        public DateTime FinishedTime { get; set; }
        //public WorkflowGroupEntity Parent { get; set; }
        /// <summary>
        /// 流程备注
        /// </summary>

        [Column(DbType = "text")]
        public string Description { get; set; }

        [Column(DbType = "text")]
        public string FormModel { get; set; }
        
    }

    
}