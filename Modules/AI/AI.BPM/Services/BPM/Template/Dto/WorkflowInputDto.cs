using AI.BPM.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Services.Template.Dto
{
    public  class WorkflowInputDto
    {
        public QueryType Type { get; set; }
        public long TemplateId { get; set; }

        public long WorkItemId { get; set; }
        public long InstanceId { get; set; }

        
    }
}
