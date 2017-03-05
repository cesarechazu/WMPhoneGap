dojo.declare("Media", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            
        }
    },
    "preferredDevice": "phone",

    buttonStartRecordClick: function(inSender) {
        var form = this;
        form.buttonStartRecord.setValue("disabled", true);
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