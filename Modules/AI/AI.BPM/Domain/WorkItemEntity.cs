using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FreeSql.DataAnnotations; 
using System.ComponentModel.DataAnnotations;
using ZhonTai.Admin.Domain.Org;
using ZhonTai.Admin.Domain.User;
using AI.BPM.Domain.Activity;
using ZhonTai.Admin.Core.Entities;
using AI.BPM.Domain.WorkflowTemplate;
using System.ComponentModel;
using AI.BPM.Core.Enums;

namespace AI.Core.Model.BPM
{
	 
	[Table(Name = "ai_workitem")]
	//[Index("idx_{tablename}_01", nameof(Name) + "," + nameof(TenantId), true)]
	public  class WorkItemEntity:EntityTenant
    {
        public string Name { get; set; }
        public string Title { get; set; }

        public ActivityType Type { get; set; }


        /// <summary>
		/// 用于判断是否多个工作项为同一个节点
		/// </summary>
        public long GroupId { get; set; }
        /// <summary>
        /// 流程實例參考號 用於檢索
        /// </summary>
        //public string ReferenceNo { get; set; }

        public long InstanceId { get; set; } 
		public InstanceEntity Instance{ get; set; }


        public long WorkflowTemplateId { get; set; }
        public WorkflowTemplateEntity WorkflowTemplate { get; set; }
        /*public long OUId { get; set; }
		public OrgEntity OU { get; set; }*/  
		public EntryPoint FinishEntryPoint { get; set; }      
		  
		   
		public string ActivityName { get; set; }

        public string ActivityId { get; set; }
		/// <summary>
		/// 前一个节点的活动Id
		/// </summary>
        public string PreviousActivityId { get; set; }

        public ActivityState State { get; set; }

		/// <summary>
		/// 同一個活動中工作項排序
		/// </summary>
		public int index { get; set; }
		/// <summary>
		/// 同一個活動中工作項總數
		/// </summary>
		public int Total { get; set; }
		[Column(DbType = "text")]
		public string Comment { get; set; }


        public ApprovalResult ApprovalResult { get; set; } = ApprovalResult.NA;
		/// <summary>
		/// 如果后续是网关那么记录后续网关workItemId
		/// </summary>
       // public long GatewayId { get; set; }
		 
	//	public WorkItemEntity NextWorkItem { get; set; } 

        //public DateTime ReceiveTime { get; set; }
        public DateTime StartTime { get; set; }
		public DateTime FinishTime { get; set; }
		/// <summary>
		/// 系統計算出來的受理人
		/// </summary>
		public long ParticipantId { get; set; }

		public UserEntity Participant { get; set; }
		/// <summary>
		/// 實際執行人
		/// </summary>
		public long ExecutorId { get; set; }
		public UserEntity Executor { get; set; }
		
		public bool Locked { get; set; }      
		public long ReplyID { get; set; }    
		public bool NotifyFinish { get; set; } 
		public long LongWaitTime { get; set; }
		public TimeSpan WaitTime
		{
			get
			{
				return new TimeSpan(this.LongWaitTime);
			}
		}  
		public DateTime CancelTime { get; set; }    
		public long LongUsedTime { get; set; }
		 
		public TimeSpan StayTimeSpan
		{
			get
			{
				TimeSpan result;
				if (this.State != ActivityState.Finished)
				{
					result = DateTime.Now.Subtract(this.StartTime);
				}
				else
				{
					result = this.FinishTime.Subtract(this.StartTime);
				}
				return result;
			}
		}  
		public bool Urged { get; set; }   
		 

	}
}
