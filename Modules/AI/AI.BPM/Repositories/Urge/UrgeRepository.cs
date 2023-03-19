using AI.Core.Model.BPM;

using AI.BPM.Repositories;
using ZhonTai.Admin.Core.Db.Transaction; 
namespace AI.Core.Repository.BPM
{
    public class UrgeRepository : BPMRepositoryBase<UrgeEntity>, IUrgeRepository
    {
        private IFreeSql _fsql;
        public UrgeRepository(UnitOfWorkManagerCloud muowm,IFreeSql fsql) : base(muowm)
        {
            _fsql= fsql;
        }

/*
        public void AddWorkTemplate(UrgeEntity item) {

            var repo = _fsql.GetRepository<UrgeEntity>();
            repo.Insert(item);
            repo.SaveMany(item, "Childs");
        }*/
    }
}