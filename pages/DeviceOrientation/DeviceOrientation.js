dojo.declare("DeviceOrientation", wm.Page, {
    start: function() {
        var form = this;
        
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.compass);

            function onSuccess(heading) {
                form.textOrientation.setDataValue(heading.magneticHeading);
            };

            function onError(compassError) {
                form.textOrientation.setDataValue('Compass error: ' + compassError.code);
            };

            var options = {
                frequency: 3000
            }; 
            var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    },
    "preferredDevice": "phone",

    _end: 0
});