﻿using ZhonTai.Admin.Core.Entities;
using FreeSql.DataAnnotations;

namespace ZhonTai.Admin.Domain.DictType;

/// <summary>
/// 数据字典类型
/// </summary>
[Table(Name = "ad_dict_type")]
[Index("idx_{tablename}_01", nameof(Name), true)]
public class DictTypeEntity : EntityBase
{
    /// <summary>
    /// 名称
    /// </summary>
    [Column(StringLength = 50)]
    public string Name { get; set; }

    /// <summary>
    /// 编码
    /// </summary>
    [Column(StringLength = 50)]
    public string Code { get; set; }

    /// <summary>
    /// 是否系统字典 ，系统字典正常不可删除，可以认为是一种可动态添加的枚举
    /// </summary>
    public bool IsSystem { get; set; }
    /// <summary>
    /// 描述
    /// </summary>
    [Column(StringLength = 500)]
    public string Description { get; set; }

    /// <summary>
    /// 启用
    /// </summary>
	public bool Enabled { get; set; } = true;

    /// <summary>
    /// 排序
    /// </summary>
	public int Sort { get; set; }
}