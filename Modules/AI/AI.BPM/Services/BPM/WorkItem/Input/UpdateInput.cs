
namespace AI.BPM.Services.WorkItem.Input
{
    /// <summary>
    /// 修改
    /// </summary>
    public class WorkItemUpdateInput: WorkItemAddInput
    {
        /// <summary>
        /// 编号
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// 版本
        /// </summary>
        public long Version { get; set; }
    }
}