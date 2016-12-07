dojo.declare("Barcode", wm.Page, {
    start: function() {
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
            form.textResult.setDataValue("Scanning failed: " + error);
        });
    },
    _end: 0
});