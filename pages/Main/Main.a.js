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

Main.widgets = {
navHome: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Home\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer","targetProperty":"pageContainer"}, {}]
}]
}]
}],
newPage: ["wm.Variable", {"isList":true,"type":"StringData"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panelEncabezado: ["wm.Panel", {"_classes":{"domNode":["mainHeaderPanel"]},"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"10,10,10,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
appNameLabelPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
appNameLabel: ["wm.Label", {"_classes":{"domNode":["appNameLabel"]},"caption":"WaveMaker 6.7 PhoneGap","padding":"4","styles":{},"width":"100%"}, {}],
iconsNameLabel: ["wm.Label", {"_classes":{"domNode":["iconsNameLabel"]},"caption":"Primo Icons","padding":"4","styles":{},"width":"100%"}, {}],
devNameLabel: ["wm.Label", {"_classes":{"domNode":["iconsNameLabel"]},"caption":"Desarrollado por: César Echazú","padding":"4","styles":{},"width":"100%"}, {}]
}],
pictureHome: ["wm.Picture", {"aspect":"v","height":"100%","source":"resources/images/PrimoIcons/home.png","styles":{},"width":"50px"}, {"onclick":"navHome"}]
}],
panelSeparador: ["wm.Panel", {"height":"8px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#505050"},"verticalAlign":"top","width":"100%"}, {}],
pageContainer: ["wm.PageContainer", {"deferLoad":true,"padding":"10","pageName":"Home","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"pageContainerPageChanged"}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';