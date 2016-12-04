dojo.declare("CameraPhoto", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.camera);
}
},
"preferredDevice": "phone",
phoneGapCallPhotoError: function(inSender, inError) {
app.alert(inError.toString());
},
takePhotoJSButtonClick: function(inSender) {
navigator.camera.getPicture(onJSSuccess, onJSFail, {quality: 50,destinationType: Camera.DestinationType.FILE_URI});
function onJSSuccess(imageURI) {
//var image = document.getElementById('myImage');
//image.src = imageURI;
app.toastInfo(imageURI, 2500);
this.imageURILabel.setCaption(imageURI.toString());
this.picture1.setSource(imageURI)
}
function onJSFail(message) {
alert('Failed because: ' + message);
}
},
_end: 0
});

CameraPhoto.widgets = {
phoneGapCallPhoto: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"capture_picture"}, {"onError":"phoneGapCallPhotoError"}, {
input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"50","targetProperty":"quality"}, {}],
wire1: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
takePhotoPGButton: ["wm.Button", {"border":"1","caption":"Take photo with PhoneGapCall","height":"40px","width":"100%"}, {"onclick":"phoneGapCallPhoto"}],
takePhotoJSButton: ["wm.Button", {"border":"1","caption":"Take photo with java script function","height":"40px","width":"100%"}, {"onclick":"takePhotoJSButtonClick"}],
picture1: ["wm.Picture", {"aspect":"h","height":"100%","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallPhoto.dataValue","targetProperty":"source"}, {}]
}]
}],
imageURILabel: ["wm.Label", {"caption":"","padding":"4","width":"100%"}, {}]
}]
};

CameraPhoto.prototype._cssText = '';
CameraPhoto.prototype._htmlText = '';