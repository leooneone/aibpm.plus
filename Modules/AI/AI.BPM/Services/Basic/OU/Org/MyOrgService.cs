
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using ZhonTai.Admin.Services ; 
using ZhonTai.Admin.Domain.User;
using ZhonTai.Admin.Services.Org;
using ZhonTai.Admin.Core.Extensions;
using ZhonTai.Admin.Repositories;
using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Domain.UserOrg;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;

namespace AI.BPM.Services.Organization.OU
{

    /// <summary>
    /// 组织单元服务
    /// </summary>
    [DynamicApi(Area = BPMConstants.AreaName)]
    public class MyOrgService : OrgService, IMyOrgService,IDynamicApi
    {
        private readonly IOrgRepository _organizationRepository;

        private readonly IUserOrgRepository _employeeOrganizationRepository;
        public MyOrgService(IOrgRepository organizationRepository,
            IUserOrgRepository employeeOrganizationRepository)
        {
            _organizationRepository = organizationRepository;
            _employeeOrganizationRepository = employeeOrganizationRepository;
        }

     

        /// <summary>
        /// 关联组织与员工
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task JoinEmployeesAsync(List<UserOrgEntity> input)
        {
            var entity = input;// Mapper.Map<EmployeeOrgRoleEntity>(input);
            var res = (await _employeeOrganizationRepository.InsertAsync(entity));

            
        }
        /// <summary>
        /// 移除组织内员工
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public async Task RemoveEmployeesAsync(long[] ids)
        {
            var ents = await _employeeOrganizationRepository.Select.WhereDynamic(ids).ToListAsync();
            var res = await _employeeOrganizationRepository.DeleteAsync(ents);
             
        }
        /// <summary>
        /// 查找员工
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<List<UserEntity>>GetEmployees(long id)
        {
            var result = await _organizationRepository.Select.WhereDynamic(id)
            .IncludeMany<UserEntity>(a => a.Users)
            .ToOneAsync(a => a.Users);
            if(result==null)
                return  new List<UserEntity>() ;
            var res = result.Select(a => a).ToList();
            return  res;
        }
         
    }
}