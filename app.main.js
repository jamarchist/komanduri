var MyApp = window.MyApp || {};

alert('first line');

$(function () {
    try {
        document.addEventListener("deviceready", function () { navigator.splashscreen.hide(); alert('splash screen hidden'); });

        alert('setting up MyApp');

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

        alert('navigating...');
        MyApp.app.navigate();
        alert('navigated');
    } catch (e) {
        alert(e);
    }
});