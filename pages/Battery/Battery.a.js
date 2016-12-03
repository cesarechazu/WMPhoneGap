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

Battery.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
batteryStatusText: ["wm.Text", {"border":"0","caption":"Battery Status","dataValue":undefined,"disabled":true,"displayValue":"","height":"42px","readonly":true}, {}]
}]
};

Battery.prototype._cssText = '';
Battery.prototype._htmlText = '';