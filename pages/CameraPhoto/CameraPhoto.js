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
        navigator.camera.getPicture(onSuccess, onFail, {quality: 50,destinationType: Camera.DestinationType.FILE_URI});

        function onSuccess(imageURI) {
            //var image = document.getElementById('myImage');
            //image.src = imageURI;
            app.toastInfo("Photo taken", 2500);
            this.picture1.setValue("source",null);
            this.picture1.setValue("source",imageURI);
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    },
    _end: 0
});