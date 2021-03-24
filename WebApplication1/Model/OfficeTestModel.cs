using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class OfficeTestModel
    {
        public static clsCheckState CheckState;
        public static string message;
        public static string HTMLRender
        {
            get
            {
                return "<div>" + message + "<button id='btn' onclick='btnPush()' >OK</button> <p id='msg'> mesg </p> </div> <script> function btnPush=(){ document.getElementById('msg').innerHTML='fuck' ;console.log('push!!')} </script>";
            }

        }

        public class clsCheckState
        {
            public bool ReplyFlag = false;
            public bool ActiveFlag = false;

            public bool IsOfficeProgramDead { get; private set; }

            public DateTime _LastAliveTime = DateTime.MinValue;
            public DateTime LastAliveTime
            {
                get { return _LastAliveTime; }
                set { timer.Restart(); _LastAliveTime = value; }
            }
            public DateTime LastCheckTime = DateTime.MinValue;

            private Stopwatch timer = new Stopwatch();
            public clsCheckState()
            {
                timer.Start();
                Task.Run(() => OfficeAliveJudge());
            }
            private void OfficeAliveJudge()
            {
                while (true)
                {
                    IsOfficeProgramDead = timer.ElapsedMilliseconds > 60000;
                    Thread.Sleep(1);
                }
            }
        }

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
