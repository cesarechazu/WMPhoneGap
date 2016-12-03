dojo.declare("Battery", wm.Page, {
    start: function() {
        var batteryLevel;
        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
            batteryLevel = status.level;
        }
    },
    "preferredDevice": "phone",

    
	getStatusButtonClick: function(inSender) {
		this.batteryStatusNumber.setDataValue(batteryLevel);
	},
	_end: 0
});