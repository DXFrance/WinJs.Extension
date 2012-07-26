(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            //var c = new WinJS.Extension.Core.Hello("Test");
            //c.hello();
            var n = new WinJS.Extension.Notifications.Toasts.Toast(WinJS.Extension.Notifications.Toasts.ToastType.toastText01);
            n.textBody = "Coucou";
            n.show();
        }
    });
})();
