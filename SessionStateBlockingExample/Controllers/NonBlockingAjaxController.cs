using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SessionStateBlockingExample.Controllers
{
    [SessionState(System.Web.SessionState.SessionStateBehavior.ReadOnly)]
    public class NonBlockingAjaxController : Controller
    {
        public JsonResult Call4()
        {
            System.Threading.Thread.Sleep(2500);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Call5()
        {
            System.Threading.Thread.Sleep(5000);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Call6()
        {
            System.Threading.Thread.Sleep(7500);

            return Json(true, JsonRequestBehavior.AllowGet);
        }
    }
}