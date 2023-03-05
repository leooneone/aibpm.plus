
using System.Threading.Tasks;
using System.Collections.Generic;
using System;
using ZhonTai.Admin.Domain.UserRole;
using ZhonTai.Admin.Domain.User;

namespace AI.BPM.Services.Organization.Role
{
    public interface IMyRoleService
    {
        Task JoinEmployeesAsync(List<UserRoleEntity> input);
        Task<List<UserEntity>> GetEmployees(long id); 
        //Task RemoveEmployeesAsync(long[] ids); 
        //Task GetListAsync(RoleQueryInput input);
        /* Task<IResponseOutput> GetGroupAsync(long id);

         Task<IResponseOutput> GetRoleAsync(long id); 
         Task<IResponseOutput> GetOrgRoleList();

         Task<IResponseOutput> GetRoleOrgRoleList(long roleId);


         Task<IResponseOutput> GetTenantOrgRoleList(long tenantId);

         Task<IResponseOutput> GetListAsync(string key, DateTime? start, DateTime? end);

         Task<IResponseOutput> AddGroupAsync(OrgRoleAddGroupInput input);

         Task<IResponseOutput> AddRoleAsync(OrgRoleAddInput input);


         Task<IResponseOutput> UpdateGroupAsync(OrgRoleUpdateGroupInput input);

         Task<IResponseOutput> UpdateRoleAsync(OrgRoleUpdateInput input);*/

         

       
    }
}