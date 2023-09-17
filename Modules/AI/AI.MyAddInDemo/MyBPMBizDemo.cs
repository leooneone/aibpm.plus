using AI.AddIn;
using System.ComponentModel.Composition;
namespace AI.MyBPMBizDemo
{
    [Export(typeof(IMyBiz))]
    public class MyBPMBizDemo: IMyBiz
    {
        public void Run() {
            var orgColor = Console.ForegroundColor;
            Console.ForegroundColor= ConsoleColor.Red;
            Console.Write("Hi,我是Leo,你找到我了！这看起来很复杂，其实一点也不简单。");
            Console.ForegroundColor = orgColor;
        }

    }
}