dojo.declare("Device", wm.Page, {
    start: function() {
        var form = this;
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(device.cordova);
            //set info
            form.labelCordovaVersion.setCaption(device.cordova);
            form.labelModel.setCaption(device.model);
            form.labelPlatform.setCaption(device.platform);
            form.labelUuid.setCaption(device.uuid);
            form.labelVersion.setCaption(device.version);
            form.labelManufacturer.setCaption(device.manufacturer);
            form.labelIsVirtual.setCaption(device.isVirtual);
            form.labelSerial.setCaption(device.serial);
        }

    },
    "preferredDevice": "phone",

    _end: 0
});