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

Battery.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
batteryStatusNumber: ["wm.Number", {"border":"0","caption":"Battery Status","dataValue":undefined,"disabled":true,"displayValue":"","height":"42px","maximum":100,"minimum":0,"readonly":true,"width":"100%"}, {}],
checIsPlug: ["wm.Checkbox", {"border":"0","caption":"Is Plugged?","checkedValue":false,"dataValue":false,"disabled":true,"displayValue":false,"height":"60px","mobileHeight":"60px","width":"100%"}, {}],
getStatusButton: ["wm.Button", {"border":"1","caption":"Get Status","height":"40px","width":"100px"}, {"onclick":"getStatusButtonClick"}]
}]
};

Battery.prototype._cssText = '';
Battery.prototype._htmlText = '';