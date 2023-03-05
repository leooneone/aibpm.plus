

using AI.Core.Model.BPM;
using System.Threading.Tasks;
using System.Collections.Generic;
using ZhonTai.Admin.Core.Dto;
using AI.BPM.Services.WorkItem.Output;

using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Domain.Activity;
namespace AI.BPM.Services.Activity
{
    /// <summary>
    /// 活动节点服务
    /// </summary>
    public interface IActivityService
    {
        ActivityModel GetStartActivity(WorkflowTemplateEntity tpl);

        /// <summary>
        /// 查找前一個活動節點 ,此版本流程图允许同时多个入向，故此函数作废
        /// </summary>
        /// <param name="tpl"></param>
        /// <param name="currentActivity"></param>
        /// <returns></returns>
       // ActivityModel FindPreviousActivity(WorkflowTemplateEntity tpl, ActivityModel currentActivity);

        Dictionary<string, object> UpdateForm(string currentForm, List<FieldPermission> permissions, Dictionary<string, object> inputFields);
        /// <summary>
        /// 獲取權限設置後的formdata
        /// </summary>
        /// <param name="activity"></param>
        /// <param name="formData"></param>
        /// <returns></returns>
        string GetPermissionFormData(List<FieldPermission> ps, string formData);
        /// <summary>
        /// 获取活动
        /// </summary>
        /// <param name="tpl"></param>
        /// <param name="activityId"></param>
        /// <returns></returns>
        ActivityModel GetActivity(WorkflowTemplateEntity tpl, string activityId);
        /// <summary>
        /// 查找后续Activity
        /// </summary>
        /// <param name="tpl"></param>
        /// <param name="currentActivityId"></param>
        /// <param name="nextActivities"></param>
        void FindNextActivity(WorkflowTemplateEntity tpl, string currentActivityId, List<ActivityModel> nextActivities, Dictionary<string, object> dicForm );
   

        
    }
}