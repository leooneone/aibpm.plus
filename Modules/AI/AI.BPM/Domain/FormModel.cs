using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.Core.Model.BPM
{ 
    
    public  class FormModel
    {
        /// <summary>
        /// 是否禁用
        /// </summary>
        public string Disabled { get; set; }        

        /// <summary>
        /// 表单域/内容
        /// </summary>
        public List<Newtonsoft.Json.Linq.JObject> FormItems { get; set; }


        /// <summary>
        /// 表单按钮
        /// </summary>
        public bool FormBtns { get; set; }

        /// <summary>
        /// 模板类型 比如 element ui form ="elForm"
        /// </summary>
        public string formRef { get; set; }

        /// <summary>
        /// 栅格间隔
        /// </summary>
        public int Gutter { get; set; }

        /// <summary>
        /// 标签对齐
        /// </summary>
        public string LabelPosition { get; set; }

        /// <summary>
        /// 标签宽度
        /// </summary>
        public int LabelWidth { get; set; } 

        /// <summary>
        /// 表单尺寸
        /// </summary>
        public string Size { get; set; }

        /// <summary>
        /// 每行栅格数量
        /// </summary>
        public int Span { get; set; }
    }
}
