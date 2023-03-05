using AI.BPM.Core.Enums;
using AI.BPM.Services.BPM.WorkflowItem.Dto;
using System.Collections.Generic;
using System.Linq;

namespace AI.BPM.Services.Instance.Dto;

public class WorkItemOutput
{

    public ActivityType Type { get; set; }      
    public string Comment { get; set; }
    public DateTime FinishTime { get; set; }
    public DateTime StartTime { get; set; }
    public ActivityState State { get; set; }
    public string Title { get; set; }
    public string ActivityName { get; set; }
    public string Name { get; set; }

    public long ParticipantId { get; set; }
    public string Participant { get; set; }
    public string Executor { get; set; }
    public string ApprovalResult { get; set; }


     


}