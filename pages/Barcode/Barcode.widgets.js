Barcode.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Barcode Scanner","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
		buttonScannPanel: ["wm.Panel", {"desktopHeight":"47px","enableTouchHeight":true,"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"60px","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			buttonScannGeneral: ["wm.Button", {"border":"1","caption":"Scann general","height":"55px","styles":{},"width":"110px"}, {"onclick":"buttonScannGeneralClick"}],
			buttonScannPDF417: ["wm.Button", {"border":"1","caption":"Scann PDF417","height":"55px","width":"110px"}, {"onclick":"buttonScannPDF417Click"}]
		}],
		labelResult: ["wm.Label", {"caption":"Result","height":"48px","padding":"4","width":"100%"}, {}],
		textResult: ["wm.Label", {"caption":"","height":"100%","margin":"10","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}]
	}]
}