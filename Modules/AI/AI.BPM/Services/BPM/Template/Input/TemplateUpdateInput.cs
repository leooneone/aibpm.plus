
namespace AI.BPM.Services.WorkflowTemplate.Input
{
    /// <summary>
    /// 修改
    /// </summary>
    public class WorkflowTemplateUpdateInput: WorkflowTemplateAddInput
    {
        /// <summary>
        ///  
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// 版本
        /// </summary>
        public long Version { get; set; }
    }
}