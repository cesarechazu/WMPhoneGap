NFC.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		readButton: ["wm.Button", {"border":"1","caption":"Read","height":"55px"}, {"onclick":"readButtonClick"}],
		textResult: ["wm.LargeTextArea", {"border":"0","caption":"Read Result:","dataValue":undefined,"displayValue":"","height":"100px","mobileHeight":"100px"}, {}],
		writeButton: ["wm.Button", {"border":"1","caption":"Write","height":"55px"}, {"onclick":"writeButtonClick"}],
		textWrite: ["wm.LargeTextArea", {"border":"0","caption":"Write this:","dataValue":undefined,"displayValue":"","height":"100px","mobileHeight":"100px"}, {}],
		spacer1: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
		panelEstado: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			labelEstado: ["wm.Label", {"caption":"Estado:","height":"100%","padding":"4","width":"100%"}, {}]
		}]
	}]
}