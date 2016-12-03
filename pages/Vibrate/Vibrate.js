dojo.declare("Vibrate", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.vibrate);
        }

    },
    "preferredDevice": "phone",

    button1Click: function(inSender) {
        navigator.vibrate(this.millisecondsNumber.getDataValue());
    },
    _end: 0
});