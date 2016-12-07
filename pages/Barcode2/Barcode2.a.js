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
scanner.startScanning(0,4,100,50);
},
_end: 0
});

Barcode2.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Barcode Scanner (Manateeworks)","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
buttonScann: ["wm.Button", {"border":"1","caption":"Scann","height":"40px","styles":{},"width":"80px"}, {"onclick":"buttonScannClick"}],
textResult: ["wm.LargeTextArea", {"border":"0","caption":"Result","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"200px","mobileHeight":"200px"}, {}]
}]
};

Barcode2.prototype._cssText = '';
Barcode2.prototype._htmlText = '';