dojo.declare("MediaCapture", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.device.capture);
}
},
"preferredDevice": "phone",
capturePictureButtonClick: function(inSender) {
var captureSuccess = function(mediaFiles) {
var paths;
var i, path, len;
for (i = 0, len = mediaFiles.length; i < len; i += 1) {
path = mediaFiles[i].fullPath;
paths = paths + "\n" + path;
}
app.stringAppVar.setValue("dataValue",paths);
};
var captureError = function(error) {
navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};
// start image capture
navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
},
_end: 0
});

MediaCapture.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
capturePictureButton: ["wm.Button", {"border":"1","caption":"Capture 2 Pictures","height":"40px","width":"100%"}, {"onclick":"capturePictureButtonClick"}],
filesText: ["wm.LargeTextArea", {"border":"0","caption":"Files:","captionSize":"50px","displayValue":"","height":"100px","mobileHeight":"100px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.stringAppVar.dataValue","targetProperty":"dataValue"}, {}]
}]
}]
}]
};

MediaCapture.prototype._cssText = '';
MediaCapture.prototype._htmlText = '';