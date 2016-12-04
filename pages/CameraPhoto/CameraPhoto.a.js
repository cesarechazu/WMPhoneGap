dojo.declare("CameraPhoto", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
_end: 0
});

CameraPhoto.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
takePhotoPGButton: ["wm.Button", {"border":"1","caption":"Take photo with PhoneGapCall","height":"40px","width":"100%"}, {}],
takePhotoJSButton: ["wm.Button", {"border":"1","caption":"Take photo with java script function","height":"40px","width":"100%"}, {}]
}]
};

CameraPhoto.prototype._cssText = '';
CameraPhoto.prototype._htmlText = '';