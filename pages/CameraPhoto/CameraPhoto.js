dojo.declare("CameraPhoto", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log(navigator.camera);
        }
        app.cameraPicVar.setValue("dataValue",null);
    },
    "preferredDevice": "phone",
    
    phoneGapCallPhotoError: function(inSender, inError) {
        app.alert(inError.toString());
    },
    
    takePhotoPGButtonClick: function(inSender) {
        this.phoneGapCallPhoto.update();
    	this.picture1.setSource(this.phoneGapCallPhoto.getValue("dataValue"));
	},

    takePhotoJSButtonClick: function(inSender) {
        navigator.camera.getPicture(onJSSuccess, onJSFail, {quality: 50,destinationType: Camera.DestinationType.FILE_URI});

        function onJSSuccess(imageURI) {
            //var image = document.getElementById('myImage');
            //image.src = imageURI;
            app.toastSuccess("Taken", 2500);
            app.cameraPicVar.setValue("dataValue",imageURI);
        }

        function onJSFail(message) {
            alert('Failed because: ' + message);
        }
    },
    
	_end: 0
});