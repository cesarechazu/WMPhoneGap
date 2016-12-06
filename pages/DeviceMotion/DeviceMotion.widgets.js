DeviceMotion.widgets = {
	timerGetMotion: ["wm.Timer", {"autoStart":true,"delay":3000}, {"onTimerFire":"timerGetMotionTimerFire"}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Device Motion","height":"50px","padding":"4","styles":{},"width":"100%"}, {}],
		textInfo: ["wm.LargeTextArea", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","maxHeight":1000,"padding":"8","styles":{},"width":"100%"}, {}]
	}]
}