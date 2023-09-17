
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 
 
using ZhonTai.Admin.Services;
using AI.BPM.Services.Organization.Employee;
using AI.BPM.Services.Organization.OU;
using AI.BPM.Services.Organization.Role;
using ZhonTai.Admin.Services.User;
using ZhonTai.Admin.Services.Role;

using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;
using AI.Core.Helpers;
using COSXML.Log;
using ZhonTai.Admin.Core.Configs;
using ZhonTai.Admin.Domain.Api;
//using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Domain.RoleOrg;
using ZhonTai.Admin.Domain.Tenant;
using ZhonTai.Admin.Domain.User;
using ZhonTai.Admin.Domain.UserOrg;
using ZhonTai.Admin.Domain.UserRole;
using ZhonTai.Admin.Domain.UserStaff;
using ZhonTai.Admin.Repositories;
using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Core.Dto;
using AI.BPM.Services.X.Dto;
using AI.BPM.Domain.Activity;
using Microsoft.AspNetCore.Mvc;

namespace AI.BPM.Services.Organization.X;


/// <summary>
/// 组织架构服务
/// </summary>
[DynamicApi(Area = BPMConstants.AreaName)]
public class OrganizationService : BaseService, IOrganizationService, IDynamicApi
{ 
    private readonly IMyUserService _employeeSerice;
    private readonly IMyOrgService _ouService;
    private readonly IMyRoleService _roleService;

    private AppConfig _appConfig => LazyGetRequiredService<AppConfig>();
    private IUserRepository _userRepository => LazyGetRequiredService<IUserRepository>();
    private IOrgRepository _orgRepository => LazyGetRequiredService<IOrgRepository>();
    private ITenantRepository _tenantRepository => LazyGetRequiredService<ITenantRepository>();
    private IApiRepository _apiRepository => LazyGetRequiredService<IApiRepository>();
    private IUserStaffRepository _staffRepository => LazyGetRequiredService<IUserStaffRepository>();
    private IUserRoleRepository _userRoleRepository => LazyGetRequiredService<IUserRoleRepository>();
    private IRoleOrgRepository _roleOrgRepository => LazyGetRequiredService<IRoleOrgRepository>();
    private IUserOrgRepository _userOrgRepository => LazyGetRequiredService<IUserOrgRepository>();



    public OrganizationService(
        IMyUserService employeeSerice, IMyOrgService OUService
        , IMyRoleService roleService
    )
    {
        _employeeSerice = employeeSerice;
        _ouService = OUService; 
        _roleService = roleService;
    }
    /// <summary>
    /// 根据角色查找员工
    /// </summary>
    /// <param name="roleId"></param>
    /// <returns></returns>
    public async Task<List<EmployeeSelectDto>> GetEmployeesByRoleAsync(long roleId) {

        var res= await _roleService.GetEmployees(roleId);

        return Mapper.Map<List<EmployeeSelectDto>>(res); 
    }
    /// <summary>
    /// 根据组织查找员工
    /// </summary>
    /// <param name="ouId"></param>
    /// <returns></returns>
    public async Task<List<EmployeeSelectDto>> GetEmployeesByOUAsync(long ouId)
    {
        var res = await _ouService.GetEmployees(ouId);
        return Mapper.Map<List<EmployeeSelectDto>>(res);
    }


    /// <summary>
    /// 获取配置的参与人
    /// </summary>
    /// <param name="humans"></param> 
    /// <returns></returns>
    [NonAction]
    [NonDynamicApi]

    public async Task<List<EmployeeSelectDto>> GetParticipants(Dictionary<string, List<Participant>> participants)
    {

        var list = new List<EmployeeSelectDto>();
        var particpantsList = participants.ToList();
        for (var m = 0; m < particpantsList.Count; m++)


        {
            var v = particpantsList[m];
            if (v.Key == "user")
            {

                v.Value.ForEach(h =>
                {//直接賦值即可
                    list.Add(new EmployeeSelectDto { Id = h.Id, Name = h.Name/*, Type = h.Type*/ });
                });
            }
            else if (v.Key == "role")
            {
                for (var k = 0; k < v.Value.Count; k++)
                {
                    var employees = await GetEmployeesByRoleAsync(v.Value[k].Id);

                    list.AddRange(employees);
                }

            }
            else if (v.Key == "org")
            {

                for (var k = 0; k < v.Value.Count; k++)
                {
                    var employees = await GetEmployeesByOUAsync(v.Value[k].Id);

                    list.AddRange(employees);
                }

            }


        }
        return list;
    }
     
    /// <summary>
    /// 主属组织单元的领导
    /// </summary>
    /// <param name="employeeId"></param>
    /// <param name="OUType"></param>
    /// <param name="ids"></param>
    /// <returns></returns>
    public async Task< long > GetDirectorByOUType(long employeeId, int OUType) {
        var ent = await _employeeSerice.GetAsync(employeeId); 
        if (ent != null)// && ent.ManagerUserId > 0)
        {
            var org=await GetOUByOUType(ent.OrgId, OUType);
            if (org!=null)
            {
                return org.DirectorId;
            }
        } 
     
        return 0;
    }
    /// <summary>
    /// 根据组织类型查找组织
    /// </summary>
    /// <param name="ouId"></param>
    /// <param name="OUType"></param>
    /// <returns></returns>
      async Task<OrgEntity> GetOUByOUType(long ouId, int OUType)
    {

        var ids = new List<long>();
        var org  = await _orgRepository.Select.WhereDynamic(ouId).ToOneAsync();
       
        if (org != null) { 
            if (org.Type == OUType )
            {
                return org;

            }
            else
            {
                if(org.ParentId>0)
                    return await GetOUByOUType(org.ParentId, OUType);
            }
        }
        return default(OrgEntity);
    }
    /// <summary>
    /// 获取指定级别的所有上级主管
    /// </summary>
    /// <param name="employeeId"></param>
    /// <param name="level"></param>
    /// <param name="ids"></param>
    /// <returns></returns>
    public async Task<List<long>> GetSupervisors(long employeeId, int level, int ouType, bool isDirectorIn = false)
    {
        return await GetSupervisorsWithCircularLimit(employeeId, level, ouType, isDirectorIn);
    }
    /// <summary>
    /// 获取指定级别的所有上级主管,防止死循环
    /// </summary>
    /// <param name="employeeId"></param>
    /// <param name="level"></param>
    /// <param name="ouType"></param>
    /// <param name="isDirectorIn"></param>
    /// <param name="originalId"></param>
    /// <returns></returns>
    async Task<List<long>> GetSupervisorsWithCircularLimit(long employeeId, int level,int ouType,bool isDirectorIn=false,long originalId=0)
    {
        var ent = await _employeeSerice.GetAsync (employeeId);
       
        var ids=new List< long >();

        ///防止死循环
        if (employeeId == originalId)
        {
            throw ResultOutput.Exception("后续节点参与人错误：发起人（您）的上级主管出现循环设置，请联系管理员修改上级主管设置");
            return ids;
        }
        
        if (originalId==0)
            originalId= employeeId;
        if (ent != null && ent.ManagerUserId > 0)
        {
            
            var supervisorId = (long)ent.ManagerUserId;

            var org = await _orgRepository.Select.WhereDynamic(ent.OrgId).ToOneAsync();
            if (org.Type == ouType && supervisorId == org.DirectorId)
            {//此组织单元范围内
                if(isDirectorIn)
                    ids.Add(supervisorId);
                return ids;
            }
            else { 
                ids.Add(supervisorId);
                ids.AddRange(  await GetSupervisorsWithCircularLimit(supervisorId, level,ouType, isDirectorIn,originalId));
            }
        }

        return ids;
    }
   /* public async Task<List<long>> GetIdByOrgAsync(long orgId)
    { 

        var ids = await _ouService.GetEmployees(orgId);


        return ids;
    }*/
    /// <summary>
    /// 根据公司DAAL权限 获取审批人
    /// </summary>
    /// <returns></returns>
    public async Task<List<long>> GetDAALApprovers(long amount)
    {
        throw ResultOutput.Exception("待实现");
        return new List<long> { };
    }
    /// <summary>
    /// 获取到指定组织内的所有主管（汇报线）
    /// </summary>
    /// <param name="employeeId"></param>
    /// <param name="ouType"></param>
    /// <param name="ids"></param>
    /// <returns></returns>
    public async Task<List<long>> GetSupervisorsByUnitType(long employeeId, int ouType)
    {
        var ids = new List<long>();
        var ent = await _userRepository.Select
        .WhereDynamic(employeeId).IncludeMany(a=>a.Orgs).ToOneAsync();
        if (ent != null&&ent.ManagerUserId>0)
        {
            var id = (long)ent.ManagerUserId;
            

            if (ent.Orgs.Any(org=>org.Type == ouType ) )
            {
                ids.Add(ent.Id);
                var res = await GetSupervisorsByUnitType(id, ouType);
                if (res.Count > 0)
                    ids.AddRange(res);
                
            }
            else //已经超出组织类型了
            {
                
                return ids;

            }
        }

        return ids;
    } 

}