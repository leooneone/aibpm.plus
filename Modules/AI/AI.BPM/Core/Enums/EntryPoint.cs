using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Core.Enums
{
    /// <summary>
    /// 访问入口
    /// </summary>
    public enum EntryPoint
    {/// <summary>
     /// 後臺服務自動處理
     /// </summary>
        System,
        /// <summary>
        ///  網頁，常用方式
        /// </summary>
        Web,
        /// <summary>
        /// 移動端，審批常用方式
        /// </summary>
        Mobile,
        /// <summary>
        /// 郵件審批，移動審批后用的較少，以前實現過，有需要可以加入
        /// </summary>
        Email,
        /// <summary>
        /// 短信審批，占坑，移動審批后短信審批用的非常少
        /// </summary>
        Sms,
        /// <summary>
        /// 微信
        /// </summary>
        Wechat,
        /// <summary>
        /// 企业微信
        /// </summary>
        WeCom,
        /// <summary>
        /// 钉钉
        /// </summary>
        Dingding,


    }
}
