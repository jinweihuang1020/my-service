using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace MyResume_Backend.Model
{
    public class WebSocketHandler
    {
        public List<WSUser> UserList = new List<WSUser>();
        private WebSocketServer server;
        internal event Action<string> AlertTrainEndEvent;
        private string localIP;

        public WebSocketHandler(string localIP = "localhost")
        {
            this.localIP = localIP;
            server = new WebSocketServer();
            server.AddWebSocketService<Echo>("/Test");
        }

        public void Start()
        {
            server.Start();
        }

        public void Stop()
        {
            server.Stop();
        }

        internal void AlertTrainEnd(string sensorIP)
        {
            AlertTrainEndEvent?.Invoke(sensorIP);
        }
        public void SendConntInMsgTo(string senderid, string msg, string reciver_endpoint = "ALL")
        {
            dynamic msg_obj = new ExpandoObject();
            msg_obj.id = senderid;
            msg_obj.nickname = senderid + "_nickname";
            msg_obj.message = msg;
            msg_obj.IsfromOthers = true;
            msg_obj.time_stamp = DateTime.Now.Ticks+"";

            string msg_jsonStr = JsonConvert.SerializeObject(msg_obj);

            if (reciver_endpoint == "ALL")
            {
                foreach (var user in UserList)
                    if (user.ws.IsAlive && user.EndPointString != senderid)
                        user.ws.Send(msg_jsonStr);
            }
            else
            {
                try
                {
                    var aim_user = UserList.Find(user => user.EndPointString == reciver_endpoint);
                    aim_user.ws.Send(msg_jsonStr);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"send message to {reciver_endpoint} failure!"); //真可憐
                    Console.WriteLine(ex.Message);
                }

            }
        }

    }
    public class Echo : WebSocketBehavior
    {
        private string id;
        protected override void OnMessage(MessageEventArgs e)
        {
            Console.WriteLine($"{Context.UserEndPoint}{e.Data}");
            MessageObj revData = JsonConvert.DeserializeObject<MessageObj>(e.Data);
            if (revData == null)
            {
                Context.WebSocket.Send("FAIL");
                return;
            }
            Utility.WSHandler.SendConntInMsgTo(id, revData.message, revData.SendTo);
        }
        protected override void OnOpen()
        {
            Console.WriteLine(Context.UserEndPoint);
            Context.WebSocket.Send("OK");
            Model.Utility.WSHandler.UserList.Add(new WSUser
            {
                ws = Context.WebSocket,
                userEndPoint = Context.UserEndPoint
            });
            id = Context.UserEndPoint.ToString();
            Utility.WSHandler.SendConntInMsgTo(id,$"{Context.UserEndPoint} connect in ! welcome !", "ALL");
        }
    }

    public class MessageObj
    {
        public string SendTo { get; set; } = "ALL";
        public string message { get; set; } = "";
        public string id { get; set; } = "";
        public bool IsfromOthers { get; set; } = false;
        public string time_stamp { get; set; } = "";
    }

    public struct WSUser
    {
        public WebSocket ws;
        public IPEndPoint userEndPoint;
        public string EndPointString
        {
            get
            {
                return userEndPoint.ToString();
            }
        }
    }

}
