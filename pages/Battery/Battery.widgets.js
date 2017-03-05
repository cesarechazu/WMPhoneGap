Battery.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
		batteryStatusNumber: ["wm.Number", {"border":"0","caption":"Battery Status","dataValue":undefined,"disabled":true,"displayValue":"","height":"42px","maximum":100,"minimum":0,"readonly":true,"width":"100%"}, {}],
		checIsPlug: ["wm.Checkbox", {"border":"0","caption":"Is Plugged?","checkedValue":false,"dataValue":false,"disabled":true,"displayValue":false,"height":"60px","mobileHeight":"60px","width":"100%"}, {}],
		getStatusButton: ["wm.Button", {"border":"1","caption":"Get Status","height":"40px","width":"100px"}, {"onclick":"getStatusButtonClick"}]
	}]
}