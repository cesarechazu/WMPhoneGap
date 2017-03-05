dojo.declare("InappBrowser", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log("window.open works well");
}
},
"preferredDevice": "phone",
buttonStartClick: function(inSender) {
var ref = cordova.InAppBrowser.open('https://www.youtube.com/', '_blank', 'location=yes');
window.open = cordova.InAppBrowser.open;
},
_end: 0
});

InappBrowser.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
buttonStart: ["wm.Button", {"border":"1","caption":"Start Browser","height":"50px","mobileHeight":"50px","width":"140px"}, {"onclick":"buttonStartClick"}]
}]
};

InappBrowser.prototype._cssText = '';
InappBrowser.prototype._htmlText = '';