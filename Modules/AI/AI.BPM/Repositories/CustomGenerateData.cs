using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZhonTai.Admin.Core.Db;
using ZhonTai.Admin.Domain.DictionaryType;
using ZhonTai.Admin.Domain.Dictionary;
using ZhonTai.Admin.Domain.Api;
using ZhonTai.Admin.Domain.Permission;
using ZhonTai.Admin.Domain.User;
using ZhonTai.Admin.Domain.Role;
using ZhonTai.Admin.Domain.UserRole;
using ZhonTai.Admin.Domain.RolePermission;
using ZhonTai.Admin.Domain.Tenant;
using ZhonTai.Admin.Domain.TenantPermission;
using ZhonTai.Admin.Domain.PermissionApi;
using ZhonTai.Admin.Domain.View;
using ZhonTai.Admin.Core.Configs;
using ZhonTai.Common.Extensions;
using ZhonTai.Admin.Domain.UserStaff;
using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Core.Db.Data;
using FreeSql;
using ZhonTai.Admin.Domain.UserOrg;
using AI.BPM.Domain.WorkflowTemplate;

namespace ZhonTai.Admin.Repositories;

public class CustomGenerateData : GenerateData, IGenerateData
{
    public virtual async Task GenerateDataAsync(IFreeSql db, AppConfig appConfig)
    {
        #region 读取数据

        //admin
        #region 数据字典

        var tempalte = db.Queryable<WorkflowTemplateEntity>().ToListIgnore(a => new
        {
            a.CreatedTime,
            a.CreatedUserId,
            a.CreatedUserName,
            a.ModifiedTime,
            a.ModifiedUserId,
            a.ModifiedUserName
        });

        #endregion
        #endregion



        #region 生成数据

        var isTenant = appConfig.Tenant;

        SaveDataToJsonFile<WorkflowTemplateEntity>(tempalte, isTenant,"InitData/BPM");
         

        #endregion
    }
}
