dojo.declare("Barcode", wm.Page, {
    start: function() {
        var form = this;
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log("plugins.barcodeScanner works well");
        }
    },
    "preferredDevice": "phone",

    buttonScannGeneralClick: function(inSender) {
		var form = this;
        cordova.plugins.barcodeScanner.scan(
        function(result) {
            form.textResult.setCaption("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
        }, function(error) {
            alert("Scanning failed: " + error);
        }, {
            "preferFrontCamera": false,
            // iOS and Android 
            "showFlipCameraButton": true,
            // iOS and Android 
            "showTorchButton": true,
            // iOS and Android 
            "disableAnimations": true,
            // iOS 
            "prompt": "Place a barcode inside the scan area"
        });

	},
	buttonScannPDF417Click: function(inSender) {
		var form = this;
        cordova.plugins.barcodeScanner.scan(
        function(result) {
            form.textResult.setCaption("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
        }, function(error) {
            alert("Scanning failed: " + error);
        }, {
            "preferFrontCamera": false,
            // iOS and Android 
            "showFlipCameraButton": true,
            // iOS and Android 
            "showTorchButton": true,
            // iOS and Android 
            "disableAnimations": true,
            // iOS 
            "prompt": "Place a barcode inside the scan area",
            "formats" : "QR_CODE,PDF_417"
        });
	},
	_end: 0
});