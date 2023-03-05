 
using AI.Core.Repository; 
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic; 
using ZhonTai.Admin.Repositories ;

using ZhonTai.Admin.Services.Role; 
using ZhonTai.Admin.Domain.UserRole;
using ZhonTai.Admin.Domain.RoleOrg;
using ZhonTai.Admin.Domain.Role;
using ZhonTai.Admin.Domain.User;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ZhonTai.Admin.Domain.Role.Dto;
using ZhonTai.Admin.Services.Role.Dto;
using ZhonTai.DynamicApi;

namespace AI.BPM.Services.Organization.Role;

/// <summary>
/// 角色服务
/// </summary>
[DynamicApi(Area = BPMConstants.AreaName)]
[AllowAnonymous]
public class MyRoleService : RoleService, IMyRoleService,IDynamicApi
{
    private readonly IRoleRepository _roleRepository;
    private readonly IUserRoleRepository _emplyeeRoleRepository;
    private readonly IRoleOrgRepository _roleOURepository;

    public MyRoleService(
        IRoleRepository roleRepository,
        IUserRoleRepository emplyeeRoleRepository,
        IRoleOrgRepository   roleOURepository
    )
    {
        _roleRepository = roleRepository;
        _emplyeeRoleRepository = emplyeeRoleRepository;
        _roleOURepository = roleOURepository;   
    }


     

    /// <summary>
    /// 查询指定角色的子列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public async Task<List<RoleGetListOutput>> GetListByParentIdAsync([FromQuery] long parentId)
    {
        var list = await _roleRepository.Select
        .Where(a => a.ParentId == parentId)
        .OrderBy(a => new { a.ParentId, a.Sort })
        .ToListAsync<RoleGetListOutput>();

        return list;
    }
    /// <summary>
    /// 添加员工
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public async Task JoinEmployeesAsync(List<UserRoleEntity> input)
    {
        var entity = input;// Mapper.Map<EmployeeOrgRoleEntity>(input);
        var res = (await _emplyeeRoleRepository.InsertAsync(entity));

         
    }
    /// <summary>
    /// 查找指定角色的员工Id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<List<UserEntity>> GetEmployeeIds(long id)
    {
        var result = await _roleRepository.Select.WhereDynamic(id)
        .IncludeMany<UserEntity>(a => a.Users)
        .ToOneAsync(a => a.Users);
        var res = result.Select(a => a).ToList();
        return res;
    }
    /// <summary>
    /// 查找指定角色的员工
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<List<UserEntity>> GetEmployees(long id)
    {
        var result = await _roleRepository.Select.WhereDynamic(id)
        .IncludeMany<UserEntity>(a=>a.Users)
        .ToOneAsync(a => a.Users);
        var res= result.Select(a => a).ToList();
        return  res;
    } 
}