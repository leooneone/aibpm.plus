using System;
using AI.Core.Model.BPM;

using AI.BPM.Core.Enums;
namespace AI.BPM.Services.Instance.Output
{
    public class InstanceListOutput
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        public long Id { get; set; }
        public string Name   { get; set; }

        /// <summary>
        /// 参考号
        /// </summary>
        public string ReferenceNo { get; set; }

        public long GroupId { get; set; }
        public string DepartmentName { get; set; }

        /// <summary>
        /// 当前状态
        /// </summary>
        public InstanceState State { get; set; }
        /// <summary>
        /// 发起人
        /// </summary>
        public string Initiator { get; set; }

        /// <summary>
        /// 角色
        /// </summary>
        public string Role { get; set; }

        /// <summary>
        /// 接收时间
        /// </summary>
        public DateTime CreatedTime { get; set; } 
         
        
    }
}