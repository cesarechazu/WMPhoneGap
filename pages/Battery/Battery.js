dojo.declare("Battery", wm.Page, {
    start: function() {
        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
            this.batteryStatusText.setDataValue(status.level);
        }
    },
    "preferredDevice": "phone",

    _end: 0
});