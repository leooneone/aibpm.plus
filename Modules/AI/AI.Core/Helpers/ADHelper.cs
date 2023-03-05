using System;
using System.Collections.Generic;
using System.Configuration;
using System.DirectoryServices;
using System.Runtime.InteropServices;

namespace AI.Core.Helpers
{

	public enum UserServiceState { }

	public enum Gender { }
	public enum UserState { Inactive,Active}
	public enum UnitType { OrganizationUnit,User}
	public class User : Unit
	{  
		public DateTime EntryDate { get;set; }
		public DateTime DepartureDate { get; set; }
		public DateTime Birthday { get; set; }
		
		public string Phone { get; set; }

		public string Fax { get; set; }

		public bool IsSystemUser { get; set; }

		public string Email { get; set; }
		public string Mobile { get; set; }
		public string Code { get; set; }
		public string EmployeeNumber { get; set; }
		public UserState State { get; set; }	

		public string SecretaryId { get; set; }
		/// <summary>
		/// 虚拟用户关联用户
		/// </summary>
		public string RelationUserId { get; set; }
		public string IdNumber { get; set; }
		public string Appellation { get; set; }

		 public Gender Gender { get; set; }

		public bool IsVirtualUser { get; set; }

		public UserServiceState ServiceState { get; set; }

	}

	public class Unit {

		public DateTime ModifiedTime { get; set; }
		public bool IsRootUnit { get; set; }
		public string ParentId { get; set; }
		public string ObjectId { get; set; }
		public string Name { get; set; }

		public string ManagerId { get; set; }
		public string Description { get; set; }
	}

	public enum HandleResult {

		SYNCHRONING,
		SUCCESS,
		LOGIN_ACTIVE_DIRECTORY_FAILED,
		UNKNOWN_ERROR,
		ACTIVE_DIRECTORY_NOT_CONNECTED
	}
	public class OrganizationUnit : Unit
	{ 
		
	}
	public class LogWriter
	{
		
		public static void Write(string msg)
		{ 
		
			Console.WriteLine(msg);
		}
	}

	public class Organization {

		public static OrganizationUnit RootUnit { get; set; }
		public static User GetUserByCode(string id)
		{
			return null;
		}
		public static Unit GetUnit(string id)
		{
			return null;
		}
		public static List<Unit> GetAllUnits(UnitType type) {
			return null;
		}
		public static void UpdateUnit(string id, Unit unit)
		{ 
		
		}
		public static void RemoveUnit(string id, Unit unit)
		{

		}
		public static void AddUnit(string id, Unit unit)
		{

		}

	}
	public class ADAdapter
	{
		private Organization Organization = null;

		private  LogWriter LogWriter = null;

		private bool _Syncing = false;

		private bool _FirstUser = true;

		private string _ADUserName = null;

		private bool Syncing
		{
			get
			{
				return _Syncing;
			}
			set
			{
				_Syncing = value;
			}
		}

		public bool FirstUser
		{
			get
			{
				return _FirstUser;
			}
			set
			{
				_FirstUser = value;
			}
		}

		public string ADUserName
		{
			get;set;
			 
		}

		 

		public HandleResult Sync(string[] ADPathes, string ADUser, string ADPassword, DateTime LastSyncTime)
		{
			return SyncAD(ADPathes, ADUser, ADPassword, LastSyncTime);
		}

		public HandleResult Sync(string[] ADPathes, string ADUser, string ADPassword)
		{
			return Sync(ADPathes, ADUser, ADPassword, DateTime.MinValue);
		}

		private HandleResult SyncAD(string[] ADPathes, string ADUser, string ADPassword, DateTime LastSyncTime)
		{
			if (ADPathes == null || ADPathes.Length == 0)
			{
				throw new Exception("没有设置AD同步目录路径!");
			}
			if (Syncing)
			{
				return HandleResult.SYNCHRONING;
			}
			Syncing = true;
			bool flag = false;
			Unit unit = null;
			HandleResult result = HandleResult.SUCCESS;
			try
			{
				List<DirectoryEntry> rootEntries = GetRootEntries(ADPathes, ADUser, ADPassword);
				if (rootEntries.Count > 1)
				{
					flag = true;
				}
				List<string> list = new List<string>();
				List<Unit> allUnits = Organization.GetAllUnits(UnitType.OrganizationUnit);
				foreach (DirectoryEntry item in rootEntries)
				{
					if (flag)
					{
						unit = SyncOU(item, Organization.RootUnit, item, true);
					}
					else
					{
						unit = Organization.RootUnit;
						UpdateRootUnit(item, (OrganizationUnit)unit);
					}
					SyncDirectoryEntry(item, list, unit, item, LastSyncTime, flag);
					list.Add(item.Guid.ToString().ToLower());
				}
				List<Unit> allUnits2 = Organization.GetAllUnits(UnitType.User);
				ClearRemovedUnits(list, allUnits2);
				ClearRemovedUnits(list, allUnits);
			}
			catch (DirectoryServicesCOMException)
			{
				result = HandleResult.LOGIN_ACTIVE_DIRECTORY_FAILED;
			}
			catch (COMException)
			{
				result = HandleResult.ACTIVE_DIRECTORY_NOT_CONNECTED;
			}
			catch (Exception ex3)
			{
				LogWriter.Write(ex3.ToString());
				result = HandleResult.UNKNOWN_ERROR;
			}
			finally
			{
				Syncing = false;
			}
			return result;
		}

		private List<DirectoryEntry> GetRootEntries(string[] ADPathes, string ADUser, string ADPassword)
		{
			List<DirectoryEntry> list = new List<DirectoryEntry>();
			foreach (string text in ADPathes)
			{
				if (!string.IsNullOrEmpty(text))
				{
					DirectoryEntry item = new DirectoryEntry(text, ADUser, ADPassword, AuthenticationTypes.Secure);
					list.Add(item);
				}
			}
			return list;
		}

		private void SyncDirectoryEntry(DirectoryEntry RootEntry, List<string> EntryIds, Unit ParentUnit, DirectoryEntry CurrentEntry, DateTime LastSyncTime, bool IncludeDomain)
		{
			foreach (DirectoryEntry child in CurrentEntry.Children)
			{
				DateTime property = GetProperty(child, "whenChanged", DateTime.MaxValue);
				bool hasChanged = property > LastSyncTime;
				if (child.SchemaClassName.ToLower() == "organizationalunit")
				{
					LogWriter.Write("AD.Sync->" + child.Path);
					EntryIds.Add(child.Guid.ToString().ToLower());
					OrganizationUnit parentUnit = SyncOU(RootEntry, ParentUnit, child, hasChanged);
					SyncDirectoryEntry(RootEntry, EntryIds, parentUnit, child, LastSyncTime, IncludeDomain);
				}
				else if (child.SchemaClassName == "user")
				{
					EntryIds.Add(child.Guid.ToString().ToLower());
					SyncUserFromEntry(RootEntry, ParentUnit, child, IncludeDomain, hasChanged);
				}
			}
		}

		private void ClearRemovedUnits(List<string> EntryIds, List<Unit> Units)
		{
			foreach (Unit Unit in Units)
			{
				if (EntryIds.Contains(Unit.ObjectId) || (Unit is User && ((User)Unit).IsSystemUser) || (Unit is OrganizationUnit && ((OrganizationUnit)Unit).IsRootUnit))
				{
					continue;
				}
				if (Unit is User)
				{
					User user = Unit as User;
					if (user.IsVirtualUser && Organization.GetUnit(user.RelationUserId) != null)
					{
						continue;
					}
				}
				string format = "AD.RemoveUnit,Id={0}";
				LogWriter.Write(string.Format(format, Unit.ObjectId));
				Organization.RemoveUnit("18f923a7-5a5e-426d-94ae-a55ad1a4b239", Unit);
			}
		}

		private User SyncUserFromEntry(DirectoryEntry RootEntry, Unit ParentUnit, DirectoryEntry Entry, bool IncludeDomain, bool HasChanged)
		{
			string text = Entry.Guid.ToString().ToLower();
			User user = Organization.GetUnit(text) as User;
			if (user != null)
			{
				if (HasChanged)
				{
					try
					{
						SetUserPropertyFromEntry(RootEntry, user, Entry, IncludeDomain);
						user.ParentId = ParentUnit.ObjectId;
						Organization.UpdateUnit("18f923a7-5a5e-426d-94ae-a55ad1a4b239", user);
						LogWriter.Write("AD.Update.User->" + Entry.Path);
					}
					catch
					{
						LogWriter.Write("error.Update.User->" + Entry.Path);
					}
				}
			}
			else
			{
				User user2 = new User();
				user2.ObjectId = text;
				user2.ParentId = ParentUnit.ObjectId;
				user = user2;
				SetUserPropertyFromEntry(RootEntry, user, Entry, IncludeDomain);
				if (user.State == UserState.Inactive)
				{
					return null;
				}
				User userByCode = Organization.GetUserByCode(user.Code);
				if (userByCode != null && !userByCode.IsSystemUser)
				{
					string format = "AD.RemoveUnit,Id={0}";
					LogWriter.Write(string.Format(format, userByCode.ObjectId));
					Organization.RemoveUnit("18f923a7-5a5e-426d-94ae-a55ad1a4b239", userByCode);
				}
				Organization.AddUnit("18f923a7-5a5e-426d-94ae-a55ad1a4b239", user);
				LogWriter.Write("AD.Add.User->" + Entry.Path);
			}
			return user;
		}

		private void UpdateRootUnit(DirectoryEntry RootEntry, OrganizationUnit RootUnit)
		{
			OrganizationUnit rootUnit = Organization.RootUnit;
			SetOUPropertyFromEntry(RootEntry, rootUnit, RootEntry);
			Organization.UpdateUnit("18f923a7-5a5e-426d-94ae-a55ad1a4b239", rootUnit);
		}

		private OrganizationUnit SyncOU(DirectoryEntry RootEntry, Unit ParentUnit, DirectoryEntry Entry, bool HasChanged)
		{
			string text = Entry.Guid.ToString().ToLower();
			OrganizationUnit organizationUnit = Organization.GetUnit(text) as OrganizationUnit;
			if (organizationUnit != null)
			{
				if (HasChanged)
				{
					SetOUPropertyFromEntry(RootEntry, organizationUnit, Entry);
					organizationUnit.ParentId = ParentUnit.ObjectId;
					Organization.UpdateUnit("18f923a7-5a5e-426d-94ae-a55ad1a4b239", organizationUnit);
					LogWriter.Write("AD.Update.OrganizationUnit->" + Entry.Path);
				}
			}
			else
			{
				OrganizationUnit organizationUnit2 = new OrganizationUnit();
				organizationUnit2.ObjectId = text;
				organizationUnit2.ParentId = ParentUnit.ObjectId;
				organizationUnit2.ModifiedTime = DateTime.Now;
				organizationUnit = organizationUnit2;
				SetOUPropertyFromEntry(RootEntry, organizationUnit, Entry);
				Organization.AddUnit("18f923a7-5a5e-426d-94ae-a55ad1a4b239", organizationUnit);
				LogWriter.Write("AD.Add.OrganizationUnit->" + Entry.Path);
			}
			return organizationUnit;
		}

		private void SetOUPropertyFromEntry(DirectoryEntry RootEntry, OrganizationUnit OU, DirectoryEntry CurrentEntry)
		{
			OU.Name = string.Concat(CurrentEntry.Properties["ou"].Value, string.Empty);
			string text = string.Concat(CurrentEntry.Properties["description"].Value, string.Empty);
			if (text != string.Empty)
			{
				OU.Description = text;
			}
			string text2 = string.Concat(CurrentEntry.Properties["managedby"].Value, string.Empty);
			if (text2 == string.Empty)
			{
				OU.ManagerId = string.Empty;
			}
			else
			{
				OU.ManagerId = GetEntryManager(RootEntry, text2);
			}
		}

		private void SetUserPropertyFromEntry(DirectoryEntry RootEntry, User User, DirectoryEntry CurrentEntry, bool IncludeDomain)
		{
			User.Code = GetUserCode(CurrentEntry, IncludeDomain);
			if (CurrentEntry.Properties.Contains("mail"))
			{
				string text = string.Concat(CurrentEntry.Properties["mail"].Value, string.Empty);
				if (text != string.Empty)
				{
					User.Email = text;
				}
			}
			if (CurrentEntry.Properties.Contains("telephoneNumber"))
			{
				string text2 = string.Concat(CurrentEntry.Properties["telephoneNumber"].Value, string.Empty);
				if (text2 != string.Empty)
				{
					User.Phone = text2;
				}
			}
			if (CurrentEntry.Properties.Contains("mobile"))
			{
				string text3 = string.Concat(CurrentEntry.Properties["mobile"].Value, string.Empty);
				if (text3 != string.Empty)
				{
					User.Mobile = text3;
				}
			}
			if (CurrentEntry.Properties.Contains("facsimileTelephoneNumber"))
			{
				User.Fax = string.Concat(CurrentEntry.Properties["facsimileTelephoneNumber"].Value, string.Empty);
			}
			 
			if (CurrentEntry.Properties.Contains(ADUserName))
			{
				User.Name = string.Concat(CurrentEntry.Properties[ADUserName].Value, string.Empty);
			}
			if (CurrentEntry.Properties.Contains("userAccountControl"))
			{
				int property = GetProperty(CurrentEntry, "userAccountControl", 0);
				bool flag = (property & 2) > 0;
				User.State = ((!flag) ? UserState.Active : UserState.Inactive);
			}
			if (CurrentEntry.Properties.Contains("title"))
			{
				User.Appellation = (string)CurrentEntry.Properties["title"].Value;
			}
			if (CurrentEntry.Properties.Contains("managerId") && string.Concat(CurrentEntry.Properties["managerId"].Value, string.Empty) != string.Empty)
			{
				string managedBy = string.Concat(CurrentEntry.Properties["managerId"].Value, string.Empty);
				User.ManagerId = GetEntryManager(RootEntry, managedBy);
			}
			else if (CurrentEntry.Properties.Contains("manager") && string.Concat(CurrentEntry.Properties["manager"].Value, string.Empty) != string.Empty)
			{
				string managedBy = string.Concat(CurrentEntry.Properties["manager"].Value, string.Empty);
				User.ManagerId = GetEntryManager(RootEntry, managedBy);
			}
			if (CurrentEntry.Properties.Contains("serviceState") && string.Concat(CurrentEntry.Properties["serviceState"].Value, string.Empty) != string.Empty)
			{
				User.ServiceState = (UserServiceState)Enum.Parse(typeof(UserServiceState), CurrentEntry.Properties["serviceState"].Value.ToString());
			}
			if (CurrentEntry.Properties.Contains("employeeNumber") && string.Concat(CurrentEntry.Properties["employeeNumber"].Value, string.Empty) != string.Empty)
			{
				User.EmployeeNumber = string.Concat(CurrentEntry.Properties["employeeNumber"].Value, string.Empty);
			}
			 
			if (CurrentEntry.Properties.Contains("secretaryId") && string.Concat(CurrentEntry.Properties["secretaryId"].Value, string.Empty) != string.Empty)
			{
				User.SecretaryId = string.Concat(CurrentEntry.Properties["secretaryId"].Value, string.Empty);
			}
			if (CurrentEntry.Properties.Contains("entryDate") && string.Concat(CurrentEntry.Properties["entryDate"].Value, string.Empty) != string.Empty)
			{
				User.EntryDate = Convert.ToDateTime(string.Concat(CurrentEntry.Properties["entryDate"].Value, string.Empty));
			}
			if (CurrentEntry.Properties.Contains("departureDate") && string.Concat(CurrentEntry.Properties["departureDate"].Value, string.Empty) != string.Empty)
			{
				User.DepartureDate = Convert.ToDateTime(string.Concat(CurrentEntry.Properties["departureDate"].Value, string.Empty));
			}
			if (CurrentEntry.Properties.Contains("iDNumber") && string.Concat(CurrentEntry.Properties["iDNumber"].Value, string.Empty) != string.Empty)
			{
				User.IdNumber = string.Concat(CurrentEntry.Properties["iDNumber"].Value, string.Empty);
			}
			if (CurrentEntry.Properties.Contains("gender") && string.Concat(CurrentEntry.Properties["gender"].Value, string.Empty) != string.Empty)
			{
				User.Gender = (Gender)Enum.Parse(typeof(Gender), string.Concat(CurrentEntry.Properties["gender"].Value, string.Empty));
			}
			if (CurrentEntry.Properties.Contains("birthday") && string.Concat(CurrentEntry.Properties["birthday"].Value, string.Empty) != string.Empty)
			{
				User.Birthday = Convert.ToDateTime(string.Concat(CurrentEntry.Properties["birthday"].Value, string.Empty));
			}
			 
			if (!FirstUser)
			{
				return;
			}
			foreach (PropertyValueCollection property2 in CurrentEntry.Properties)
			{
				LogWriter.Write("AD User Key=" + property2.PropertyName + ",Value=" + CurrentEntry.Properties[property2.PropertyName].Value);
			}
			FirstUser = false;
		}

		private string GetUserCode(DirectoryEntry Entry, bool LoginNameIncludeDomain)
		{
			string text = null;
			if (LoginNameIncludeDomain)
			{
				string text2 = (string)Entry.Properties["distinguishedname"][0];
				int num = text2.IndexOf(",DC=");
				if (num != -1)
				{
					int num2 = text2.IndexOf(",DC=", num + 1);
					if (num2 == -1)
					{
						num2 = text2.Length;
					}
					text = text2.Substring(num + 4, num2 - num - 4);
				}
				if (!string.IsNullOrEmpty(text))
				{
					text += "\\";
				}
			}
			return text + (string)Entry.Properties["samaccountname"].Value;
		}
		/// <summary>
		/// 获取
		/// </summary>
		/// <param name="RootEntry"></param>
		/// <param name="ManagedBy"></param>
		/// <returns></returns>
		private string GetEntryManager(DirectoryEntry RootEntry, string ManagedBy)
		{
			DirectorySearcher directorySearcher = new DirectorySearcher();
			directorySearcher.SearchRoot = RootEntry;
			directorySearcher.Filter = "(&(objectclass=user)(distinguishedname=" + ManagedBy + "))";
			SearchResult searchResult = directorySearcher.FindOne();
			return (searchResult == null) ? string.Empty : searchResult.GetDirectoryEntry().Guid.ToString().ToLower();
		}

		private T GetProperty<T>(DirectoryEntry Entry, string PropertyName, T DefaultValue)
		{
			if (Entry == null || string.IsNullOrEmpty(PropertyName))
			{
				return DefaultValue;
			}
			PropertyValueCollection propertyValueCollection = Entry.Properties[PropertyName];
			if (propertyValueCollection == null || propertyValueCollection.Count == 0)
			{
				return DefaultValue;
			}
			object obj = propertyValueCollection[0];
			return (T)obj;
		}

		public static bool ADLogin(string ADServerPath, string Account, string Password, out string Message)
		{
			Message = string.Empty;
			if (string.IsNullOrEmpty(ADServerPath) || string.IsNullOrEmpty(Account) || string.IsNullOrEmpty(Password))
			{
				Message = "AD服务器连接信息设置不完整!";
				return false;
			}
			string[] array = ADServerPath.Split(new string[1] { ";" }, StringSplitOptions.RemoveEmptyEntries);
			string[] array2 = array;
			foreach (string text in array2)
			{
				try
				{
					DirectoryEntry directoryEntry = new DirectoryEntry(text, Account, Password);
					object nativeObject = directoryEntry.NativeObject;
				}
				catch (Exception ex)
				{
					Message = "连接错误->Server=" + text + ",Error=" + ex.ToString();
					return false;
				}
			}
			return true;
		}
	}
}
