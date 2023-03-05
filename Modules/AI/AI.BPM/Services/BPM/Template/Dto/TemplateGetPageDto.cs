using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AI.BPM.Domain.Activity;
using AI.BPM.Domain.WorkflowTemplate;
namespace AI.BPM.Services.BPM.Template.Dto
{
    public class TemplateGetPageDto
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
         

        public List<TemplateState> States { get; set; }=new List<TemplateState>();
    }
}
