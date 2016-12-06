dojo.declare("Geolocation", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log("navigator.geolocation works well");
}
},
"preferredDevice": "phone",
buttonGetPositionClick: function(inSender) {
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var form = this;
var onSuccess = function(position) {
form.labelInfo.setCaption('Position: ' + 'Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n' + 'Altitude: ' + position.coords.altitude + '\n' + 'Accuracy: ' + position.coords.accuracy + '\n' + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' + 'Heading: ' + position.coords.heading + '\n' + 'Speed: ' + position.coords.speed + '\n' + 'Timestamp: ' + position.timestamp + '\n');
var mapSource  = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyB-Vx4g2maQTaK-srl_8KYzxl4MiTXW2cc&center=%latitude%,%longitude%&zoom=14';
mapSource = mapSource.replace("%latitude%", position.coords.latitude);
mapSource = mapSource.replace("%longitude%", position.coords.longitude);
form.iFrameMap.setSource(mapSource);
};
// onError Callback receives a PositionError object
//
function onError(error) {
alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}
navigator.geolocation.getCurrentPosition(onSuccess, onError);
},
_end: 0
});

Geolocation.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
buttonGetPosition: ["wm.Button", {"border":"1","caption":"Get GPS position","height":"40px","width":"140px"}, {"onclick":"buttonGetPositionClick"}],
labelInfo: ["wm.Label", {"caption":"Position:","height":"100px","padding":"4","singleLine":false,"width":"100%"}, {}],
iFrameMap: ["wm.IFrame", {"height":"100%","width":"100%"}, {}]
}]
};

Geolocation.prototype._cssText = '';
Geolocation.prototype._htmlText = '';