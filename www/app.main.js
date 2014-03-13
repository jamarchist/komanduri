"use strict";

var MyApp = window.MyApp = {};

$(function () {
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

//    function addToLibrary(elem) {
//        alert('elem added to library');
//    }

    MyApp.app.router.register(":view", { view: "home" });
    MyApp.app.router.register(":view", { view: "library" });
    MyApp.app.router.register(":view", { view: "settings" });
    MyApp.app.router.register(":view/:id", { view: "procedure", id: null });

    console.log('app init complete');

    navigator.splashscreen.hide();
    
    console.log('splash screen hidden');

    MyApp.app.navigate();
});
