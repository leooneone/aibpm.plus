using AI.Core.Model.BPM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AI.BPM.Core.Enums;

namespace AI.BPM.Services.BPM.WorkflowItem.Dto
{
    public class WorkItemGetPageDto
    {
        /// <summary>
        /// 其他人那里没有经过我的
        /// </summary>
        public bool IsMyself { get; set; } = true;

        public string  Name { get; set; } 
        public ActivityState? State { get; set; }
    }
}
