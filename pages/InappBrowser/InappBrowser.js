dojo.declare("InappBrowser", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log("window.open works well");
            var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
            window.open = cordova.InAppBrowser.open;
        }
    },
    "preferredDevice": "phone",

    _end: 0
});