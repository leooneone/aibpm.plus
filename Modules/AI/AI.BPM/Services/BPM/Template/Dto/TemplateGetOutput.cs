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
    public class TemplateGetOutput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
         


        /* public string ActivitiesContext { get; set; }

         public string ChartContext { get; set; }
        
        public string LinesContext { get; set; } 
         public string StartActitivyId { get; set; }*/
        public string AdvancedContext { get; set; }
        public string BasicContext { get; set; }

        //public List<ActivityModel> Activitys { get; set; }
        /// <summary>
        /// 发布时间
        /// </summary>
        public DateTime PublishTime { get; set; }

  
        public string FormSetting { get; set; }
        public string FlowSetting { get; set; }

        public string UserName { get; set; }
        // [Column(DbType = "text")]

        //   public string Config { get; set; }

        public TemplateState State { get; set; }
    }
}
