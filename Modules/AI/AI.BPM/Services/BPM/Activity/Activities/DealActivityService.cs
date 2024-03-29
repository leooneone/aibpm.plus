﻿using AI.BPM.Core.Enums;
using AI.BPM.Domain.Activity;
using AI.BPM.Domain.WorkflowTemplate;
using AI.BPM.Services.Instance.Input;
using AI.BPM.Services.X.Dto;
using AI.Core.Model.BPM;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZhonTai.Admin.Core.Attributes;
using ZhonTai.Admin.Core.Dto;
using ZhonTai.Admin.Core.Exceptions;
using AI.BPM.Services.Activity;
using AI.BPM.Services.Instance.Dto;
using AI.BPM.Services.Instance;
using AI.BPM.Services.WorkflowTemplate;
using AI.BPM.Services.WorkItem;
using AI.Core.Repository.BPM;
using System.Collections.Concurrent;
using ZhonTai.Admin.Domain.Role;
using ZhonTai.Admin.Services;
using System.Diagnostics;

namespace AI.BPM.Services.BPM.Activity.Activities
{
    /// <summary>
    /// 除了没有审批意见外，其他和审批功能基本一致
    /// </summary>
    public class DealActivityService : ApproveActivityService
    {
         
    }
}
