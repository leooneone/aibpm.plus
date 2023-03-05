
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.Core.Model.BPM
{
    public class ApproveSetting {
        /// <summary>
        /// 审批意见提示
        /// </summary>
        public string RemarkTip { get; set; }

        /// <summary>
        /// 审批意见是否必填
        /// </summary>
        public bool RemarkRequired { get; set; }
    }
    /// <summary>
    /// 高级设置
    /// </summary>
    public class AdvancedSettingModel
    {
        /// <summary>
        /// 审批人去重
        /// </summary>
        public bool AutoRepeat { get; set; }
        /// <summary>
        /// 发起人审批时自动通过
        /// </summary>
        public bool MyAuditAutoPass { get; set; }
        /// <summary>
        /// 审批意见
        /// </summary>
       public   ApproveSetting Approve { get; set; }

    }
}
