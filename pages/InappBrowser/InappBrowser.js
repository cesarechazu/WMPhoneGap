dojo.declare("InappBrowser", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log("window.open works well");

        }
    },
    "preferredDevice": "phone",

    buttonStartClick: function(inSender) {
        var ref = cordova.InAppBrowser.open('https://www.youtube.com/', '_blank', 'location=yes');
        window.open = cordova.InAppBrowser.open;
    },
    _end: 0
});