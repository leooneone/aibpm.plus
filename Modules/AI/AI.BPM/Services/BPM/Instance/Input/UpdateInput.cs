
namespace AI.BPM.Services.Instance.Input
{
    /// <summary>
    /// 修改
    /// </summary>
    public class InstanceUpdateInput: InstanceAddInput
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