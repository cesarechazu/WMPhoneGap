dojo.declare("Console", wm.Page, {
    start: function() {
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log("console.log works well");
        }
    },
    "preferredDevice": "phone",

    buttonLogClick: function(inSender) {
		console.log("log");
	},
	buttonErrorClick: function(inSender) {
		console.log("error");
	},
	buttonExceptionClick: function(inSender) {
		console.log("exception");
	},
	buttonWarnClick: function(inSender) {
		console.log("warn");
	},
	buttonInfoClick: function(inSender) {
	    console.log("info");	
	},
	_end: 0
});