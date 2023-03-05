using AI.Core.Model.BPM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AI.BPM.Core.Enums;

namespace AI.BPM.Services.BPM.WorkflowItem.Dto
{
    public class WorkItemGetPageOutput
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// 参考号
        /// </summary>
        public string ReferenceNo { get; set; }


        public string OUName { get; set; }

        /// <summary>
        /// 当前状态
        /// </summary>
        public ActivityState State { get; set; }
        /// <summary>
        /// 发起人
        /// </summary>
        public string Initiator { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public string Role { get; set; }

        /// <summary>
        /// 接收时间
        /// </summary>
        public DateTime StartTime { get; set; }
        /// <summary>
        /// 节点名称
        /// </summary>
        public string ActivityName { get; set; }

        /// <summary>
        /// 流程名称
        /// </summary>
        public string InstanceName { get; set; }
        public string InstanceId { get; set; }
        public string WorkflowTemplateId { get; set; }
        /// <summary>
        /// 参与人，本该处理该工作项的人
        /// </summary>
        public string Participant { get; set; }
        /// <summary>
        /// 实际执行人（管理/委托代办人员）
        /// </summary>

        public string Executor { get; set; }
    }
}
