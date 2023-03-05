using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Services.Organization.X.Output { 
    public class NodeOutput
    {
        public long NodeId { get; set; }
        public long ParentId { get; set; }
        public long Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; } = "ou";



    }
}
