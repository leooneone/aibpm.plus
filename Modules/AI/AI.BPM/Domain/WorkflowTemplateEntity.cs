
using ZhonTai.Admin.Core.Entities;

using FreeSql.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using AI.BPM.Domain.WorkflowTemplate;

using AI.BPM.Domain.Activity;
using AI.BPM.Services.WorkflowTemplate.Input;
using AI.Core.Model.BPM;

namespace AI.BPM.Domain.WorkflowTemplate
{

    public class Line {

        public string Id { get; set; }  
     public string FromId { get; set; }
        public string ToId { get; set; }
    }
    public class WorkflowTemplate : WorkflowTemplateEntity { 
    
    }

    public enum TemplateState{
        /// <summary>
        /// 草稿 
        /// draft
        /// </summary>
        Draft,
        /// <summary>
        /// 已发布
        /// published
        /// </summary>
        Published,
        /// <summary>
        /// 挂起，无法根据此模板创建流程
        /// User can't create workflow in this state
        /// </summary>
        Suspend,
        /// <summary>
        /// 过期了，不再使用，只用于历史数据关联展示
        /// Expired, only for displaying related history workflow.
        /// </summary>
        Expired
   }
    /// <summary>
    /// 工作流模板
    /// </summary>
	[Table(Name = "ai_template")]
    [Index("idx_{tablename}_01", nameof(Code) + "," +nameof(Version) /*+ "," + nameof(GroupId)*/, true)]
    public class WorkflowTemplateEntity : EntityBase 
    {

        /// <summary>
        /// 流程编码
        /// </summary>
        public string Code { get; set; }
       // public BaseSetting BasicSetting { get; set; }

     //   public AdvancedSetting AdvancedSetting { get; set; }
      //  public FormEntity FormData { get; set; }

      //  public ActivityModel ProcessData { get; set; }
        /// <summary>
        /// 流程名称
        /// workflow name
        /// </summary>
        [Column(StringLength =256)]
        public string Name { get; set; }
        /// <summary>
        /// 流程标签 
        /// Icon 
        /// </summary>

       // [Column(StringLength = 128)]
        public string Icon { get; set; }

        public int GroupId { get; set; }
        /// <summary>
        /// 备注
        /// </summary>

        [Column(DbType ="text")]
        public string Remark { get; set; }


        //public long StartActivityId { get; set; }
        /// <summary>
        /// 启动节点
        /// </summary>
       // public  ActivityModel  StartActivity  { get; set; }

     //   [Navigate(ManyToMany = typeof(ActivityModel))]
        /*public Dictionary<string,ActivityModel> Activities { get {
                if (!string.IsNullOrEmpty(ActivitiesContext))


                    return Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, ActivityModel>>(ActivitiesContext);
                   // return Newtonsoft.Json.JsonConvert.DeserializeObject<List<ActivityModel>>(ActivitiesContext).ToDictionary(
                   // a=>a.Code, b=>b);
                else return null;
            } }*/

         

        public FlowSetting fs { get {
                return Newtonsoft.Json.JsonConvert.DeserializeObject<FlowSetting>(this.FlowSetting);
            } }
        /* [Column(DbType = "text")]
         public string ActivitiesContext { get; set; }

         [Column(DbType = "text")]
         public string ChartContext { get; set; }*/

        // public string StartActitivyId { get; set; }

        /*     [Column(DbType = "text")]
             public string LinesContext { get; set; }*/
        [Column(DbType = "text")]
        public string AdvancedContext { get; set; }

        public AdvancedSettingModel advanced
        {
            get
            {
                return Newtonsoft.Json.JsonConvert.DeserializeObject<AdvancedSettingModel>(this.AdvancedContext);
            }
        }
        [Column(DbType = "text")]
        public string BasicContext { get; set; }
      /*  public Dictionary<string,List<string>> Lines {
            get {
                if (!string.IsNullOrEmpty(LinesContext))
                    return Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, List<string>>>(LinesContext);
                   // return Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, List<string>>>(LinesContext);
                else
                    return null;
            }}*/
        //public List<ActivityModel> Activitys { get; set; }
        /// <summary>
        /// 发布时间
        /// </summary>
        public DateTime PublishTime { get; set; }

        [Column(DbType = "text")]
        public string FormSetting { get; set; }
        [Column(DbType = "text")]
        public string FlowSetting { get; set; }


        // [Column(DbType = "text")]

        //   public string Config { get; set; }

        public TemplateState State { get; set; }

        public int Version { get; set; } = 0; 
            
    }
}