dojo.declare("DeviceOrientation", wm.Page, {
start: function() {
var form = this;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.compass);
function onSuccess(heading) {
form.numberOrientation.setDataValue(heading.magneticHeading);
};
function onError(compassError) {
form.numberOrientation.setDataValue('Compass error: ' + compassError.code);
};
var options = {
frequency: 1500
};
var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
},
"preferredDevice": "phone",
_end: 0
});

DeviceOrientation.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"caption":"Device Orientation","height":"50px","padding":"4","styles":{},"width":"100%"}, {}],
labelInfo: ["wm.Label", {"caption":"The compass is a sensor that detects the direction or heading that the device is pointed, typically from the top of the device. It measures the heading in degrees from 0 to 359.99, where 0 is north.","height":"115px","padding":"4","singleLine":false,"width":"100%"}, {}],
numberOrientation: ["wm.Number", {"border":"0","caption":"Orientation:","dataValue":undefined,"displayValue":"","height":"42px","readonly":true}, {}]
}]
};

DeviceOrientation.prototype._cssText = '';
DeviceOrientation.prototype._htmlText = '';