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