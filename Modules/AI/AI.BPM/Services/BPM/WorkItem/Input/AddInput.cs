using ZhonTai.Admin.Services;
using System;
using System.ComponentModel.DataAnnotations;
using AI.Core.Model.BPM;
namespace AI.BPM.Services.WorkItem.Input
{
    /// <summary>
    /// 添加
    /// </summary>
    public class WorkItemAddInput
    {


        public BaseSetting BasicSetting { get; set; }

        public AdvancedSettingModel AdvancedSetting { get; set; }

        public string FormData { get; set; }
          public string ProcessData { get; set; }

        // public ActivityModel ProcessData { get; set; }
    }
    //  public FormEntity FormData { get; set; }

    // public ActivityModel ProcessData { get; set; } 
}