/*!
  Library built by Pierre Lagarde & David Rousset from Microsoft France
  This library is supported for use in Windows Metro Style Apps only.
*/
/// <reference path="ms-appx://Microsoft.WinJS.1.0.RC/js/base.js" />
/// <reference path="ms-appx://Microsoft.WinJS.1.0.RC/js/ui.js" />

(function () {
    "use strict";

   // constructor function
    function initHello(message) {
        if (message)
            this.message = message;
    };

    var instanceMembers = {
        message: "",
        hello: function () {
            console.log(this.message);
        }
    };

    var staticMembers = {
        // private member
    };

    var Hello = WinJS.Class.define(initHello, instanceMembers, staticMembers);

    // add to namespace
    WinJS.Namespace.define("WinJS.Extension.Core", {
        Hello: Hello
    });

})();