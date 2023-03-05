 
using System;
using System.ComponentModel.DataAnnotations;
using AI.Core.Model.BPM;
namespace AI.BPM.Services.Instance.Input
{
    /// <summary>
    /// 添加
    /// </summary>
    public class InstanceAddInput
    {


        public BaseSetting BasicSetting { get; set; }

        public AdvancedSettingModel AdvancedSetting { get; set; }

        public string FormModel { get; set; }
          public string ProcessData { get; set; }


        public long TemplateId { get; set; }


        // public ActivityModel ProcessData { get; set; }
    }
    //  public FormEntity FormData { get; set; }

    // public ActivityModel ProcessData { get; set; } 
}