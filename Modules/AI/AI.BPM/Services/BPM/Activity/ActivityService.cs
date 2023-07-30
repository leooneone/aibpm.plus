
using AI.Core.Model.BPM;
using ZhonTai.Admin.Core.Repositories;
using AI.Core.Repository.BPM;
using ZhonTai.Admin.Core.Helpers;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using Newtonsoft.Json.Linq;

using ZhonTai.Admin;
using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Services;
using ZhonTai.Admin.Core.Dto;
using AI.Core.Extensions;
using FreeSql.Internal.Model;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;
using Microsoft.AspNetCore.Authorization;
using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Domain.Activity;
using Aliyun.OSS;
using System.Diagnostics;
using AI.BPM.Core.Enums;
using Newtonsoft.Json;

namespace AI.BPM.Services.Activity
{
    /// <summary>
    /// 查找类型
    /// </summary>
    public enum FindType
    {
        /// <summary>
        /// 默认
        /// </summary>
        Default,
        /// <summary>
        /// 排他
        /// </summary>
        XOR,
        /// <summary>
        /// 并行
        /// </summary>
        AND,
        /// <summary>
        /// 包容
        /// </summary>
        OR

    }
    /// <summary>
    /// 活動(節點）服务
    /// </summary>

    [DynamicApi(Area = BPMConstants.AreaName)]
    [AllowAnonymous]
    public partial class ActivityService : BaseService, IActivityService 
    {
       

        public ActivityService( )
        {
            
        }

         
        /// <summary>
        /// 查找Activity
        /// </summary>
        /// <param name="tpl"></param>
        /// <param name="activityId"></param>
        /// <returns></returns>
        public ActivityModel GetActivity(WorkflowTemplateEntity tpl, string activityId)
        {
            if (tpl.fs != null && tpl.fs.Nodes.ContainsKey(activityId))
            {
                // var activity = tpl.Activities[activityId];

                return tpl.fs?.Nodes[activityId];

            }
            return null;

        }
        /// <summary>
        /// 获取表单权限
        /// </summary>
        /// <param name="activity"></param>
        /// <param name="formData"></param>
        /// <returns></returns>
      /*  public string GetPermissionFormData(ActivityModel activity,string formData)
        {
            var FormData = AiliCloud.Helpers.JsonHelper.Deserialize<FormEntity>(formData);
            var items = FormData.FormItems;
            SetPermission(activity.Permission, items) ;
            return AiliCloud.Helpers.JsonHelper.Serialize(FormData);
        }*/


        /// <summary>
        /// 根据权限跟新表单数据
        /// </summary>
        /// <param name="currentForm"></param>
        /// <param name="permissions"></param>
        /// <param name="inputFields"></param>
        /// <returns></returns>
        public Dictionary<string, object> UpdateForm(string currentForm, List<FieldPermission> permissions, Dictionary<string, object> inputFields)
        {
            var res = new Dictionary<string, object>();
            if (string.IsNullOrEmpty(currentForm))
                return res;
            var currentFields = JsonConvert.DeserializeObject<Dictionary<string, object>>(currentForm);
            for (var k = 0; k < permissions.Count; k++)
            {
                var per = permissions[k];
                if (per.FormOperate == 2)//可编辑的情况下才允许更新数据
                    if (inputFields.ContainsKey(per.FieldId))
                    {
                        if (currentFields.ContainsKey(per.FieldId))
                        {
                            currentFields[per.FieldId] = inputFields[per.FieldId];
                        }
                        else
                            currentFields.Add(per.FieldId, inputFields[per.FieldId]);
                    }

            }

            return currentFields;

        }
        /// <summary>
        /// 获取表单权限
        /// </summary>
        /// <param name="permission"></param>
        /// <param name="formData"></param>
        /// <returns></returns>
        public string GetPermissionFormData(List<FieldPermission> permission, string formData)
        {

            var FormData = AiliCloud.Helpers.JsonHelper.Deserialize<FormModel>(formData);
            var items = FormData.FormItems;

            SetPermission(permission, items);
            return AiliCloud.Helpers.JsonHelper.Serialize(FormData);
        }



        void SetPermission(List<FieldPermission> fieldPermissions, List<JObject> formItems)
        {
            var permissions = new Dictionary<string, int>();

            for (var k = 0; k < fieldPermissions.Count; k++)
            {
                var permission = fieldPermissions[k];
                permissions[permission.FieldId] = permission.FormOperate;
            }
            var lst = formItems.Select(a => a as JToken).ToList();
            SetItemPermission(permissions, lst);
        }


        void SetItemPermission(Dictionary<string, int> permissions, IList<JToken> formItems)
        {

            ///根據權限設置表單控件
            for (var k = 0; k < formItems.Count; k++)
            {
                var field = formItems[k];

                //field.ContainsKey("formId") 
                //1只讀 2 可編輯 3 隱藏
                var formId = field.Value<string>("vModel");
                var lst = field.Value<IList<JToken>>("children");
                if (lst != null)
                {
                    SetItemPermission(permissions, lst);

                }
                if (formId == null)
                    continue;
                if (permissions.ContainsKey(formId))
                {
                    if (permissions[formId] == 1)
                    {
                        field["disabled"] = true;
                        field["show"] = true;
                    }

                    //  field.Disabled = true;
                    else if (permissions[formId] == 3)
                        field["show"] = false;
                    else if (permissions[formId] == 2)
                    {
                        field["show"] = true;
                        field["disabled"] = false;
                    }
                }
                else
                {
                    field["show"] = true;
                    field["disabled"] = true;

                }


            }
        }
        /// <summary>
        /// 获取启动活动节点
        /// </summary>
        /// <param name="tpl"></param>
        /// <returns></returns>
        public ActivityModel GetStartActivity(WorkflowTemplateEntity tpl)
        {
            var prevActivityId = tpl.fs?.startActivityId;
            if (!string.IsNullOrEmpty(prevActivityId))
            {
                return GetActivity(tpl, prevActivityId);

            }

            return null;
        }
        /// <summary>
        /// 查找上一個活動節點
        /// </summary>
        /// <param name="tpl"></param>
        /// <param name="currentActivity"></param>
       /* public ActivityModel FindPreviousActivity(WorkflowTemplateEntity tpl, ActivityModel currentActivity)
        {

            var prevActivityId = currentActivity.PrevId;
            while (!string.IsNullOrEmpty(prevActivityId))
            {
                var activity = GetActivity(tpl, currentActivity.PrevId);
                if (activity != null)
                {
                    if (activity.Type != ActivityType.Copy)
                        return activity;

                    prevActivityId = activity.PrevId;
                }
                else
                    break;
            }

            return null;
        }*/
         
        /// <summary>
        /// 查找当前节点的后续活动节点
        /// </summary>
        /// <param name="tpl"></param>
        /// <param name="currentActivityId"></param>
        /// <param name="nextActivities"></param>
        public void FindNextActivity(WorkflowTemplateEntity tpl, string currentActivityId, List<ActivityModel> nextActivities, Dictionary<string, object> dicForm )
        {
            //寻找启动节点
            if (string.IsNullOrEmpty(currentActivityId))
            {
                var activity = GetActivity(tpl, tpl.fs.startActivityId);
                nextActivities.Add(activity);
                return;
            }

            var lines = tpl.fs.Lines.Where(line => line.FromId == currentActivityId).ToList();

            var curActivity = GetActivity(tpl, currentActivityId);
            var toLines = new List<Line>();
            Line defaultLine = null;

            if (curActivity.Type == ActivityType.ParallelGW)
            {///并行网关，出向 所有分支都认为满足条件
                toLines.AddRange(lines);

            }
            else
            {
                //与2.0版本不同， 3.0版本的条件判断在line对应的node上
                for (int i = 0; i < lines.Count(); i++)
                {
                    var line = lines[i];

                    var toActivity = GetActivity(tpl, line.ToId);
                    if (toActivity != null && toActivity.Type == ActivityType.ParallelGW)
                    { //入向 遇到并行网关， 每个条件都认为满足条件，直接进入该节点
                        toLines.Add(line);
                    }
                    else
                    {

                        var lineNode = GetActivity(tpl, line.Id);
                        if (lineNode != null && lineNode.Condition != null)
                        {//条件节点 判断条件   不够优雅


                            if (lineNode.Condition.IsDefault || lineNode.Condition.Filters == null || lineNode.Condition.Filters.Count == 0)
                            {//默认节点
                                defaultLine = line;
                            }
                            else
                            {
                                bool isTrue = dicForm.Where(lineNode.Condition).Compile()();
                                if (isTrue)
                                {
                                   
                                    //找到符合条件的
                                    toLines.Add(line);

                                    /*    if (curActivity.Type == ActivityType.InclusiveGW)
                                        { }else */
                                    //默认为排他条件 
                                    break;
                                   
                                    // FindNextActivity(tpl,line. toId, nextActivities, dicForm);
                                }
                                else
                                {///不符合条件 不进行后续查找 
                                }
                            }
                        }
                    }
                }
            }
            if (toLines.Count == 0 && defaultLine != null)
                toLines.Add(defaultLine);
            
            for (int i = 0; i < toLines.Count(); i++)
            {
                var toId = toLines[i].ToId;
                var activity = GetActivity(tpl, toId);

                Console.WriteLine("找到活动：" + activity.Title + "," + activity.Type.ToString());
                ///如果找的的节点是填写表单或者审批节点，则认为找到了人手工作项
                if (activity.Type == ActivityType.End)
                { ///流程结束处理
                    Console.WriteLine("流程已经结束");
                    nextActivities.Add(activity);
                }
                else if (activity.Type == ActivityType.Copy)
                { //执行传阅后继续找下一个节点
                    nextActivities.Add(activity);
                     
                    FindNextActivity(tpl, toId, nextActivities, dicForm);
                }
               else 
                { 
                    nextActivities.Add(activity);
                }

            }
        }


    }
}