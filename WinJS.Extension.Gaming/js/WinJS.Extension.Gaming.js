/*!
  Library built by Pierre Lagarde & David Rousset from Microsoft France
  This library is supported for use in Windows Metro Style Apps only.
*/
/// <reference path="ms-appx://Microsoft.WinJS.1.0.RC/js/base.js" />
/// <reference path="ms-appx://Microsoft.WinJS.1.0.RC/js/ui.js" />

(function () {
    "use strict";

    // Exports
    WinJS.Namespace.define("WinJS.Extension.Gaming");

    // export this "enum"
    var SettingsType = Object.freeze({
        None: 0,
        Sounds: 1,
        Inputs: 2,
        About: 3
    });

    WinJS.Namespace.define("WinJS.Extension.Gaming", {
        SettingsType: SettingsType
    });

    function BindSettings(settingsArray) {
        var i;
        var commands = {};
        for (i = 0; i < settingsArray.length; i++) {
            var commandsDetails = {};
            commandsDetails.href = settingsArray[i]._href;
            commandsDetails.title = settingsArray[i]._title;
            commands[settingsArray[i]._targetedDiv] = commandsDetails;
        }
        WinJS.Application.onsettings = function (e) {
            e.detail.applicationcommands = commands;
            WinJS.UI.SettingsFlyout.populateSettings(e);
        }
    };

    WinJS.Namespace.define("WinJS.Extension.Gaming", {
        BindSettings: BindSettings
    });

    // constructor function
    function initSettings(type) {
        if (type) {
            this.type = type;
            switch (type) {
                case WinJS.Extension.Gaming.SettingsType.Sounds:
                    this._href = "/WinJS.Extension.Gaming/html/SoundsUI.html";
                    this._title = "Sounds & Music";
                    this._targetedDiv = "soundsDiv";
                    break;
                case WinJS.Extension.Gaming.SettingsType.Inputs:
                    this._href = "/WinJS.Extension.Gaming/html/InputsUI.html";
                    this._title = "Inputs";
                    this._targetedDiv = "inputsDiv";
                    break;
                case WinJS.Extension.Gaming.SettingsType.About:
                    this._href = "/WinJS.Extension.Gaming/html/AboutUI.html";
                    this._title = "About";
                    this._targetedDiv = "aboutDiv";
                    break;
            }
        }
    }

    var instanceMembers = {
        type: WinJS.Extension.Gaming.None,
        _href: "",
        _title: "",
        _targetedDiv: "",
    };

    var staticMembers = {
    };

    var Setting = WinJS.Class.define(initSettings, instanceMembers, staticMembers);

    // add to namespace
    WinJS.Namespace.define("WinJS.Extension.Gaming", {
        Setting: Setting
    });

})();