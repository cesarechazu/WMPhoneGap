dojo.declare("NFC", wm.Page, {
    start: function() {
        var form = this;
        
        nfc.enabled(onSuccess, onFailure);
        
        function onSuccess() {
            form.labelEstado.setValue("dataValue", "Enabled");
        }
        
        function onFailure() {
            form.labelEstado.setValue("dataValue", "Failure");
        }
        
        
    },
    "preferredDevice": "phone",
    
    
	_end: 0
});