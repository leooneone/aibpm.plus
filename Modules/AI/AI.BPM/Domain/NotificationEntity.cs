using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 
using FreeSql.DataAnnotations;
using ZhonTai.Admin.Core.Entities;
namespace AI.Core.Model.BPM
{
	public class Notification : NotificationEntity { }
	public enum NotificationState
	{
		Unspecified = -1,
		Unread,
		Read,
		MarkedAsDel
	}
	public enum NotifyType
	{
		Default,
		Email = 2,
		Sms,
		Phone,
		QQ,
		Wechat,
		DingDing,
		/// <summary>
		/// 企业微信
		/// </summary>
		WXWork,
		Telegram,
		Skype,
		CustomType1 = 20,
		CustomType2,
		CustomType3,
		CustomType4,
		CustomType5,
		Unspecified = -1
	}
	[Table(Name = "ai_notification")] 
	 [Index("idx_{tablename}_01", nameof(ReceiverID) + "," + nameof(State) + "," + nameof(Handled), true)]
	public class NotificationEntity : EntityTenant
	{ 
		public NotifyType Type { get; set; } 
		public long SenderID { get; set; }   
		public long ReceiverID { get; set; }  
		 
		public string ReceiverAddress { get; set; }  
		  
		public string WorkflowPackage { get; set; }  
		  
		public string WorkflowName { get; set; }  
	 
		public int WorkflowVersion { get; set; }  
		 
		public long InstanceId { get; set; }
		public string Role { get; set; }
		  
		public byte[] Content { get; set; }
		 
		public long WorkItem { get; set; }
		public DateTime SendTime { get; set; }
		 
		public NotificationState State { get; set; }
		public bool Handled { get; set; }
		public int RetriedTimes { get; set; } 
		public long ExternalFlag { get; set; }
		 
		/*public string GetAddress(OUEntity Organization, NotifyType Type)
		{
			string result;
			if (this.ReceiverAddress != null && this.ReceiverAddress != "")
			{
				result = this.ReceiverAddress;
			}
			else
			{
				var unit = Organization;// Organization.GetUnit(this.ReceiverID);
				 
				{
					EmployeeEntity user =  unit;
					switch (Type)
					{
						case NotifyType.Email:
							if (user.Email != null && user.Email != "")
							{
								result = user.Email;
							}
							else
							{
								result = user.Email2;
							}
							break;
						case NotifyType.Sms:
							result = user.Mobile;
							break;
						case NotifyType.Phone:
							result = user.OfficePhone;
							break;
						case NotifyType.QQ:
							result = user.QQ;
							break;
						case NotifyType.Telegram:
							result = user.RTX;
							break;
						case NotifyType.Skype:
							result = user.Skype;
							break;
						case NotifyType.WXWork:
							result = user.MSN;
							break;
						default:
							result = null;
							break;
					}
				}
			}
			return result;
		}*/
	}
}
