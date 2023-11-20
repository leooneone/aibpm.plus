using ZhonTai.Admin.Core.Db.Transaction;
using ZhonTai.Admin.Domain.Dict;

namespace ZhonTai.Admin.Repositories;

public class DictRepository : AdminRepositoryBase<DictEntity>, IDictRepository
{
    public DictRepository(UnitOfWorkManagerCloud uowm) : base(uowm)
    {
    }
}