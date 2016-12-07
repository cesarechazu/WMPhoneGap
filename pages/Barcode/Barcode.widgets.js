Barcode.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Barcode Scanner","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
		buttonScann: ["wm.Button", {"border":"1","caption":"Scann","height":"40px","styles":{},"width":"80px"}, {"onclick":"buttonScannClick"}],
		textResult: ["wm.LargeTextArea", {"border":"0","caption":"Result","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"200px","mobileHeight":"200px"}, {}]
	}]
}