Geolocation.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
		buttonGetPosition: ["wm.Button", {"border":"1","caption":"Get GPS position","height":"55px","width":"140px"}, {"onclick":"buttonGetPositionClick"}],
		labelInfo: ["wm.Label", {"caption":"Position:","height":"100px","padding":"4","singleLine":false,"width":"100%"}, {}],
		iFrameMap: ["wm.IFrame", {"height":"100%","width":"100%"}, {}]
	}]
}