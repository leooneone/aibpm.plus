using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;
using FreeSql.Internal.Model;
using System.Reflection;
namespace AI.Core.Extensions
{
    public static  class DictionaryEx
    {
        private static readonly MethodInfo MethodContains = typeof(Enumerable).GetMethods(
                        BindingFlags.Static | BindingFlags.Public)
                        .Single(m => m.Name == nameof(Enumerable.Contains)
                            && m.GetParameters().Length == 2);
        public static Expression<Func<bool>> Where(this Dictionary<string, object> dic, DynamicFilterInfo filter)
        {

            Expression ParseCondition(DynamicFilterInfo filter)
            {
              

                Expression exp = null;
                if (filter.Field != null) { 
                var propertyName = filter.Field;
                var val = filter.Value;

                if (dic.ContainsKey(propertyName))
                {
                    var value = dic[propertyName];
                    // var left = Expression.Constant(value, propInfo[propertyName]);
                    var left = Expression.Constant(value);
                    //var res = (string)value == (string)val;

                    Expression right = Expression.Empty();
                    Console.WriteLine(propertyName + ":" + filter.Operator + right);
                    /* if (filter.Operator == DynamicFilterOperator.Range)
                     {
                           right = Expression.Constant(val);

                     }else
                         right = Expression.Constant(val, propInfo[propertyName]);*/
                    right = Expression.Constant(val);
                    Console.WriteLine(propertyName + ":" + filter.Operator + right);
                    switch (filter.Operator)
                    {
                        case DynamicFilterOperator.GreaterThan:
                            exp = Expression.GreaterThan(left, right);
                            break;
                        case DynamicFilterOperator.LessThan:

                            exp = Expression.LessThan(left, right);
                            break;

                        case DynamicFilterOperator.Eq:
                        case DynamicFilterOperator.Equal:
                        case DynamicFilterOperator.Equals:
                            exp = Expression.Equal(left, right);
                            break;
                        case DynamicFilterOperator.NotEqual:
                            exp = Expression.Equal(left, right);
                            exp = Expression.Not(exp);
                            break;
                        case DynamicFilterOperator.GreaterThanOrEqual:

                            exp = Expression.GreaterThanOrEqual(left, right);
                            break;

                        case DynamicFilterOperator.LessThanOrEqual:

                            exp = Expression.LessThanOrEqual(left, right);
                            break;
                        case DynamicFilterOperator.Contains:
                        case DynamicFilterOperator.StartsWith:
                        case DynamicFilterOperator.EndsWith:

                            exp = Expression.Call(
                            typeof(string).GetMethod(filter.Operator.ToString()),
                            left,
                            right);
                            break;
                        case DynamicFilterOperator.NotContains:
                        case DynamicFilterOperator.NotStartsWith:
                        case DynamicFilterOperator.NotEndsWith:
                            exp = Expression.Call(
                            typeof(string).GetMethod(filter.Operator.ToString().Substring(3)),
                            left,
                            right);
                            exp = Expression.Not(exp);
                            break;
                        case DynamicFilterOperator.Range:
                            var contains = MethodContains.MakeGenericMethod(typeof(string));

                            exp = Expression.Call(
                             contains,
                             right,
                             left);

                            Console.WriteLine(exp);
                            break;
                    }
                }
                else
                {
                    throw new Exception($"属性{filter.Field}不存在");
                }
            }
                if (filter.Filters != null && filter.Filters.Count > 0)
                {
                    filter.Filters.ForEach(filter => {
                        var exp1 = ParseCondition(filter);

                       
                        if (exp == null) {
                            exp = exp1;
                        } else { 
                            if (filter.Logic == DynamicFilterLogic.And)
                                exp = Expression.And(exp, exp1);
                            else
                                exp = Expression.Or(exp, exp1);

                        }
                    });
                }


                return exp;
            }
            var exp = ParseCondition(filter);

            Console.WriteLine(exp);
            return Expression.Lambda<Func<bool>>(exp);

            //  return () => false;

        }
    }
}
