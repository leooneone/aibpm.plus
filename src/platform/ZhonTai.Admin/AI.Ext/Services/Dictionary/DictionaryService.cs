using System.Threading.Tasks;
using ZhonTai.Admin.Core.Dto;
using ZhonTai.Admin.Domain.Dictionary;
using ZhonTai.Admin.Domain.Dictionary.Dto;
using ZhonTai.DynamicApi;
using ZhonTai.DynamicApi.Attributes;
using Microsoft.AspNetCore.Mvc;
using ZhonTai.Admin.Core.Consts;
using ZhonTai.Admin.Services.Dictionary.Dto;
using ZhonTai.Admin.Core.Attributes;
using System.Collections.Generic;
using System;
using System.Linq;
using ZhonTai.Admin.Core.Helpers;
using ZhonTai.Admin.Domain.DictionaryType;

namespace ZhonTai.Admin.Services.Dictionary;

/// <summary>
/// 字典服务
/// </summary>
[DynamicApi(Area = AdminConsts.AreaName)]
public class DictionaryService : BaseService, IDictioanryService, IDynamicApi
{
    private  IDictionaryRepository _dictionaryRepository => LazyGetRequiredService<IDictionaryRepository>();
    public DictionaryService()
    { 
    }

    /// <summary>
    /// 查询数据字典
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<DictionaryGetOutput> GetAsync(long id)
    {
        var result = await _dictionaryRepository.GetAsync<DictionaryGetOutput>(id);
        return result;
    }

    /// <summary>
    /// 查询数据字典列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<PageOutput<DictionaryListOutput>> GetPageAsync(PageInput<DictionaryGetPageDto> input)
    {
        var key = input.Filter?.Name;
        var dictionaryTypeId = input.Filter?.DictionaryTypeId;
        var list = await _dictionaryRepository.Select
        .WhereDynamicFilter(input.DynamicFilter)
        .WhereIf(dictionaryTypeId.HasValue && dictionaryTypeId.Value > 0, a => a.DictionaryTypeId == dictionaryTypeId)
        .WhereIf(key.NotNull(), a => a.Name.Contains(key) || a.Code.Contains(key))
        .Count(out var total)
        .OrderByDescending(true, c => c.Id)
        .Page(input.CurrentPage, input.PageSize)
        .ToListAsync<DictionaryListOutput>();

        var data = new PageOutput<DictionaryListOutput>()
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
    public async Task<long> AddAsync(DictionaryAddInput input)
    {
        var dictionary = Mapper.Map<DictionaryEntity>(input);
        await _dictionaryRepository.InsertAsync(dictionary);
        return dictionary.Id;
    }

    /// <summary>
    /// 修改
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    public async Task UpdateAsync(DictionaryUpdateInput input)
    {
        var entity = await _dictionaryRepository.GetAsync(input.Id);
        if (!(entity?.Id > 0))
        {
            throw ResultOutput.Exception("数据字典不存在");
        }

        Mapper.Map(input, entity);
        await _dictionaryRepository.UpdateAsync(entity);
    }

    /// <summary>
    /// 彻底删除
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task DeleteAsync(long id)
    {
        await _dictionaryRepository.DeleteAsync(m => m.Id == id);
    }

    /// <summary>
    /// 删除
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task SoftDeleteAsync(long id)
    {
        await _dictionaryRepository.SoftDeleteAsync(id);
    }

    /// <summary>
    /// 批量删除
    /// </summary>
    /// <param name="ids"></param>
    /// <returns></returns>
    public async Task BatchSoftDeleteAsync(long[] ids)
    {
        await _dictionaryRepository.SoftDeleteAsync(ids);
    }


    #region 自定义函数

    /// <summary>
    /// 获取指定名称的数据字典列表
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
/*
    async Task<List<DictionaryListOutput>> GetEnumListAsync(string name)
    {
        var list = new List<DictionaryListOutput>();
        var tp = Type.GetType("AI.Core.Model.BPM." + name);
        //  var tp= Assembly.GetAssembly().GetType(name);

        if (tp != null && tp.IsEnum)
        {
            return EnumHelper.getEnumDic(tp).Select(e => new DictionaryListOutput
            {
                Code = e.Value.ToString(),
                Name = e.Key,
                Value = e.Value.ToString(),
                Id = e.Value,
                Enabled = true
            }).ToList();
        }

        return list;

    }*/
    /// <summary>
    /// 获取指定名称的数据字典列表
    /// </summary>
    /// <param name="name"></param>
    /// <returns></returns>
    [HttpGet]
    [Login]
    public async Task<List<DictionaryListOutput>> GetListAsync(string name)
    {//改为通过data-contract直接定义枚举类型的数据字典
      //  var res = await GetEnumListAsync(name);
      /*  if (res != null && res.Count > 0)
            return res;*/
       // var key = name;

        var list = await _dictionaryRepository.Select
        //    .WhereDynamicFilter(input.DynamicFilter)
        //   .Include<DictionaryTypeEntity>(t=>t.Name==name)


        .Where(b => b.DictionaryType.Code == name)
        //      .WhereIf(dictionaryTypeId.HasValue && dictionaryTypeId.Value > 0, a => a.DictionaryTypeId == dictionaryTypeId)
        //  .WhereIf(key.NotNull(), a => a.Name.Contains(key) || a.Code.Contains(key))
        //    .Count(out var total)
        .OrderByDescending(true, c => c.Id)
        .ToListAsync<DictionaryListOutput>();


        return list;

    }
    #endregion
}