using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class OfficeTestModel
    {
        public static KxTestSta CurrentKXTestDATA = new KxTestSta();

        public class KxTestSta
        {
            public string IP { get; set; } = "0.0.0.0";
            public bool ModuleConnected { get; set; } = false;
            public int DataLenSet { get; set; } = 512;
            public string MEASRangeSet { get; set; } = "8G";
            public int SendRequestNumber { get; set; } = -1;
            public int DeviceReplyOKNumber { get; set; } = -1;
            public int ErrorCode { get; set; } = -1;
            public int MeasureTime { get; set; } = -1;
            public double[] XAxisRawData { get; set; }
            public double[] YAxisRawData { get; set; }
            public double[] ZAxisRawData { get; set; }
        }
    }
}
