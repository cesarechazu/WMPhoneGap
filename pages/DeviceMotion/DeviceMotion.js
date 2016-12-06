dojo.declare("DeviceMotion", wm.Page, {
    start: function() {
        var form = this;
        
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.accelerometer);
                
            var info = "";

            function onSuccess(acceleration) {
                info =  'X: ' + acceleration.x + '\n' + 
                        'Y: ' + acceleration.y + '\n' + 
                        'Z: ' + acceleration.z + '\n' +  
                        'Timestamp: ' + acceleration.timestamp;
                form.textInfo.setDataValue(info);
            }

            function onError() {
                info = "onError";
                form.textInfo.setDataValue(info);
            }

            var options = {frequency: 3000}; // Update every 3 seconds
            var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    },
    "preferredDevice": "phone",

    
    _end: 0
});