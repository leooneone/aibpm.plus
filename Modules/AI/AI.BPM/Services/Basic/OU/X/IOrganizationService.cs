 
using System.Threading.Tasks;
using System.Collections.Generic;
using AI.BPM.Domain.Activity;
using AI.BPM.Services.X.Dto;

namespace AI.BPM.Services.Organization.X;

/// <summary>
/// 组织架构服务
/// </summary>
public interface IOrganizationService
{
    Task<List<EmployeeSelectDto>> GetEmployeesByRoleAsync(long roleId);
    Task<List<EmployeeSelectDto>> GetEmployeesByOUAsync(long ouId);
     

    Task<long> GetDirectorByOUType(long employeeId, int OUType);
    Task<List<long>> GetSupervisors(long employeeId, int level, int ouType, bool isDirectorIn );

    Task<List<EmployeeSelectDto>> GetParticipants(Dictionary<string, List<Participant>> participants);
}