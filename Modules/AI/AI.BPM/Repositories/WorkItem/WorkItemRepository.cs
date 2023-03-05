using AI.Core.Model.BPM;

using AI.BPM.Repositories;
using ZhonTai.Admin.Core.Db.Transaction; 
namespace AI.Core.Repository.BPM
{
    public class WorkItemRepository : BPMRepositoryBase<WorkItemEntity>, IWorkItemRepository
    {
        private IFreeSql _fsql;
        public WorkItemRepository(UnitOfWorkManagerCloud muowm,IFreeSql fsql) : base(muowm)
        {
            _fsql= fsql;
        }

/*
        public void AddWorkTemplate(WorkItemEntity item) {

            var repo = _fsql.GetRepository<WorkItemEntity>();
            repo.Insert(item);
            repo.SaveMany(item, "Childs");
        }*/
    }
}