dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
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
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panelEncabezado: ["wm.Panel", {"_classes":{"domNode":["mainHeaderPanel"]},"height":"90px","horizontalAlign":"left","margin":"0,0,0,0","padding":"0,20,0,20","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
appNameLabel: ["wm.Label", {"_classes":{"domNode":["appNameLabel"]},"caption":"WaveMaker 6.7 PhoneGap","padding":"4","styles":{},"width":"100%"}, {"onclick":"navHome"}],
iconsNameLabel: ["wm.Label", {"_classes":{"domNode":["iconsNameLabel"]},"caption":"Primo Icons","padding":"4","styles":{},"width":"100%"}, {"onclick":"navHome"}],
devNameLabel: ["wm.Label", {"_classes":{"domNode":["iconsNameLabel"]},"caption":"Desarrollado por: César Echazú","padding":"4","styles":{},"width":"100%"}, {"onclick":"navHome"}]
}],
panelSeparador: ["wm.Panel", {"height":"8px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#505050"},"verticalAlign":"top","width":"100%"}, {}],
pageContainer: ["wm.PageContainer", {"deferLoad":true,"padding":"10","pageName":"Home","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';