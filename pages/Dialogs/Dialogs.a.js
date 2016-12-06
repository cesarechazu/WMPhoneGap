dojo.declare("Dialogs", wm.Page, {
start: function() {
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
console.log(navigator.notification);
}
},
"preferredDevice": "phone",
buttonAlertClick: function(inSender) {
function alertDismissed() {
}
navigator.notification.alert('WaveMaker 6.7 and PhoneGap demo application', alertDismissed, 'Alert', 'Ok');
},
buttonConfirmClick: function(inSender) {
var form = this;
function onConfirm(buttonIndex) {
form.labelResult.setCaption('You selected button ' + buttonIndex);
}
navigator.notification.confirm('Select one choice!', onConfirm, 'Confirm', ['Restart', 'Exit']);
},
buttonPromptClick: function(inSender) {
var form = this;
function onPrompt(results) {
form.labelResult.setCaption("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}
navigator.notification.prompt('Please enter your name', // message
onPrompt, // callback to invoke
'Registration', // title
['Ok', 'Exit'], // buttonLabels
'Cesar Mauricio' // defaultText
);
},
buttonBeepClick: function(inSender) {
navigator.notification.beep(2);
},
_end: 0
});

Dialogs.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"caption":"Dialogs","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
buttonAlert: ["wm.Button", {"border":"1","caption":"Alert","height":"40px"}, {"onclick":"buttonAlertClick"}],
buttonConfirm: ["wm.Button", {"border":"1","caption":"Confirm","height":"40px"}, {"onclick":"buttonConfirmClick"}],
buttonPrompt: ["wm.Button", {"border":"1","caption":"Prompt","height":"40px"}, {"onclick":"buttonPromptClick"}],
buttonBeep: ["wm.Button", {"border":"1","caption":"Beep","height":"40px"}, {"onclick":"buttonBeepClick"}],
labelResult: ["wm.Label", {"caption":"","padding":"4","width":"100%"}, {}]
}]
};

Dialogs.prototype._cssText = '';
Dialogs.prototype._htmlText = '';