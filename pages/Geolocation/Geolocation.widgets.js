Geolocation.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
		buttonGetPosition: ["wm.Button", {"border":"1","caption":"Get GPS position","height":"40px","width":"140px"}, {"onclick":"buttonGetPositionClick"}],
		labelInfo: ["wm.Label", {"caption":"Position:","height":"100px","padding":"4","singleLine":false,"width":"100%"}, {}],
		htmlMap: ["wm.Html", {"height":"360px","html":"<iframe width=\"300\" height=\"350\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyB-Vx4g2maQTaK-srl_8KYzxl4MiTXW2cc&#10;    &amp;q=Space+Needle,Seattle+WA\" allowfullscreen=\"\">\n</iframe>","minDesktopHeight":15,"width":"310px"}, {}]
	}]
}