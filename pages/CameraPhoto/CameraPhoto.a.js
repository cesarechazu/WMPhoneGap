dojo.declare("CameraPhoto", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
phoneGapCallPhotoError: function(inSender, inError) {
app.alert(inError.toString());
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
picture1: ["wm.Picture", {"height":"100%","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallPhoto.dataValue","targetProperty":"source"}, {}]
}]
}]
}]
};

CameraPhoto.prototype._cssText = '';
CameraPhoto.prototype._htmlText = '';