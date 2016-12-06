dojo.declare("DeviceMotion", wm.Page, {
start: function() {
var form = this;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.accelerometer);
var info = "";
function onSuccess(acceleration) {
info =  'X: ' + acceleration.x + '\n' +
'Y: ' + acceleration.y + '\n' +
'Z: ' + acceleration.z + '\n' +
'Timestamp: ' + acceleration.timestamp;
form.textInfo.setDataValue(info);
}
function onError() {
info = "onError";
form.textInfo.setDataValue(info);
}
var options = {frequency: 3000}; // Update every 3 seconds
var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
},
"preferredDevice": "phone",
_end: 0
});

DeviceMotion.widgets = {
timerGetMotion: ["wm.Timer", {"autoStart":true,"delay":3000}, {"onTimerFire":"timerGetMotionTimerFire"}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Device Motion","height":"50px","padding":"4","styles":{},"width":"100%"}, {}],
textInfo: ["wm.LargeTextArea", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","maxHeight":1000,"padding":"8","styles":{},"width":"100%"}, {}]
}]
};

DeviceMotion.prototype._cssText = '';
DeviceMotion.prototype._htmlText = '';