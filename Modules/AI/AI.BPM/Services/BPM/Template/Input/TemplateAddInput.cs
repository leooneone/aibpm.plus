 
using System;
using System.ComponentModel.DataAnnotations;
using AI.Core.Model.BPM;
using System.Collections.Generic;
using AI.BPM.Domain.Activity;
using AI.BPM.Domain.WorkflowTemplate;
namespace AI.BPM.Services.WorkflowTemplate.Input
{
     
    public class NodeInfo {
        public string Id { get; set; }
        public string Title { get; set; }

      public string Type { get; set; }
    }
    public class FlowSetting
    { 
        public string startActivityId { get; set; } 
        /// <summary>
        /// 节点内容
        /// </summary>
        public string ActivitiesContext { get; set; }
        /// <summary>
        /// 线内容
        /// </summary>
        public string LinesContext { get; set; }
        /// <summary>
        /// 图形数据
        /// </summary>
        public string ChartData { get; set; }
        public Dictionary<string,ActivityModel> Nodes { get; set; }
        public List<Line> Lines { get; set; }
      /*  public Dictionary<string, List<string>> Lines { get; set; }
        public Dictionary<string, ActivityModel> Activities { get; set; }*/
    }
    /// <summary>
    /// 添加模板
    /// </summary>
    public class WorkflowTemplateAddInput
    {


        public BaseSetting BasicSetting { get; set; }

        //  public AdvancedSetting AdvancedSetting { get; set; }

        public string FlowSetting { get; set; }
        // public FlowSetting FlowSetting { get; set; }
        public string FormSetting { get; set; }

        public string AdvancedContext { get; set; }
        public string BasicContext { get; set; }
        //public string Config { get; set; }
        //public string StartActitivityId { get; set; }
        /// <summary>
        /// 是否发布
        /// </summary>
        public bool IsPublish { get; set; }
    } 
}