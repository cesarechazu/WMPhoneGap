DeviceMotion.widgets = {
	timerGetMotion: ["wm.Timer", {"autoStart":true,"delay":3000}, {"onTimerFire":"timerGetMotionTimerFire"}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		labelTitle: ["wm.Label", {"_classes":{"domNode":["labelTitle"]},"align":"center","caption":"Device Motion","height":"50px","padding":"4","styles":{},"width":"100%"}, {}],
		labelMotionInfo: ["wm.Label", {"caption":"","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}]
	}]
}