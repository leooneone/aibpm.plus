 
using AI.Core.Model.BPM;
using AI.BPM.Repositories; 
using ZhonTai.Admin.Core.Db.Transaction;
namespace AI.Core.Repository.BPM
{
    public class IntanceRepository : BPMRepositoryBase<InstanceEntity>, IInstanceRepository
    {
        private IFreeSql _fsql;
        public IntanceRepository(UnitOfWorkManagerCloud muowm,IFreeSql fsql) : base(muowm)
        {
            _fsql= fsql;
        }

/*
        public void AddWorkTemplate(IntanceEntity item) {

            var repo = _fsql.GetRepository<IntanceEntity>();
            repo.Insert(item);
            repo.SaveMany(item, "Childs");
        }*/
    }
}