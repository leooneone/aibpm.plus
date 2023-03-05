using AI.BPM.Services.Instance.Input;
using System;
namespace AI.BPM.Services.Instance.Dto
{
    public class InstanceGetOutput : InstanceUpdateInput
    {
        /// <summary>
        /// 主属部门
        /// </summary>
        public string OUName { get; set; }

        /// <summary>
        /// 附属部门
        /// </summary>
        public string[] OUNames { get; set; }

        /// <summary>
        /// 组织角色
        /// </summary>
        public string RoleName { get; set; }


        public string ReferenceNo { get; set; }

        public DateTime CreatedTime { get; set; }
        public string Name { get; set; }
        public int GroupId { get; set; }
        public string InitiatorName { get; set; }
    }
}