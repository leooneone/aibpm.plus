using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

 
    namespace AiliCould.Core.Helpers
    {
        /// <summary>
        /// 順序發生器
        /// </summary>
        public class SeqGenerator
        {
            private   uint _activeSeq = 0;

            private   Random rnd = new Random();

            private   object _syncActiveSeqObject = new object();

            
            public   uint ActiveSeq
            {
                get
                {
                    uint result;
                    lock (_syncActiveSeqObject)
                    {
                        if (_activeSeq + 1u >= uint.MaxValue)
                        {
                            _activeSeq = 0u;
                        }
                        result = _activeSeq++;
                    }
                    return result;
                }
                set
                {
                    lock (_syncActiveSeqObject)
                    {
                        _activeSeq = value;
                    }
                }
            }
             
            
        }
        public class UUIDHelper
        {
            private static SeqGenerator _seq = new SeqGenerator();

            private static Random rnd = new Random();

           
            /// <summary>
            /// 雪花算法 67年一轮回 改版 起始点是2020年1月1日 ，根據自己需要定制精度
            /// </summary>
            /// <param name="gateway"></param>
            /// <returns></returns>
            public static long GetSnowFlakeId(uint gateway = 0)
            {
                return GetId(gateway, 12, 22);
            }

            /// <summary>
            /// 
            /// </summary>
            /// <param name="gateway"></param>
            /// <param name="tickPos"></param>
            /// <param name="gatePos"></param>
            /// <param name=""></param>
            /// <returns></returns>
            public static long GetId(uint gateway = 0, int gatePos = 12, int tickPos = 22)
            {
                var baseTicks = 637134336000000000l;

                var dt = DateTime.Now;
                var ticks = (DateTime.Now.Ticks - baseTicks) / 10000;//暂时以毫秒为单位
                if (gateway == 0)
                    gateway = (uint)rnd.Next(1, 255);
                return ticks << tickPos | (long)gateway << gatePos | (long)(_seq.ActiveSeq & 2 << gatePos‬);
                /*   
                   return (long)(dt.Year - 2000) << 57 | (long)dt.Month << 53 | (long)dt.Day << 49 | (long)dt.Hour << 44 | 
                       (long)dt.Minute << 38 | (long)dt.Second << 32 | (long)gateway << 24 | (long)(ActiveSeq& 16777216);
       */

            }
            /// <summary>
            /// 每秒产生顺序ID
            /// </summary>
            /// <param name="gateway"></param>
            /// <returns></returns>
            public static long GetUUID(uint gateway = 0)
            {
                return GetId(gateway, 22, 32);
 

            }
        } 
    } 