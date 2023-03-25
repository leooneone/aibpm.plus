using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Domain.WorkflowTemplate;

public class FormItem { 
    public TypeCode TypeCode { get; set; } 

    public List<FormItem> Children { get; set; }
    public string Code { get; set; }    
}
