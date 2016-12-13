dojo.declare("Barcode2", wm.Page, {
start: function() {
var form = this;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log("plugins.barcodeScanner works well");
}
},
"preferredDevice": "phone",
buttonScannClick: function(inSender) {
cordova.plugins.barcodeScanner.scan(
function(result) {
alert("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
}, function(error) {
alert("Scanning failed: " + error);
}, {
"preferFrontCamera": true,
// iOS and Android
"showFlipCameraButton": true,
// iOS and Android
"showTorchButton": true,
// iOS and Android
"disableAnimations": true,
// iOS
"prompt": "Place a barcode inside the scan area",
// supported on Android only
"formats": "QR_CODE,PDF_417",
// default: all but PDF_417 and RSS_EXPANDED
"orientation": "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
});
},
_end: 0
});

Barcode2.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Barcode Scanner","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
buttonScann: ["wm.Button", {"border":"1","caption":"Scann","height":"40px","styles":{},"width":"80px"}, {"onclick":"buttonScannClick"}],
textResult: ["wm.LargeTextArea", {"border":"0","caption":"Result","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"345px","mobileHeight":"345px"}, {}]
}]
};

Barcode2.prototype._cssText = '';
Barcode2.prototype._htmlText = '';