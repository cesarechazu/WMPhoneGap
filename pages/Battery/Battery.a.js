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

Battery.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
batteryStatusNumber: ["wm.Number", {"border":"0","caption":"Battery Status","dataValue":undefined,"disabled":true,"displayValue":"","height":"42px","maximum":100,"minimum":0,"readonly":true}, {}],
getStatusButton: ["wm.Button", {"border":"1","caption":"Get Status","height":"40px","width":"100px"}, {"onclick":"getStatusButtonClick"}]
}]
};

Battery.prototype._cssText = '';
Battery.prototype._htmlText = '';