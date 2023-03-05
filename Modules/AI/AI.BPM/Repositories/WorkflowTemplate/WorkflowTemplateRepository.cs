using AI.Core.Model.BPM;
 

using AI.BPM.Repositories;
using ZhonTai.Admin.Core.Db.Transaction;
using AI.BPM.Domain.WorkflowTemplate;
namespace AI.Core.Repository.BPM
{
    public class WorkflowTemplateRepository : BPMRepositoryBase<WorkflowTemplateEntity>, IWorkflowTemplateRepository
    {
        private IFreeSql _fsql;
        public WorkflowTemplateRepository(UnitOfWorkManagerCloud muowm,IFreeSql fsql) : base(muowm)
        {
            _fsql= fsql;
        }

/*
        public void AddWorkTemplate(WorkflowTemplateEntity item) {

            var repo = _fsql.GetRepository<WorkflowTemplateEntity>();
            repo.Insert(item);
            repo.SaveMany(item, "Childs");
        }*/
    }
}