dojo.declare("Barcode2", wm.Page, {
    start: function() {
        var form = this;
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log("plugins.barcodeScanner works well");
            }
        }
    },
    "preferredDevice": "phone",

    buttonScannClick: function(inSender) {
         scanner.startScanning(0,4,100,50);
    },
    _end: 0
});