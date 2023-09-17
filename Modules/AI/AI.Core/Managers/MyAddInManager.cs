using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using System.ComponentModel.Composition;
using AI.AddIn;
using System.ComponentModel.Composition.Hosting;
using Microsoft.Extensions.Logging;
using System.Dynamic;

namespace AI.Core.Managers
{ 
    public class MyAddInManager
    {
        [ImportMany(typeof(IMyBiz))]
        public IEnumerable<IMyBiz> MyBizs { get; set; }

        private static ConcurrentDictionary<string, IMyBiz> dicBizs { get; set; } = new ConcurrentDictionary<string, IMyBiz>();
        private static MyAddInManager m_pSelf = null;
        public static MyAddInManager Instance
        {
            get
            {
                if (m_pSelf == null)
                {

                    m_pSelf = new MyAddInManager();


                    {
                        m_pSelf.LoadAllBizs();
                    }
                }
                return m_pSelf;

            }
        }
        /// <summary>
        /// 获取插件列表
        /// </summary>
        /// <returns></returns>
        public IList<string> GetBizList()
        {
            return dicBizs.Keys.ToList();
            
        }

        /// <summary>
        /// 获取业务模块插件
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public IMyBiz GetBiz(string name)
        { 
            if(dicBizs.ContainsKey(name))
                return dicBizs[name];
            return null;
        }
            void LoadAllBizs()
        {
            try
            {
                lock (m_pSelf)
                {
                    m_pSelf.Compose();
                    

                        foreach (var t in m_pSelf.MyBizs) //打印输出
                        {
                            var name =t.GetType().Name;
                            dicBizs.TryAdd(name, t);
                        } 
                   
                }
            }
            catch (Exception ex)
            {
                //调用失败
               
            }
        }
       /* public void Run()
        {
            Compose();
            while (true)
            {

                foreach (var t in MyBizs) //打印输出
                {
                    Console.WriteLine(t.Name);
                }
                Thread.Sleep(2000);
            }
        }*/
        private void Compose()
        {
            var catalog = new DirectoryCatalog("addins"); //fruits是一个目录名称，就是主程序所在目录(bin-Debug-fruits)文件夹(我们需要提前建立好)
            var container = new CompositionContainer(catalog);
            container.ComposeParts(m_pSelf);

        }
    }
}
