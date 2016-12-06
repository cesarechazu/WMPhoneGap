dojo.declare("Console", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log("console.log works well");
}
},
"preferredDevice": "phone",
buttonLogClick: function(inSender) {
console.log("log");
},
buttonErrorClick: function(inSender) {
console.log("error");
},
buttonExceptionClick: function(inSender) {
console.log("exception");
},
buttonWarnClick: function(inSender) {
console.log("warn");
},
buttonInfoClick: function(inSender) {
console.log("info");
},
_end: 0
});

Console.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
buttonLog: ["wm.Button", {"border":"1","caption":"log","height":"40px","width":"80px"}, {"onclick":"buttonLogClick"}],
buttonError: ["wm.Button", {"border":"1","caption":"error","height":"40px"}, {"onclick":"buttonErrorClick"}],
buttonException: ["wm.Button", {"border":"1","caption":"exception","height":"40px"}, {"onclick":"buttonExceptionClick"}],
buttonWarn: ["wm.Button", {"border":"1","caption":"warn","height":"40px"}, {"onclick":"buttonWarnClick"}],
buttonInfo: ["wm.Button", {"border":"1","caption":"Info","height":"40px"}, {"onclick":"buttonInfoClick"}]
}]
};

Console.prototype._cssText = '';
Console.prototype._htmlText = '';