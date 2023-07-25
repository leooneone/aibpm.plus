 
using AI.Core.Model.BPM;
using AI.BPM.Repositories; 
using ZhonTai.Admin.Core.Db.Transaction;
namespace AI.Core.Repository.BPM
{
    public class BPMSettingRepository  : BPMRepositoryBase<BPMSettingEntity>, IBPMSettingRepository
    {
        private IFreeSql _fsql;
        public BPMSettingRepository (UnitOfWorkManagerCloud muowm,IFreeSql fsql) : base(muowm)
        {
            _fsql= fsql;
        }
         
    }
}