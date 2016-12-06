Geolocation.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		buttonGetPosition: ["wm.Button", {"border":"1","caption":"Get GPS position","height":"40px","width":"140px"}, {"onclick":"buttonGetPositionClick"}],
		labelInfo: ["wm.Label", {"caption":"Position:","height":"74px","padding":"4","singleLine":false,"width":"100%"}, {}],
		googleMap: ["wm.gadget.GoogleMap", {"minDesktopHeight":100}, {}]
	}]
}