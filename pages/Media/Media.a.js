dojo.declare("Media", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(Media);
}
},
"preferredDevice": "phone",
buttonStartRecordClick: function(inSender) {
this.buttonStartRecord.setValue("disabled", true);
var form = this;
function recordAudio() {
var src = "wmphonegap_recording.mp3";
var mediaRec = new Media(src,
function() {
form.buttonPlayRecord.setValue("disabled",true);
},
function(err) {
form.buttonPlayRecord.setValue("disabled",false);
});
// Record audio
mediaRec.startRecord();
// Stop recording after 10 seconds
setTimeout(function() {
mediaRec.stopRecord();
}, 10000);
}
},
buttonPlayRecordClick: function(inSender) {
var form = this;
function playAudio(url) {
var src = "wmphonegap_recording.mp3";
var my_media = new Media(src,
// success callback
function() {
form.buttonStartRecord.setValue("disabled", false);
},
// error callback
function(err) {
console.log("playAudio():Audio Error: " + err);
});
// Play audio
my_media.play();
}
},
_end: 0
});

Media.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
buttonStartRecord: ["wm.Button", {"border":"1","caption":"Start Record (10 secons)","height":"50px","mobileHeight":"50px","width":"180px"}, {"onclick":"buttonStartRecordClick"}],
buttonPlayRecord: ["wm.Button", {"border":"1","caption":"Play Record","disabled":true,"height":"50px","iconHeight":"24px","iconWidth":"24px","imageIndex":30,"imageList":"app.silkIconList","mobileHeight":"50px","width":"120px"}, {"onclick":"buttonPlayRecordClick"}]
}]
};

Media.prototype._cssText = '';
Media.prototype._htmlText = '';