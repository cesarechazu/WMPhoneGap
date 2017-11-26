dojo.declare("Barcode", wm.Page, {
start: function() {
var form = this;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log("plugins.barcodeScanner works well");
}
},
"preferredDevice": "phone",
buttonScannGeneralClick: function(inSender) {
var form = this;
cordova.plugins.barcodeScanner.scan(
function(result) {
form.textResult.setCaption("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
}, function(error) {
alert("Scanning failed: " + error);
}, {
"preferFrontCamera": false,
// iOS and Android
"showFlipCameraButton": true,
// iOS and Android
"showTorchButton": true,
// iOS and Android
"disableAnimations": true,
// iOS
"prompt": "Place a barcode inside the scan area"
});
},
buttonScannPDF417Click: function(inSender) {
var form = this;
cordova.plugins.barcodeScanner.scan(
function(result) {
form.textResult.setCaption("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
}, function(error) {
alert("Scanning failed: " + error);
}, {
"preferFrontCamera": false,
// iOS and Android
"showFlipCameraButton": true,
// iOS and Android
"showTorchButton": true,
// iOS and Android
"disableAnimations": true,
// iOS
"prompt": "Place a barcode inside the scan area",
"formats" : "QR_CODE,PDF_417"
});
},
_end: 0
});

Barcode.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Barcode Scanner","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
buttonScannPanel: ["wm.Panel", {"desktopHeight":"47px","enableTouchHeight":true,"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"60px","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
buttonScannGeneral: ["wm.Button", {"border":"1","caption":"Scann general","height":"55px","styles":{},"width":"110px"}, {"onclick":"buttonScannGeneralClick"}],
buttonScannPDF417: ["wm.Button", {"border":"1","caption":"Scann PDF417","height":"55px","width":"110px"}, {"onclick":"buttonScannPDF417Click"}]
}],
labelResult: ["wm.Label", {"caption":"Result","height":"48px","padding":"4","width":"100%"}, {}],
textResult: ["wm.Label", {"caption":"","height":"100%","margin":"10","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}]
}]
};

Barcode.prototype._cssText = '';
Barcode.prototype._htmlText = '';