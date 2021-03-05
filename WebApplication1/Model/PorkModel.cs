using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class PorkModel
    {
        public class SaleInfo
        {
            public string Date { get; set; }
            public int Number { get; set; }
            public double AveragePrice { get; set; }
        }

        public static SaleInfo LeastSaleInfo = new SaleInfo();

        public static int QueryNum = 0;
        public static async Task<string> GetPorkPriceToday()
        {
            Model.PorkModel.QueryNum += 1;
            using (var client = new HttpClient())
            {
                try
                {
                    var response = await client.GetAsync("https://agridata.coa.gov.tw/api/v1/PorkTransType/?MarketName=%E5%98%89%E7%BE%A9%E7%B8%A3");
                    bool isResponse = response.IsSuccessStatusCode;
                    if (isResponse)
                    {
                        return await response.Content.ReadAsStringAsync();
                    }
                    else
                        return "Fail";
                }
                catch (Exception ex)
                {
                    //EventLog(ex.Message);
                    Console.WriteLine(ex.Message);
                    return ex.Message;
                }
            }
        }

    }
}
