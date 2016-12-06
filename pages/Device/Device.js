dojo.declare("Device", wm.Page, {
    start: function() {
        var form = this;
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(device.cordova);
            //set info
            form.labelCordovaVersion.setCaption("Cordova version: " + device.cordova);
            form.labelModel.setCaption("Model: " + device.model);
            form.labelPlatform.setCaption("Platform: " + device.platform);
            form.labelUuid.setCaption("UUID: " + device.uuid);
            form.labelVersion.setCaption("Version: " + device.version);
            form.labelManufacturer.setCaption("Manufacturer: " + device.manufacturer);
            form.labelIsVirtual.setCaption("Virtual?: " + device.isVirtual);
            form.labelSerial.setCaption("Serial: " + device.serial);
        }

    },
    "preferredDevice": "phone",

    _end: 0
});