Dialogs.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"caption":"Dialogs","height":"48px","padding":"4","styles":{},"width":"100%"}, {}],
		buttonAlert: ["wm.Button", {"border":"1","caption":"Alert","height":"40px"}, {"onclick":"buttonAlertClick"}],
		buttonConfirm: ["wm.Button", {"border":"1","caption":"Confirm","height":"40px"}, {"onclick":"buttonConfirmClick"}],
		buttonPrompt: ["wm.Button", {"border":"1","caption":"Prompt","height":"40px"}, {"onclick":"buttonPromptClick"}],
		buttonBeep: ["wm.Button", {"border":"1","caption":"Beep","height":"40px"}, {"onclick":"buttonBeepClick"}],
		labelResult: ["wm.Label", {"caption":"","padding":"4","width":"100%"}, {}]
	}]
}