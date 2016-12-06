dojo.declare("DeviceMotion", wm.Page, {
start: function() {
var form = this;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.accelerometer);
var info = "";
function onSuccess(acceleration) {
info = 'Acceleration X: ' + acceleration.x + '\n' + 'Acceleration Y: ' + acceleration.y + '\n' + 'Acceleration Z: ' + acceleration.z + '\n' + 'Timestamp: ' + acceleration.timestamp + '\n';
form.labelMotionInfo.setCaption(info);
}
function onError() {
info = "onError";
form.labelMotionInfo.setCaption(info);
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
labelMotionInfo: ["wm.Label", {"caption":"","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}]
}]
};

DeviceMotion.prototype._cssText = '';
DeviceMotion.prototype._htmlText = '';