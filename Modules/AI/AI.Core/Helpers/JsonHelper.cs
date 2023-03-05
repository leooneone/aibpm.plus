using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
namespace AiliCloud.Helpers
{
    public class JsonHelper
    {
        static JsonSerializerSettings setting = new JsonSerializerSettings
        {
            DateFormatString = "yyyy-MM-dd HH:mm:ss",
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };

        public static string Serialize(object obj)
        {

            return  JsonConvert.SerializeObject(obj, setting);


        }

        public static T Deserialize<T>(string json)
        {
            {
                return  JsonConvert.DeserializeObject<T>(json);
            }


        }
    }
}
