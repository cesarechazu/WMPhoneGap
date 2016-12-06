dojo.declare("DeviceMotion", wm.Page, {
    start: function() {
        var form = this;
        
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.accelerometer);
                
            var info = "";

            function onSuccess(acceleration) {
                info = 'Acceleration X: ' + acceleration.x + '\n' + 'Acceleration Y: ' + acceleration.y + '\n' + 'Acceleration Z: ' + acceleration.z + '\n' + 'Timestamp: ' + acceleration.timestamp + '\n';
                form.labelMotionInfo.setCaption(info);
            }

            function onError() {
                info = "onError";
                form.labelMotionInfo.setCaption(info);
            }

            var options = {frequency: 3000}; // Update every 3 seconds
            var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    },
    "preferredDevice": "phone",

    
    _end: 0
});