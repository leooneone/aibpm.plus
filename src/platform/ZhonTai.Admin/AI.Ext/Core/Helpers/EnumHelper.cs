using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ZhonTai.Admin.Core.Helpers
{
    public static class EnumHelper
    {

        /// <summary>
        /// 根据枚举的值获取枚举名称
        /// </summary>
        /// <param name="status"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        public static string GetEnumName(this int status,Type type)
        {
            
            return Enum.GetName(type, status);
        }
        /// <summary>
        /// 获取枚举名称集合
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public static string[] GetNamesArr(Type type)
        {
            return Enum.GetNames(type);
        }
        /// <summary>
        /// 将枚举转换成字典集合
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public static Dictionary<string, int> getEnumDic(Type type)
        {

            Dictionary<string, int> resultList = new Dictionary<string, int>();
          
            var strList = GetNamesArr(type).ToList();
            foreach (string key in strList)
            {
                string val = Enum.Format(type, Enum.Parse(type, key), "d");
                resultList.Add(key, int.Parse(val));
            }
            return resultList;
        }

    }
}
