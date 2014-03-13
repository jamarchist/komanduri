"use strict";

window.logMessages = [];

var MyApp = window.MyApp = {};

$(function () {
    try {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            navigationType: "navbar",
            navigation: [
                    {
                        title: "Home",
                        action: "#home",
                        icon: "home"
                    },
                    {
                        title: "My Library",
                        action: "#library",
                        icon: "favorites"
                    },
                    {
                        title: "Settings",
                        action: "#settings",
                        icon: "info"
                    }
                ]
        });

        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.router.register(":view", { view: "library" });
        MyApp.app.router.register(":view", { view: "settings" });
        MyApp.app.router.register(":view/:id", { view: "procedure", id: null });
    } catch (e) {
        window.logMessages.push(e);
    }


});
