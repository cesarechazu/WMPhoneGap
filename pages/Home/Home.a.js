dojo.declare("Home", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
_end: 0
});

Home.widgets = {
navVibrate: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Vibrate\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navBattery: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Battery\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navContacts: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Contacts\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navCamera: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"10,20,10,20","styles":{"backgroundImage":"resources/images/qventasback.png"},"verticalAlign":"top"}, {}, {
Fila1: ["wm.Panel", {"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"100px","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture1: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/battery_full.png","styles":{},"width":"100%"}, {"onclick":"navBattery"}],
labelPrecios: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Battery","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navBattery"}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/camera.png","styles":{},"width":"100%"}, {"onclick":"navCamera"}],
labelStock: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Camera","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navCamera"}]
}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture3: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/video.png","styles":{},"width":"100%"}, {"onclick":"navPedidos"}],
labelPedidos: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Media Capture","height":"52px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navPedidos"}]
}]
}],
Fila2: ["wm.Panel", {"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel8: ["wm.Panel", {"height":"100px","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture4: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/keyboard.png","styles":{},"width":"100%"}, {"onclick":"navCuentas"}],
labelCtasCtes: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Console","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navCuentas"}]
}],
panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture5: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/address_book.png","styles":{},"width":"100%"}, {"onclick":"navContacts"}],
labelStock1: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Contacts","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navContacts"}]
}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture6: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/mobile.png","styles":{},"width":"100%"}, {"onclick":"navRecibos"}],
labelPedidos1: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Device","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navRecibos"}]
}]
}],
Fila3: ["wm.Panel", {"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel11: ["wm.Panel", {"height":"100px","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture7: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/design.png","styles":{},"width":"100%"}, {"onclick":"navAgenda"}],
labelCtasCtes1: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Device Motion","height":"52px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navAgenda"}]
}],
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture8: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/compass.png","styles":{},"width":"100%"}, {"onclick":"navCalendario"}],
labelStock2: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Device Orientation","height":"48px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navCalendario"}]
}],
panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture9: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/windows.png","styles":{},"width":"100%"}, {"onclick":"navInformes"}],
labelPedidos2: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Dialogs","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navInformes"}]
}]
}],
Fila4: ["wm.Panel", {"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel14: ["wm.Panel", {"height":"100px","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture10: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/archive.png","styles":{},"width":"100%"}, {"onclick":"navAgenda"}],
labelCtasCtes2: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"File","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navAgenda"}]
}],
panel15: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture11: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/file_download.png","styles":{},"width":"100%"}, {"onclick":"navCalendario"}],
labelStock3: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"File Transfer","height":"48px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navCalendario"}]
}],
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture12: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/globe.png","styles":{},"width":"100%"}, {"onclick":"navInformes"}],
labelPedidos3: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Geolocation","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navInformes"}]
}]
}],
Fila5: ["wm.Panel", {"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel17: ["wm.Panel", {"height":"100px","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture13: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/gear.png","styles":{},"width":"100%"}, {"onclick":"navAgenda"}],
labelCtasCtes3: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Globalization","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navAgenda"}]
}],
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture14: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/link.png","styles":{},"width":"100%"}, {"onclick":"navCalendario"}],
labelStock4: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Inappbrowser","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navCalendario"}]
}],
panel19: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture15: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/micphone.png","styles":{},"width":"100%"}, {"onclick":"navInformes"}],
labelPedidos4: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Media","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navInformes"}]
}]
}],
Fila6: ["wm.Panel", {"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel20: ["wm.Panel", {"height":"100px","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture16: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/warning_blue.png","styles":{},"width":"100%"}, {"onclick":"navAgenda"}],
labelCtasCtes4: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Network Information","height":"52px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navAgenda"}]
}],
panel21: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture17: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/telephone_black.png","styles":{},"width":"100%"}, {"onclick":"navVibrate"}],
labelStock5: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Vibration","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navVibrate"}]
}],
panel22: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture18: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/PrimoIcons/button_blue_play.png","styles":{},"width":"100%"}, {"onclick":"navInformes"}],
labelPedidos5: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Media","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navInformes"}]
}]
}]
}]
};

Home.prototype._cssText = '';
Home.prototype._htmlText = '';