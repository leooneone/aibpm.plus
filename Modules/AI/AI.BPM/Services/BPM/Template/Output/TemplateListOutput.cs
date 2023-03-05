using System;

namespace AI.BPM.Services.WorkflowTemplate.Output
{
    public class WorkflowTemplateListOutput
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        public long Id { get; set; }

        public string Icon { get; set; }
        public int GroupId { get; set; }
        /// <summary>
        /// 姓名
        /// </summary>
        public string Name { get; set; }
        public string Remark { get; set; }
        

        /// <summary>
        /// 账号
        /// </summary>
        public string UserName { get; set; }

          public int Version { get; set; }

        public int State { get; set; } 
        public DateTime CreatedTime { get; set; }
    }
}