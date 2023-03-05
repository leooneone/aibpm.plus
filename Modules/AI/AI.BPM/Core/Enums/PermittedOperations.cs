using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AI.BPM.Core.Enums
{
    /// <summary>
    /// 允许的操作
    /// </summary>
    public enum PermittedOperations
    {

        Forward,
        Consult,
        Backward,
        Choose,
        Jump,
        Rollback,
        ReturnToStart,
        Return,
        ReturnToAny,
        CancelIfUnfinished,
        CancelIfFinished,
        Retrieve,
        Cancel,
        Suspend,
        ViewInstanceState, AdjustParticipant, Circulate, Recirculate, ViewData, Assist
    }
}
