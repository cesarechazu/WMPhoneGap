MediaCapture.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		capturePictureButton: ["wm.Button", {"border":"1","caption":"Capture 2 Pictures","height":"40px","width":"100%"}, {"onclick":"capturePictureButtonClick"}],
		filesText: ["wm.LargeTextArea", {"border":"0","caption":"Files:","captionSize":"50px","displayValue":"","height":"100px","mobileHeight":"100px","width":"100%"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.stringAppVar.dataValue","targetProperty":"dataValue"}, {}]
			}]
		}]
	}]
}