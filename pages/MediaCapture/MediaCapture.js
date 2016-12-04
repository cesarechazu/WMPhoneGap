dojo.declare("MediaCapture", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.device.capture);
        }
    },
    "preferredDevice": "phone",

    capturePictureButtonClick: function(inSender) {
        var captureSuccess = function(mediaFiles) {
            var paths;
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                paths = paths + "\n" + path;
            }
            app.stringAppVar.setValue("dataValue",paths);
        };

        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start image capture
        navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
    },
    _end: 0
});