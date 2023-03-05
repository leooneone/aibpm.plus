using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Services.WorkflowItem.Input
{
    public class BaseInput
    {
        public long InstanceId { get; set; }
        public long TemplateId { get; set; }
        public int Version { get; set; }
        //public long ActiviyId { get; set; }
        public int WorkItemId { get; set; }
        /// <summary>
        /// 表单数据
        /// </summary>
        public string FormData { get; set; }

    }
}
