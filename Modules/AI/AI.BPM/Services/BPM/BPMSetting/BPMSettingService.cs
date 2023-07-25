using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Configs;
using ZhonTai.Admin.Core.Helpers;

using AI.Core.Model.BPM;
using ZhonTai.Admin.Core.Repositories;
using AI.Core.Repository.BPM;  
using System.Collections.Concurrent;
using ZhonTai.Admin.Core.Dto;

using ZhonTai.Admin.Services;
using NetTopologySuite.Algorithm;
using ZhonTai.DynamicApi.Attributes;
using ZhonTai.DynamicApi;
using Microsoft.AspNetCore.Authorization; 
using FreeSql; 
using AI.BPM.Services.BPMSetting.Input;
using ZhonTai.Admin.Domain.User;

namespace AI.BPM.Services.BPMSetting
{
    /// <summary>
    /// 实例服务
    /// </summary>

    [DynamicApi(Area = BPMConstants.AreaName)]
    public class BPMSettingService : BaseService, IBPMSettingService, IDynamicApi
    {
        private static   BPMSettingEntity _BPMSettings = new BPMSettingEntity();
        private readonly IBPMSettingRepository _BPMSettingRepository;
        private readonly IWorkflowTemplateRepository _workflowTemplateRepository;
        public BPMSettingService(
            IBPMSettingRepository BPMSettingRepository,
             IWorkflowTemplateRepository workflowTemplateRepository
        )
        {
            _workflowTemplateRepository = workflowTemplateRepository;
            _BPMSettingRepository = BPMSettingRepository;
        }

        public async Task<BPMSettingEntity> GetSettingAsync()
        {
            if (_BPMSettings.Id == 0)
                await GetAsync(); 
            return _BPMSettings;
        }
        /// <summary>
        /// 获取设置
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<BPMSettingEntity> GetAsync()
        {



            var ins = await _BPMSettingRepository.Select
                .Include(a=>a.Admin)
               // .IncludeMany(a => a.Organizations.Select(b => new OUEntity { Id = b.Id }))
               .FirstAsync();
           
            if (ins == null)
                ins = new BPMSettingEntity ();
            if(ins.AdminId>0&&ins.Admin!=null)
                ins.AdminName = ins.Admin.Name;
            _BPMSettings = ins;
           
            //BPMSettingGetOutput dto = Mapper.Map<BPMSettingGetOutput>(ins);
            return ins;
        }
          

        /// <summary>
        /// 更新设置
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [Transaction]
        public async Task UpdateAsync(BPMSettingUpdateInput input)
        {

            var ent = new BPMSettingEntity(); //await _BPMSettingRepository.GetAsync(input.Id);
            

            Mapper.Map(input, ent);
            await _BPMSettingRepository.InsertOrUpdateAsync(ent);

            //  await _BPMSettingOrganizationRepository.DeleteAsync(a => a.BPMSettingId == BPMSetting.Id);


            _BPMSettings = await GetAsync();
        }
        
    }
}