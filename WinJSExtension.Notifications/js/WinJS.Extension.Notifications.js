
/*!
  Library built by Pierre Lagarde & David Rousset from Microsoft France
  This library is supported for use in Windows Metro Style Apps only.
*/
/// <reference path="ms-appx://Microsoft.WinJS.1.0.RC/js/base.js" />
/// <reference path="ms-appx://Microsoft.WinJS.1.0.RC/js/ui.js" />

(function () {
    "use strict";

    // Exports
    WinJS.Namespace.define("WinJS.Extension.Notifications");
})();

(function(){
    "use strict";

    //Enum Toast
    var ToastType = Object.freeze({
        None:0,
        toastText01: 1,
        toastText02: 2,
        toastText03: 3,
        toastText04: 4
    });

    WinJS.Namespace.define("WinJS.Extension.Notifications.Toasts", {
        ToastType: ToastType
    });
})();

(function () {
    "use strict";
    // constructor function
    function initToast(type) {
        if (type) {
            this.type = type;
        }
    }

    var instanceMembers = {
        type: WinJS.Extension.Notifications.Toasts.ToastType.None,
        textHeading: "",
        textBody: "",
        textBody2:"",
        show: function () {
            var notificationManager = Windows.UI.Notifications.ToastNotificationManager;
            var content;
            if (this.type == WinJS.Extension.Notifications.Toasts.ToastType.toastText01) {
                content = WinJSExtension.Notifications.ToastContent.ToastContentFactory.createToastText01();
                content.textBodyWrap.text = this.textBody;
            } else if (this.type == WinJS.Extension.Notifications.Toasts.ToastType.toastText02) {
                content = WinJSExtention.Notifications.ToastContent.ToastContentFactory.createToastText02();
                content.textHeading.text = this.textHeading;
                content.textBodyWrap.text = this.textBody;
            } else if (this.type == WinJS.Extension.Notifications.Toasts.ToastType.toastText03) {
                content = WinJSExtention.Notifications.ToastContent.ToastContentFactory.createToastText03();
                content.textHeadingWrap.text = this.textHeading;
                content.textBody.text = this.textBody;
            } else if (this.type === WinJS.Extension.Notifications.Toasts.ToastType.toastText04) {
                content = WinJSExtention.Notifications.ToastContent.ToastContentFactory.createToastText04();
                content.textHeading.text = this.textHeading;
                content.textBody1.text = this.textBody;
                content.textBody2.text = this.textBody2;
            }
            // Create a toast, then create a ToastNotifier object
            // to send the toast.
            var toast = content.createNotification();

            Windows.UI.Notifications.ToastNotificationManager.createToastNotifier().show(toast);
        }
    };

    var staticMembers = {
        // private member
    };

    var Toast = WinJS.Class.define(initToast, instanceMembers, staticMembers);

    // add to namespace
    WinJS.Namespace.define("WinJS.Extension.Notifications.Toasts", {
        Toast: Toast
    });


})();