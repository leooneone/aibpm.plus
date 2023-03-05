using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Core.Enums
{
    /// <summary>
    /// 审批结果
    /// </summary>
    public enum ApprovalResult
    {

        False,
        True,
        /// <summary>
        /// 非审批项目，不适用
        /// </summary>
        NA = -1,
    }
}
