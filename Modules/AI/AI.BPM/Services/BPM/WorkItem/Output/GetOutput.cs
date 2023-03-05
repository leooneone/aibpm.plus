using AI.BPM.Services.WorkItem.Input;

namespace AI.BPM.Services.WorkItem.Output
{
    public class WorkItemGetOutput : WorkItemUpdateInput
    {

         public long TemplateId { get; set; }
    }
}