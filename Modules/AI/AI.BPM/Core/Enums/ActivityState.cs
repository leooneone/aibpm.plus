using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Core.Enums
{
    /// <summary>
    /// Activity State 比較合適 
    /// </summary>

    public enum ActivityState : int
    {
        /// <summary>
        /// 等待
        /// </summary>
        [Description("等待")]
        Waiting = 1<<7 | DisplayType.Info,
        /// <summary>
        /// 運行中
        /// </summary>
        [Description("待办")]
        ToDo = 2 << 7 | DisplayType.Primary,
        /// <summary>
        /// 待阅
        /// </summary>
        [Description("待阅")]
        UnRead = 3 << 7 | DisplayType.Default,
        /// <summary>
        /// 已完成
        /// </summary>
        [Description("已完成")]
        Finished = 4 << 7 | DisplayType.Success,
        /// <summary>
        /// 已取消
        /// </summary>
        [Description("已取消")]
        Canceled = 5 << 7 | DisplayType.Danger,
        /// <summary>
        /// 草稿
        /// </summary>
        [Description("草稿")]
        Draft = 6 << 7 | DisplayType.Warning,
        /// <summary>
        /// 未知
        /// </summary>
        [Description("超时")]
        Timeout = 7 << 7 | DisplayType.Danger,
        /// <summary>
        /// 未知
        /// </summary>
        [Description("跳过")]
        Skiped = 8 << 7 | DisplayType.Warning,
    }
}
