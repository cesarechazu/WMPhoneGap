dojo.declare("CameraPhoto", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.camera);
}
app.cameraPicVar.setValue("dataValue",null);
},
"preferredDevice": "phone",
phoneGapCallPhotoError: function(inSender, inError) {
app.alert(inError.toString());
},
takePhotoPGButtonClick: function(inSender) {
this.pictureJSPanel.setShowing(false);
this.picturePGPanel.setShowing(true);
this.phoneGapCallPhoto.update();
},
takePhotoJSButtonClick: function(inSender) {
this.picturePGPanel.setShowing(false);
this.pictureJSPanel.setShowing(true);
navigator.camera.getPicture(onJSSuccess, onJSFail, {quality: 50,destinationType: Camera.DestinationType.FILE_URI});
function onJSSuccess(imageURI) {
app.toastSuccess("Taken", 2500);
app.cameraPicVar.setValue("dataValue",imageURI);
}
function onJSFail(message) {
alert('Failed because: ' + message);
}
},
_end: 0
});

CameraPhoto.widgets = {
phoneGapCallPhoto: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"capture_picture"}, {"onError":"phoneGapCallPhotoError","onSuccess":"phoneGapCallPhotoSuccess"}, {
input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"50","targetProperty":"quality"}, {}],
wire1: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
takePhotoPGButton: ["wm.Button", {"border":"1","caption":"Take photo with PhoneGapCall","height":"40px","width":"100%"}, {"onclick":"takePhotoPGButtonClick"}],
takePhotoJSButton: ["wm.Button", {"border":"1","caption":"Take photo with java script function","height":"40px","width":"100%"}, {"onclick":"takePhotoJSButtonClick"}],
picturesPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picturePGPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
picturePG: ["wm.Picture", {"aspect":"h","height":"100%","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallPhoto.dataValue","targetProperty":"source"}, {}]
}]
}],
pathPGText: ["wm.Text", {"border":"0","caption":"Path","captionSize":"40px","displayValue":"","height":"42px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"picturePG.source","targetProperty":"dataValue"}, {}]
}]
}]
}],
pictureJSPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
pictureJS: ["wm.Picture", {"height":"100%","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.cameraPicVar.dataValue","targetProperty":"source"}, {}]
}]
}],
pathJSText: ["wm.Text", {"border":"0","caption":"Path","captionSize":"40px","displayValue":"","height":"42px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pictureJS.source","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}]
};

CameraPhoto.prototype._cssText = '';
CameraPhoto.prototype._htmlText = '';