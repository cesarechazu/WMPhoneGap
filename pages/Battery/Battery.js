dojo.declare("Battery", wm.Page, {
    start: function() {
        var batteryLevel;
        var isPlug;
        var form = this;
        
        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            batteryLevel = status.level;
            isPlug = status.isPlugged;
            form.batteryStatusNumber.setValue("dataValue", batteryLevel);
            form.checIsPlug.setValue("dataValue", isPlug);
            console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
        }
    },
    "preferredDevice": "phone",


    getStatusButtonClick: function(inSender) {
        this.batteryStatusNumber.setValue("dataValue", batteryLevel);
        this.checIsPlug.setValue("dataValue", isPlug);
    },
    _end: 0
});