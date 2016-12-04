dojo.declare("Home", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "phone",

	picture2Click: function(inSender) {
		this.navCamera.update();
	},
	_end: 0
});