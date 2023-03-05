using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Core.Enums
{
    /// <summary>
	/// ActivityType 常用活動類型
	/// </summary>
	public enum ActivityType
    {
        /// <summary>
        /// 传阅节点
        /// </summary>
        Copy,
        /// <summary>
        /// 条件节点
        /// </summary>
        Condition,
        /// <summary>
        /// 开始节点
        /// </summary>
        Start,

        /// <summary>
        /// 流程结束
        /// </summary>
        End,


        /// <summary>
        /// 手工節點，主要用於錄入數據
        /// </summary>
        Deal,


        /// <summary>
        /// 審批節點
        /// </summary>
        Approve,
        /// <summary>
        /// 并行网关
        /// </summary>
        ParallelGW,
        /// <summary>
        /// 排除网关
        /// </summary>
        ExclusiveGW,
        /// <summary>
        /// 包容网关
        /// </summary>
        //        InclusiveGW,
        /*
                /// <summary>
                /// 傳閲
                /// </summary>
                Circulate,
                /// <summary>
                /// 咨詢
                /// </summary>
                Consult,
                /// <summary>
                /// 協辦
                /// </summary>
                Assist,*/


    }
}
