using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Specialized;
using AI.Core.Model.BPM;
using AI.BPM.Core.Enums;
using AI.BPM.Domain.Activity;

namespace AI.BPM.Services.Instance.Input
{

    public class SubmitInput {
        /// <summary>
        /// 节点人员处理该节点时 所在的组织
        /// </summary>
        public long OUId { get; set; }
        /// <summary>
        /// 工作项Id
        /// </summary>
        public long WorkItemId { get; set; }
        /// <summary>
        /// 活动节点Id
        /// </summary> 
        public string ActivityCode { get; set; }
        public Dictionary<string, object> Form { get; set; }


        /// <summary>
        /// 模板Id
        /// </summary>
        public long TemplateId { get; set; }
        /// <summary>
        /// 类型
        /// </summary>
        public QueryType Type { get; set; }

        public Dictionary<string, List<Participant>> OptionalParticipants { get; set; } = new Dictionary<string, List<Participant>>();

    }
    public class InstanceDataInput: SubmitInput
    {
        /// <summary>
        /// 流程实例Id
        /// </summary>
        public long InstanceId { get; set; }
        /// <summary>
        /// 版本
        /// </summary>
        public int Version { get; set; }

        public string Comment { get; set; }
        /// <summary>
        /// 审批结果
        /// </summary>
        public ApprovalResult ApprovalResult { get; set; } = ApprovalResult.NA; 
        /// <summary>
        /// 是否仅保存
        /// </summary>
        public bool IsSaveOnly { get; set; }=false;
    }
}
