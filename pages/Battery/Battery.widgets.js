Battery.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
		batteryStatusNumber: ["wm.Number", {"border":"0","caption":"Battery Status","dataValue":undefined,"disabled":true,"displayValue":"","height":"42px","maximum":100,"minimum":0,"readonly":true}, {}],
		getStatusButton: ["wm.Button", {"border":"1","caption":"Get Status","height":"40px","width":"100px"}, {"onclick":"getStatusButtonClick"}]
	}]
}