using AI.AddIn;
using System.ComponentModel.Composition;
namespace AI.MyBPMBizDemo
{
    [Export(typeof(IMyBiz))]
    public class MyBPMBizDemo2: IMyBiz
    {
        public void Run() {
            var orgColor = Console.ForegroundColor;
            Console.ForegroundColor= ConsoleColor.Green;
            Console.Write("Hi,我是Leo的第二个任务,你找到我了！这看起来很复杂，其实一点也不简单。");
            Console.ForegroundColor = orgColor;
        }

    }
}