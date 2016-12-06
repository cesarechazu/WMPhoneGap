dojo.declare("Device", wm.Page, {
start: function() {
var form = this;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(device.cordova);
//set info
form.labelCordovaVersion.setCaption("Cordova version: " + device.cordova);
form.labelModel.setCaption("Model: " + device.model);
form.labelPlatform.setCaption("Platform: " + device.platform);
form.labelUuid.setCaption("UUID: " + device.uuid);
form.labelVersion.setCaption("Version: " + device.version);
form.labelManufacturer.setCaption("Manufacturer: " + device.manufacturer);
form.labelIsVirtual.setCaption("Virtual?: " + device.isVirtual);
form.labelSerial.setCaption("Serial: " + device.serial);
}
},
"preferredDevice": "phone",
_end: 0
});

Device.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
labelCordovaVersion: ["wm.Label", {"caption":"Cordova version: [cordova]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}],
labelModel: ["wm.Label", {"caption":"Model: [model]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}],
labelPlatform: ["wm.Label", {"caption":"Platform: [platform]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}],
labelVersion: ["wm.Label", {"caption":"Version: [version]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}],
labelUuid: ["wm.Label", {"caption":"Uuid: [uuid]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}],
labelManufacturer: ["wm.Label", {"caption":"Manufacturer: [manufacturer]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}],
labelIsVirtual: ["wm.Label", {"caption":"Is Virtual: [isVirtual]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}],
labelSerial: ["wm.Label", {"caption":"Serial: [serial]","height":"34px","margin":"5","padding":"4","styles":{},"width":"100%"}, {}]
}]
};

Device.prototype._cssText = '';
Device.prototype._htmlText = '';