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
            form.googleMap.setLatitude(position.coords.latitude);
            form.googleMap.setLongitude(position.coords.latitude);
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