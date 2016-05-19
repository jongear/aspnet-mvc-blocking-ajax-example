using System.Web.Mvc;

namespace SessionStateBlockingExample.Controllers
{
    public class BlockingAjaxController : Controller
    {
        public JsonResult Call1()
        {
            System.Threading.Thread.Sleep(2500);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Call2()
        {
            System.Threading.Thread.Sleep(5000);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Call3()
        {
            System.Threading.Thread.Sleep(7500);

            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}