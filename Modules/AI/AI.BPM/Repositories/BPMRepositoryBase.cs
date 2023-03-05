using ZhonTai.Admin.Core.Consts;
using ZhonTai.Admin.Core.Db.Transaction;
using ZhonTai.Admin.Core.Repositories;

namespace AI.BPM.Repositories
{
    /// <summary>
    /// BPM库基础仓储
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    public class BPMRepositoryBase<TEntity> : RepositoryBase<TEntity> where TEntity : class
    {
        public BPMRepositoryBase(UnitOfWorkManagerCloud uowm) : base(DbKeys.AppDb, uowm) 
        {
            
        }
    }
}