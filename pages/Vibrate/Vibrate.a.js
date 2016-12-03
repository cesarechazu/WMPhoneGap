dojo.declare("Vibrate", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.vibrate);
}
},
"preferredDevice": "phone",
button1Click: function(inSender) {
navigator.vibrate(this.millisecondsNumber.getDataValue());
},
_end: 0
});

Vibrate.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
millisecondsNumber: ["wm.Number", {"border":"0","caption":"Milliseconds","dataValue":3000,"displayValue":"3.000","height":"42px","maximum":10000,"minimum":1000,"selectOnClick":true}, {}],
button1: ["wm.Button", {"border":"1","caption":"Vibrate","height":"40px","width":"80px"}, {"onclick":"button1Click"}]
}]
};

Vibrate.prototype._cssText = '';
Vibrate.prototype._htmlText = '';