using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AiliCould.Core.Helpers;
namespace AiliCould.Core.BPM.Helper
{

	 
	public enum ReferenceNoType { 
		/// <summary>
		/// 全局
		/// </summary>
		Global,
		/// <summary>
		/// 根據模板劃分
		/// </summary>
		ByTemplate
	}
	public class ReferenceNoSetting {

		public string Format { get; set; } = "{DateFormat}{No}";
		public string DateFormat { get; set; } = "YYYY";

		public int Length { get; set; } = 10;

		public ReferenceNoType Type  { get; set; }
	
	}

	 
    public  class ReferenceNoHelper
    {
		private static SeqGenerator globalSeq=new SeqGenerator();
		public static string GetNo(ReferenceNoSetting setting,  string group )
		{
			string ReferenceNo = string.Empty; 
			var dateFormat= DateTime.Now.ToString(setting.DateFormat);
			var seqNo = globalSeq.ActiveSeq;
			if(setting.Type== ReferenceNoType.Global)
			return $"{dateFormat}{group}{seqNo.ToString().PadLeft( setting.Length-dateFormat.Length-group.Length, '0')}"; 
			else if (setting.Type == ReferenceNoType.ByTemplate)
			{ }
			 
			//setting.Format.Replace("/{ }/", () => { });
			return $"{dateFormat}{group}{seqNo.ToString().PadLeft(setting.Length - dateFormat.Length - group.Length, '0')}";
		}

		  
	}
}
