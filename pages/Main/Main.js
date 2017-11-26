dojo.declare("Main", wm.Page, {
    start: function() {
        var form = this;

        //change the color of the status bar
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            if (cordova.platformId == 'android') {
                StatusBar.backgroundColorByHexString("#0D47A1");
            }
        }

        //capture the event back button
        document.addEventListener("backbutton", onBackKeyDown, false);

        function onBackKeyDown() {
            alert("Controlled event. You pressed the back button.");
            form.back();
        }
    },
    "preferredDevice": "phone",

    back: function() {
        var l = this.newPage.data._list.length;
        if (l == 2) {
            this.pageContainer.setPageName("Inicio");
        } else {
            var pn = this.newPage.data._list[l - 2].data.dataValue;
            this.pageContainer.setPageName(pn);
        };

        this.newPage.removeItem(l - 1);
        this.newPage.removeItem(l - 2);
    },

    pageContainerPageChanged: function(inSender, inNewPage, inPreviousPage) {
        if (inNewPage.type == "Home") {
            this.pictureHome.setValue("showing", false);
        } else {
            this.pictureHome.setValue("showing", true);
        }
        
        this.newPage.addItem({
            "dataValue": inNewPage.type
        });
        
    },
    pictureHomeClick: function(inSender) {
		main.back();
	},
	_end: 0
});