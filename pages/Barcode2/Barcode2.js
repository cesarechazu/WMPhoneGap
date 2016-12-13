dojo.declare("Barcode2", wm.Page, {
    start: function() {
        var form = this;
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log("plugins.barcodeScanner works well");
        }
    },
    "preferredDevice": "phone",

    buttonScannClick: function(inSender) {
        var form = this;
        cordova.plugins.barcodeScanner.scan(
        function(result) {
            form.textResult.setDataValue("We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
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
            // supported on Android only 
            "formats": "QR_CODE,DATA_MATRIX,UPC_E,UPC_A,EAN_8,EAN_13,CODE_128,CODE_39,CODE_93,CODABAR,ITF,RSS14,RSS_EXPANDED,PDF417,AZTEC"
        });

    },
    _end: 0
});