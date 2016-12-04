dojo.declare("CameraPhoto", wm.Page, {
	start: function() {
        
		
	},
	"preferredDevice": "phone",

	phoneGapCallPhotoError: function(inSender, inError) {
		app.alert(inError.toString());
	},
	
	_end: 0
});