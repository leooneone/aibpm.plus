using System.Linq;
using System.Threading.Tasks;
using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Dto; 
using ZhonTai.Admin.Domain.Dictionary;
using ZhonTai.DynamicApi;
using ZhonTai.DynamicApi.Attributes;
using Microsoft.AspNetCore.Mvc;
using ZhonTai.Admin.Services;
using ZhonTai.Admin.Services.DictionaryType.Dto;
using ZhonTai.Admin.Domain.DictionaryType;
using ZhonTai.Admin.Core.Consts; 
namespace ZhonTai.Admin.Services.DictionaryType;

/// <summary>
/// 字典类型服务
/// </summary>
[DynamicApi(Area = AdminConsts.AreaName)]
public class DictionaryTypeService : BaseService, IDictionaryTypeService, IDynamicApi
{
    private   IDictionaryTypeRepository _dictionaryTypeRepository => LazyGetRequiredService<IDictionaryTypeRepository>();
    private IDictionaryRepository _dictionaryRepository => LazyGetRequiredService<IDictionaryRepository>();
    public DictionaryTypeService ( )
    {
         
    }

    /// <summary>
    /// 查询字典类型
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<DictionaryTypeGetOutput> GetAsync(long id)
    {
        var result = await _dictionaryTypeRepository.GetAsync<DictionaryTypeGetOutput>(id);
        return result;
    }

    /// <summary>
    /// 查询字典类型列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<PageOutput<DictionaryTypeListOutput>> GetPageAsync(PageInput<DictionaryTypeGetPageDto> input)
    {
        var key = input.Filter?.Name;

        var list = await _dictionaryTypeRepository.Select
        .WhereDynamicFilter(input.DynamicFilter)
        .WhereIf(!string.IsNullOrEmpty(key), a => a.Name.Contains(key) || a.Code.Contains(key))
        .Count(out var total)
        .OrderByDescending(true, c => c.Id)
        .Page(input.CurrentPage, input.PageSize)
        .ToListAsync<DictionaryTypeListOutput>();

        var data = new PageOutput<DictionaryTypeListOutput>()
        {
            List = list,
            Total = total
        };

        return data;
    }

    /// <summary>
    /// 新增
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public async Task<long> AddAsync(DictionaryTypeAddInput input)
    {
        var DictionaryType = Mapper.Map<DictionaryTypeEntity>(input);
        await _dictionaryTypeRepository.InsertAsync(DictionaryType);
        return DictionaryType.Id;
    }

    /// <summary>
    /// 修改
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public async Task UpdateAsync(DictionaryTypeUpdateInput input)
    {
        var entity = await _dictionaryTypeRepository.GetAsync(input.Id);
        if (!(entity?.Id > 0))
        {
            throw ResultOutput.Exception("数据字典不存在！");
        }

        Mapper.Map(input, entity);
        await _dictionaryTypeRepository.UpdateAsync(entity);
    }

    /// <summary>
    /// 彻底删除
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [AdminTransaction]
    public virtual async Task DeleteAsync(long id)
    {
        //删除字典数据
        await _dictionaryRepository.DeleteAsync(a => a.DictionaryTypeId == id);

        //删除字典类型
        await _dictionaryTypeRepository.DeleteAsync(a => a.Id == id);
    }

    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [AdminTransaction]
    public virtual async Task SoftDeleteAsync(long id)
    {
        await _dictionaryRepository.SoftDeleteAsync(a => a.DictionaryTypeId == id);
        await _dictionaryTypeRepository.SoftDeleteAsync(id);
    }

    /// <summary>
    /// 批量删除
    /// </summary>
    /// <param name="ids"></param>
    /// <returns></returns>
    [AdminTransaction]
    public virtual async Task BatchSoftDeleteAsync(long[] ids)
    {
        await _dictionaryRepository.SoftDeleteAsync(a => ids.Contains(a.DictionaryTypeId));
        await _dictionaryTypeRepository.SoftDeleteAsync(ids);
    }
}