using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Specialized;
using AI.Core.Model.BPM;
using AI.BPM.Core.Enums;
using AI.BPM.Domain.Activity;

namespace AI.BPM.Services.Instance.Input
{

     
    public class InstanceGetPageDto {
        /// <summary>
        /// 是否经办
        /// </summary>
        public bool IsHandled { get; set; }
        /// <summary>
        /// 实例状态
        /// </summary>
        public InstanceState? State { get; set; }
    }
    
}
