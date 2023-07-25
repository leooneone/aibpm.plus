using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 
using Newtonsoft.Json.Converters;
using Newtonsoft.Json;
using FreeSql.DataAnnotations; 
using FreeSql.Internal.Model;
using AI.BPM.Domain.WorkflowTemplate;
using AI.Core.Model.BPM;
using AI.BPM.Core.Enums;
namespace AI.BPM.Domain.Activity
{
    public class MyDynamicFilterInfo : DynamicFilterInfo { 
    
        /// <summary>
        /// 是否默认条件
        /// </summary>
        public bool IsDefault { get; set; }
    }
    /// <summary>
    /// 人力基本信息
    /// </summary>
    public interface IOU
    { 
        long Id { get; set; }
        string Name { get; set; }    
        long ParentId { get; set; }
        /// <summary>
        /// dep user pos
        /// </summary>
        string Type { get; set; }
        long NodeId { get; set; }

    }

    public class Participant : IOU
    {
              
        public long Id { get; set; }
        public string Name { get; set; }
        public long ParentId { get; set; } 
        public string Type { get; set; }
        public long NodeId { get; set; }

    }


     
    public class FieldPermission
    {
        public string FieldId { get; set; }
        public int FormOperate { get; set; }
    }
     
    public class Condition {
        /// <summary>
        /// 是否默认条件
        /// </summary>
        public bool IsDefault { get; set; } = true;
        public object ConditionValue { get; set; }
           public int FormId { get; set; }
    }

    public enum WhenNullParticipant
    {
        //直接通过
        Pass = 0,
        /// <summary>
        /// 转给流程管理员
        /// </summary>
        ToAdmin = 1
    }

    public class Approve {
        /// <summary>
        /// 组织类型，当选项为director 时有效
        /// </summary>
        public int OUType { get; set; }
        /// <summary>
        /// 上级主管审批时，组织类型对应的主管是否被作为上级主管审批
        /// 例如部门内部逐级主管审批 但是不包含部门负责人(经理可能会单独设置一个审批节点）
        /// </summary>
        public bool IsDirectorIn { get; set; } = false;



        /// <summary>
        /// 当找不到对应节点参与人的时候的处理方法
        /// </summary>
        public WhenNullParticipant WhenNullParticipant { get; set; }
        /// <summary>
        /// 節點參與人
        /// </summary>
        public Dictionary<string,List<Participant>> Participants { get; set; }
      //  public bool IsDefault { get; set; }
        public string AssigneeType { get; set; }
       /* public string Role { get; set; }
        public int Priority { get; set; }*/
        /// <summary>
        /// 空 表示串簽（一個一個審批，所有人同意通過，任意一個不同意就中斷返回拒絕），
        /// and:會签（须所有审批人同意），
        /// or:或签（一名审批人同意或拒绝即可）
        /// </summary>
        public string  SignType { get; set; }

        /// <summary>
        /// 当选择表单内联系人的时候
        /// </summary>
        public string FieldId { get; set; }
        public int Level { get; set; }
        /// <summary>
        /// 允許多人
        /// </summary>
        public bool OptionalMultiUser { get; set; }
      
    }

   /* public class FormFiledInfo { 
    }
    public class FormData { 
    
     public bool Disabled { get; set; }
        public List<FormFiledInfo> Fields { get; set; }

        public string FormRef { get; set; }
        public bool FormBtns { get; set; }
        public int Gutter { get; set; }
        public string LabelPosition { get; set; }
        public string Size { get; set; }
        public int LabelWidth { get; set; }
        public int Span { get; set; }
    }*/
    public  class ActivityModel
    {
         public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public List<ActivityModel> ConditionNodes { get; set; }

        public ActivityModel ChildNode { get; set; }  

        public Approve Approve { get; set; }

        public List<FieldPermission> Permission;
        public MyDynamicFilterInfo Condition { get; set; }
        // public List<Condition> Condition { get; set; }
    //    public DynamicFilterInfo DynamicFilter { get; set; }
        public string FiledName { get; set; }
        public string Content { get; set; }

        /// <summary>
        /// 表单模板，每个活动节点可以有不同的模板 来控制显示，每个模板的业务数据应该是template中 表单的子集
        /// </summary>
        [Column(DbType = "text")]
        public string FormData { get; set; }

        public string GetForm() {

            if (!string.IsNullOrEmpty( FormData))
                return FormData;
            else ///查找表单使用模板表单
            {
                return "";
            }
        }
      //  public List<string> PrevIds { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public ActivityType Type { get; set; }
      //  public List<FieldPermission> FieldPermissions { get; set; }
    }
}
