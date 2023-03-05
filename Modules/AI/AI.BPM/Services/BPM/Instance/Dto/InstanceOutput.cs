using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Services.BPM.WorkflowItem.Dto;
using AI.BPM.Services.WorkflowTemplate.Output;
using System.Collections.Generic;
using System.Linq;

namespace AI.BPM.Services.Instance.Dto;

public class InstanceOutput  
{
     
    public string Form { get; set; }
    public string Model { get; set; }

    /// <summary>
    /// Activities?
    /// </summary>
    public  List<WorkItemOutput> Items { get; set; }

    public InstanceGetOutput Instance { get; set; }

   

    public WorkflowTemplateGetOutput Template { get; set; }


}