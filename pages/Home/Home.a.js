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
navCameraPhoto: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CameraPhoto\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navMediaCapture: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"MediaCapture\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navConsole: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Console\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navDevice: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Device\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navDeviceMotion: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DeviceMotion\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navDeviceOrientation: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DeviceOrientation\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"10,20,10,20","styles":{"backgroundImage":"resources/images/qventasback.png"},"verticalAlign":"top"}, {}, {
Fila1: ["wm.Panel", {"height":"125px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelBattery: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture1: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/battery_full.png","styles":{},"width":"100%"}, {"onclick":"navBattery"}],
labelPrecios: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Battery","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navBattery"}]
}],
panelCamera: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/camera.png","styles":{},"width":"100%"}, {"onclick":"navCameraPhoto"}],
labelStock: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Camera","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navCameraPhoto"}]
}],
panelConsole: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture4: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/keyboard.png","styles":{},"width":"100%"}, {"onclick":"navConsole"}],
labelCtasCtes: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Console","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navConsole"}]
}]
}],
Fila2: ["wm.Panel", {"height":"125px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelContacts: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture5: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/address_book.png","styles":{},"width":"100%"}, {"onclick":"navContacts"}],
labelStock1: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Contacts","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navContacts"}]
}],
panelDevice: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture6: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/mobile.png","styles":{},"width":"100%"}, {"onclick":"navDevice"}],
labelPedidos1: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Device","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navDevice"}]
}],
panelDeviceMotion: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture7: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/design.png","styles":{},"width":"100%"}, {"onclick":"navDeviceMotion"}],
labelCtasCtes1: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Device Motion","height":"52px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navDeviceMotion"}]
}]
}],
Fila3: ["wm.Panel", {"height":"125px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelDeviceOrientation: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture8: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/compass.png","styles":{},"width":"100%"}, {"onclick":"navDeviceOrientation"}],
labelStock2: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Device Orientation","height":"48px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navDeviceOrientation"}]
}],
panelDialogs: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture9: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/windows.png","styles":{},"width":"100%"}, {"onclick":"navInformes"}],
labelPedidos2: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Dialogs","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navInformes"}]
}],
panelFile: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture10: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/archive.png","styles":{},"width":"100%"}, {"onclick":"navAgenda"}],
labelCtasCtes2: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"File","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navAgenda"}]
}]
}],
Fila4: ["wm.Panel", {"height":"125px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelFileTransfer: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture11: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/file_download.png","styles":{},"width":"100%"}, {"onclick":"navCalendario"}],
labelStock3: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"File Transfer","height":"48px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navCalendario"}]
}],
panelGeolocation: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture12: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/globe.png","styles":{},"width":"100%"}, {"onclick":"navInformes"}],
labelPedidos3: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Geolocation","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navInformes"}]
}],
panelGlobalization: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture13: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/gear.png","styles":{},"width":"100%"}, {"onclick":"navAgenda"}],
labelCtasCtes3: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Globalization","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navAgenda"}]
}]
}],
Fila5: ["wm.Panel", {"height":"125px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelInappBrowser: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture14: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/link.png","styles":{},"width":"100%"}, {"onclick":"navCalendario"}],
labelStock4: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Inapp Browser","height":"52px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navCalendario"}]
}],
panelMedia: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture15: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/micphone.png","styles":{},"width":"100%"}, {"onclick":"navInformes"}],
labelPedidos4: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Media","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navInformes"}]
}],
panelMediaCapture: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture3: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/video.png","styles":{},"width":"100%"}, {"onclick":"navMediaCapture"}],
labelPedidos: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Media Capture","height":"52px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navMediaCapture"}]
}]
}],
Fila6: ["wm.Panel", {"height":"125px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelNetworkInformation: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture16: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/warning_blue.png","styles":{},"width":"100%"}, {"onclick":"navAgenda"}],
labelCtasCtes4: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Network Information","height":"52px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {"onclick":"navAgenda"}]
}],
panelVibration: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
picture17: ["wm.Picture", {"aspect":"h","height":"60px","source":"resources/images/PrimoIcons/telephone_black.png","styles":{},"width":"100%"}, {"onclick":"navVibrate"}],
labelStock5: ["wm.Label", {"_classes":{"domNode":["botonesInicio"]},"align":"center","caption":"Vibration","height":"32px","padding":"4","styles":{},"width":"100%"}, {"onclick":"navVibrate"}]
}]
}]
}]
};

Home.prototype._cssText = '';
Home.prototype._htmlText = '';