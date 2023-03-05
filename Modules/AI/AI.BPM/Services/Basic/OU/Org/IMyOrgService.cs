

using System.Threading.Tasks;
using System.Collections.Generic;
using ZhonTai.Admin.Core.Entities;
using ZhonTai.Admin.Domain.UserOrg;
using ZhonTai.Admin.Domain.User;

namespace AI.BPM.Services.Organization.OU
{
    public partial interface IMyOrgService
    {


        Task JoinEmployeesAsync(List<UserOrgEntity> input);
        Task<List<UserEntity>> GetEmployees(long id);
        Task RemoveEmployeesAsync(long[] ids); 
    }
}