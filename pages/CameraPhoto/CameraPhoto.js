dojo.declare("CameraPhoto", wm.Page, {
    start: function() {
        var t = this;
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log(navigator.camera);
        }
    },
    "preferredDevice": "phone",
    
    setPhoto: function(inPath) {
        app.toastSuccess("File: " + inPath, 2500);
        this.picture1.setSource(inPath);
    },

    phoneGapCallPhotoError: function(inSender, inError) {
        app.alert(inError.toString());
    },

    takePhotoJSButtonClick: function(inSender) {
        navigator.camera.getPicture(onJSSuccess, onJSFail, {quality: 50,destinationType: Camera.DestinationType.FILE_URI});

        function onJSSuccess(imageURI) {
            //var image = document.getElementById('myImage');
            //image.src = imageURI;
            app.stringAppVar.setValue("dataValue",imageURI);
            t.setPhoto(imageURI);
        }

        function onJSFail(message) {
            alert('Failed because: ' + message);
        }
    },
    _end: 0
});