dojo.declare("CameraPhoto", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.camera);
        }
    },
    "preferredDevice": "phone",

    phoneGapCallPhotoError: function(inSender, inError) {
        app.alert(inError.toString());
    },

    takePhotoJSButtonClick: function(inSender) {
        navigator.camera.getPicture(onJSSuccess, onJSFail, {quality: 50,destinationType: Camera.DestinationType.FILE_URI});

        function onJSSuccess(imageURI) {
            //var image = document.getElementById('myImage');
            //image.src = imageURI;
            app.toastInfo(imageURI, 2500);
            this.imageURILabel.setCaption(imageURI.toString());
            this.picture1.setSource(imageURI)
        }

        function onJSFail(message) {
            alert('Failed because: ' + message);
        }
    },
    _end: 0
});