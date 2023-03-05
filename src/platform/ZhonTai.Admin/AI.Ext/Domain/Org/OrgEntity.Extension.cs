using ZhonTai.Admin.Core.Entities;
using FreeSql.DataAnnotations;
using System.Collections.Generic;
using ZhonTai.Admin.Domain.UserStaff;
using ZhonTai.Admin.Domain.User;
using ZhonTai.Admin.Domain.Role;
using ZhonTai.Admin.Domain.UserOrg;

namespace ZhonTai.Admin.Domain.Org;

/// <summary>
/// 组织架构
/// </summary> 
public partial class OrgEntity 
{
    /// <summary>
    /// 组织单元负责人
    /// </summary>
    public long DirectorId { get; set; }

    public UserEntity Director { get; set; }
    /// <summary>
    /// 组织单元类型 ，通过数据字典定义
    /// </summary>
    public int Type { get; set; }
}