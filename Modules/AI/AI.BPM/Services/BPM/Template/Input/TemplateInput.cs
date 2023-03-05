
using AI.Core.Model.BPM;
using AI.BPM.Domain.Activity;
namespace AI.BPM.Services.WorkflowTemplate.Input
{
    /// <summary>
    /// 添加
    /// </summary>
    public class WorkflowTemplateInput
    {
        public BaseSetting BasicSetting { get; set; }

        public AdvancedSettingModel AdvancedSetting { get; set; }
        public FormModel FormData { get; set; }    

        public ActivityModel ProcessData { get; set; } 
        /// <summary>
        /// 用户Id
        /// </summary>
        public long? UserId { get; set; }

        /// <summary>
        ///  
        /// </summary>
        public string Name { get; set; }
         
    }
}