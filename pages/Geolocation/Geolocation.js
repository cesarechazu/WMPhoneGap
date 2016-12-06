dojo.declare("Geolocation", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log("navigator.geolocation works well");
            
            var pos = '<iframe style="position:relative;z-index:999;" src="https://maps.google.com/maps?q=España 1000, Salta - 4400&t=&z=14&ie=UTF8&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a class="google-map-code" href="http://www.embed-google-map.com" id="get-map-data">embed-google-map.com</a><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></iframe>';
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
            
            var embedHtml  = '<iframe>width="310" height="360" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyB-Vx4g2maQTaK-srl_8KYzxl4MiTXW2cc&center=%latitude%,%longitude%&zoom=18&maptype=satellite</iframe>';
            embedHtml = embedHtml.replace("%latitude%", position.coords.latitude);
            embedHtml = embedHtml.replace("%longitude%", position.coords.longitude);
            form.htmlMap.setHtml(embedHtml);
            
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