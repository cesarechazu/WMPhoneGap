dojo.declare("DeviceOrientation", wm.Page, {
    start: function() {
        var form = this;
        
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.compass);

            function onSuccess(heading) {
                form.numberOrientation.setDataValue(heading.magneticHeading);
            };

            function onError(compassError) {
                form.numberOrientation.setDataValue('Compass error: ' + compassError.code);
            };

            var options = {
                frequency: 1500
            }; 
            var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    },
    "preferredDevice": "phone",

    _end: 0
});