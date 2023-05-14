/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.CodeDom.Compiler;
using System.IO;
using System.Reflection;
using System.Runtime.InteropServices;
using Microsoft.CSharp;
using System.Runtime.Serialization;
namespace AI.Core.Helpers
{
    /// <summary>
    /// 表示编译异常
    /// </summary>
    [Serializable]
    public sealed class CompileException : System.Exception
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public CompileException()
        {
        }

        /// <summary>
        /// 构造函数
        /// </summary>
        public CompileException(string code, CompilerResults compilerResult)
        {
            this.Code = code;
            this.CompilerResult = compilerResult;
        }

        /// <summary>
        /// 需要编译的代码
        /// </summary>
        public string Code { get; internal set; }

        /// <summary>
        /// 编译结果
        /// </summary>
        public CompilerResults CompilerResult { get; internal set; }

        /// <summary>
        /// 异常消息的描述信息
        /// </summary>
        public override string Message
        {
            get
            {
                return CompilerHelper.GetCompileErrorMessage(this.CompilerResult);
            }
        }


        /// <summary>
        /// 当在派生类中重写时，用于异常的信息设置
        /// </summary>
        /// <param name="info">它存有有关所引发异常的序列化的对象数据。</param>
        /// <param name="context">它包含有关源或目标的上下文信息。</param>
        public CompileException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            this.Code = info.GetString("Code");
            this.CompilerResult = (CompilerResults)info.GetValue("CompilerResult", typeof(CompilerResults));
        }


        /// <summary>
        /// 当在派生类中重写时，用于异常的信息设置
        /// </summary>
        /// <param name="info">它存有有关所引发异常的序列化的对象数据。</param>
        /// <param name="context">它包含有关源或目标的上下文信息。</param>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue("Code", this.Code);
            info.AddValue("CompilerResult", this.CompilerResult, typeof(CompilerResults));
        }
    }

    /// <summary>
    /// 编译辅助类
    /// </summary>
    public class CompilerHelper
        {
            /// <summary>
            /// 代码编译
            /// </summary>
            /// <param name="code"></param>
            /// <param name="outputName"></param>
            /// <param name="tempOutPath"></param>
            /// <param name="xmlDoc"></param>
            /// <returns></returns>
            public static Assembly CompileCode(string code, string outputName = null, string tempOutPath = null, string xmlDoc = null)
            {
                SaveLastTempCode(code, tempOutPath);

                // 准备编译器参数
                CompilerParameters cp = new CompilerParameters();
                cp.GenerateExecutable = false;
                if (!string.IsNullOrEmpty(xmlDoc))
                {
                    cp.CompilerOptions = $"/doc:{xmlDoc}";
                }
                if (outputName == null)
                    cp.GenerateInMemory = true;
                else
                    cp.OutputAssembly = outputName;

                // 添加编译必须的程序集引用
                Assembly[] assemblies = RunTimeEnvironment.GetLoadAssemblies();
                foreach (Assembly assembly in assemblies)
                {
                    if (assembly.IsDynamic)
                        continue;
                    cp.ReferencedAssemblies.Add(assembly.Location);
                }


                // 创建编译器实例并编译代码
                 csProvider = new CSharpCodeProvider();
                CompilerResults cr = csProvider.CompileAssemblyFromSource(cp, code);

                // 检查编译结果
                if (cr.Errors != null && cr.Errors.HasErrors)
                {
                    SaveLastCompileError(cr, tempOutPath);
                    throw new CompileException { Code = code, CompilerResult = cr };
                }

                // 获取编译结果，它是编译后的程序集
                return cr.CompiledAssembly;
            }

            /// <summary>
            /// 获取编译错误信息
            /// </summary>
            /// <param name="compilerResults"></param>
            /// <returns></returns>
            public static string GetCompileErrorMessage(CompilerResults compilerResults)
            {
                if (compilerResults.Errors == null || compilerResults.Errors.HasErrors == false)
                    return string.Empty;

                StringBuilder sb = new StringBuilder();

                foreach (CompilerError error in compilerResults.Errors)
                    sb.AppendLine(error.ErrorText);

                return sb.ToString();
            }


            internal static void SaveLastTempCode(string code, string tempOutPath)
            {
                if (string.IsNullOrEmpty(tempOutPath))
                    return;

                try
                {
                    string filePath = Path.Combine(tempOutPath, "__last_temp_code.cs");
                    RetryFile.WriteAllText(filePath, code);
                }
                catch
                {  *//* 输出最近一次运行时运行的代码，方便调试程序，忽略写文件出现的异常。 *//*
                }
            }


            internal static void SaveLastCompileError(CompilerResults cr, string tempOutPath)
            {
                if (string.IsNullOrEmpty(tempOutPath))
                    return;

                try
                {
                    string errorText = GetCompileErrorMessage(cr);
                    string filePath = Path.Combine(tempOutPath, "__last_CompilerError.txt");
                    RetryFile.WriteAllText(filePath, errorText);
                }
                catch
                {  *//* 输出最近一次运行时运行的异常，方便调试程序，忽略写文件出现的异常。 *//*
                }
            }
        } 
}
*/