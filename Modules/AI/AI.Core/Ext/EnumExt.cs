using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;


namespace AI.Core.Extensions
{
    /// <summary>
    /// 可选项返回模型
    /// </summary>
    public class OptionResult<T>
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string Label { get; set; }

        /// <summary>
        /// 值
        /// </summary>
        public object Value { get; set; }

        /// <summary>
        /// 禁用
        /// </summary>
        public bool Disabled { get; set; }
        /// <summary>
        /// 数据字典过期时间，过期后不显示在新的数据里面，但是可以被历史表单使用
        /// </summary>

        public DateTime Expired { get; set; }

        /// <summary>
        /// 扩展数据
        /// </summary>
        public T Data { get; set; }
    }

    /// <summary>
    /// 可选项返回模型
    /// </summary>
    public class OptionResult : OptionResult<object>
    {
    }
    public static class EnumExtensions
    {
        private static readonly ConcurrentDictionary<string, string> DescriptionCache = new ConcurrentDictionary<string, string>();

        /// <summary>
        /// 包含UnKnown选项
        /// </summary>
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, List<OptionResult>> ListCache = new ConcurrentDictionary<RuntimeTypeHandle, List<OptionResult>>();

        /// <summary>
        /// 不包含UnKnown选项
        /// </summary>
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, List<OptionResult>> ListCacheNoIgnore = new ConcurrentDictionary<RuntimeTypeHandle, List<OptionResult>>();

        /// <summary>
        /// 获取枚举类型的Description说明
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static string ToDescription(this Enum value)
        {
            var type = value.GetType();
            var info = type.GetField(value.ToString());
            var key = type.FullName + info.Name;
            if (!DescriptionCache.TryGetValue(key, out string desc))
            {
                var attrs = info.GetCustomAttributes(typeof(DescriptionAttribute), true);
                if (attrs.Length < 1)
                    desc = string.Empty;
                else
                    desc = attrs[0] is DescriptionAttribute
                        descriptionAttribute
                        ? descriptionAttribute.Description
                        : value.ToString();

                DescriptionCache.TryAdd(key, desc);
            }

            return desc;
        }

        public static List<OptionResult> ToResult(this Enum value, bool ignoreUnKnown = false)
        {
            var enumType = value.GetType();

            if (!enumType.IsEnum)
                return null;

            return Enum.GetValues(enumType).Cast<Enum>()
                .Where(m => !ignoreUnKnown || !m.ToString().Equals("UnKnown")).Select(x => new OptionResult
                {
                    Label = x.ToDescription(),
                    Value = x.ToInt()
                }).ToList();
        }

        /// <summary>
        /// 枚举转换为返回模型
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="ignoreUnKnown">忽略UnKnown选项</param>
        /// <returns></returns>
        public static List<OptionResult> ToResult<T>(bool ignoreUnKnown = false)
        {
            var enumType = typeof(T);

            if (!enumType.IsEnum)
                return null;

            if (ignoreUnKnown)
            {
                #region ==忽略UnKnown属性==

                if (!ListCacheNoIgnore.TryGetValue(enumType.TypeHandle, out List<OptionResult> list))
                {
                    list = Enum.GetValues(enumType).Cast<Enum>()
                        .Where(m => !m.ToString().Equals("UnKnown")).Select(x => new OptionResult
                        {
                            Label = x.ToDescription(),
                            Value = x.ToInt()
                        }).ToList();

                    ListCacheNoIgnore.TryAdd(enumType.TypeHandle, list);
                }

                return list.Select(m => new OptionResult { Label = m.Label, Value = m.Value }).ToList();

                #endregion ==忽略UnKnown属性==
            }
            else
            {
                #region ==包含UnKnown选项==

                if (!ListCache.TryGetValue(enumType.TypeHandle, out List<OptionResult> list))
                {
                    list = Enum.GetValues(enumType).Cast<Enum>().Select(x => new OptionResult
                    {
                        Label = x.ToDescription(),
                        Value = x.ToInt()
                    }).ToList();

                    ListCache.TryAdd(enumType.TypeHandle, list);
                }

                return list.Select(m => new OptionResult { Label = m.Label, Value = m.Value }).ToList();

                #endregion ==包含UnKnown选项==
            }
        }
    }
}
