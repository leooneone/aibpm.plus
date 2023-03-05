 
using System;
using System.ComponentModel.DataAnnotations;
using AI.Core.Model.BPM;
using System.Collections.Generic;
using AI.BPM.Core.Enums;

namespace AI.BPM.Services.WorkItem.Input
{
    /// <summary>
    /// 添加
    /// </summary>
    public class WorkItemSubmitInfo
    {

        public QueryType Type { get; set; }
        /// <summary>
        /// 流程实例Id
        /// </summary>
        public long InstanceId { get; set; }
        /// <summary>
        /// 节点人员处理该节点时 所在的组织
        /// </summary>
        public long OUId { get; set; }
        /// <summary>
        /// 模板Id
        /// </summary>
        public long TemplateId { get; set; }
        /// <summary>
        /// 版本
        /// </summary>
    //    public int Version { get; set; }
        /// <summary>
        /// 工作项Id
        /// </summary>
        public long WorkItemId { get; set; }
        /// <summary>
        /// 活动节点Id
        /// </summary> 
        public string ActivityCode { get; set; }
        public Dictionary<string, object> Form { get; set; }

        public string Comment { get; set; }
        /// <summary>
        /// 审批结果
        /// </summary>
        public ApprovalResult ApprovalResult { get; set; } = ApprovalResult.NA;
    }
}