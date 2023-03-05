 
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks; 
using System;
using ZhonTai.Admin.Repositories;
using ZhonTai.Admin.Services;
using ZhonTai.Admin.Services.User;
using ZhonTai.Admin.Domain.User;
using ZhonTai.Admin.Domain.UserOrg;
using ZhonTai.Admin.Domain.RoleOrg;
using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Domain.Role;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
 
namespace AI.BPM.Services.Organization.Employee
{

    /// <summary>
    /// 员工服务
    /// </summary>
    [DynamicApi(Area = BPMConstants.AreaName)]
    public class MyUserService : UserService, IMyUserService
    { 
        private IUserRepository _userRepository => LazyGetRequiredService<IUserRepository>();
        private IOrgRepository _orgRepository => LazyGetRequiredService<IOrgRepository>();
      
        private IRoleOrgRepository _roleOrgRepository => LazyGetRequiredService<IRoleOrgRepository>();
        private IUserOrgRepository _userOrgRepository => LazyGetRequiredService<IUserOrgRepository>();



        public MyUserService(
             
        )
        { 
        }


        /// <summary>
        /// 查询用户
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<UserEntity> GetUserAsync(long id)
        {
            var userEntity = await _userRepository.Select
            .WhereDynamic(id)
            
            .IncludeMany(a => a.Orgs.Select(b => new OrgEntity { Id = b.Id, Name = b.Name }))
            .ToOneAsync( ); 

            return userEntity;
        }




    }
}