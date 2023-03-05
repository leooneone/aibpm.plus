using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Extensions;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Specialized;
using System.Linq;
using ZhonTai.Common.Extensions;

namespace ZhonTai.Admin.Core.Filters;

/// <summary>
/// 枚举架构过滤器
/// </summary>
public class EnumSchemaFilter : ISchemaFilter
{
    public void Apply(OpenApiSchema schema, SchemaFilterContext context)
    {
        var type = context.Type;
        if (type.IsEnum)
        {
            var enumValueType = type.GetField("value__").FieldType;
            var items = Enum.GetValues(type).Cast<Enum>()
            .Where(m => !m.ToString().Equals("Null")).Select(x =>
            $"{x.ToDescription()}={Convert.ChangeType(x, enumValueType)}").ToList();

            if (items?.Count > 0)
            {
                //string description = string.Join(",", items);
                
                //导出枚举类型为静态数据字典
                var nameValueCollection = new OpenApiObject(); var valueNameCollection = new OpenApiObject();
                Enum.GetValues(type).Cast<Enum>()
            .Where(m => !m.ToString().Equals("Null")).ToList().ForEach(a => {
                nameValueCollection.Add(
                a.ToDescription(),new OpenApiString( a.ToInt().ToString()));
                valueNameCollection.Add(
                a.ToInt().ToString (), new OpenApiString(a.ToDescription()));
            });

                schema.Extensions.Add("nameValueCollection", nameValueCollection);
                schema.Extensions.Add("valueNameCollection", valueNameCollection);
              //  schema.Description = string.IsNullOrEmpty(schema.Description) ? description : $"{schema.Description}:{description}";
            }
        }
    }
}