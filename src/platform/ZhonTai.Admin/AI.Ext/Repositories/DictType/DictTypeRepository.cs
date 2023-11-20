using ZhonTai.Admin.Core.Db.Transaction;
using ZhonTai.Admin.Domain.DictType;
namespace ZhonTai.Admin.Repositories;

public class DictTypeRepository : AdminRepositoryBase<DictTypeEntity>, IDictTypeRepository
{
    public DictTypeRepository(UnitOfWorkManagerCloud uowm) : base(uowm)
    {
    }
}