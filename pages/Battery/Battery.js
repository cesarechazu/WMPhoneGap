dojo.declare("Battery", wm.Page, {
    start: function() {
        var batteryLevel;
        var isPlug;
        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
            batteryLevel = status.level;
            isPlug = status.isPlugged;
        }
    },
    "preferredDevice": "phone",

    
	getStatusButtonClick: function(inSender) {
		this.batteryStatusNumber.setValue("dataValue", batteryLevel);
        this.checIsPlug.setValue("dataValue",isPlug);
	},
	_end: 0
});