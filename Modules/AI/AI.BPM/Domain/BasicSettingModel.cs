using AI.BPM.Domain.Activity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.Core.Model.BPM
{
    public class BaseSetting
    {
        /// <summary>
        /// 工作流名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 图标
        /// </summary>
        public string Icon { get; set; }
        /// <summary>
        /// 流程分组
        /// </summary>
        public int GroupId { get; set; }
        /// <summary>
        /// 流程备注
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// 谁可以发起该流程 ,组织或者用户
        /// </summary>
        public Dictionary<string,List<Participant>> initiators { get; set; }
        public int Range { get; set; }


    }
    public  class OU {

        public long Id { get; set; }
        public string Name { get; set; }
        public int Type { get; set; } 
    }
}
