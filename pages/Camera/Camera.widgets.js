Camera.widgets = {
	phoneGapCallPhoto: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"capture_picture"}, {}, {
		input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"100","targetProperty":"quality"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		takePhotoPGButton: ["wm.Button", {"border":"1","caption":"Take photo with phonegap call","height":"40px","styles":{},"width":"100%"}, {"onclick":"phoneGapCallPhoto"}],
		takePhotoJSButton: ["wm.Button", {"border":"1","caption":"Take photo with Java Script function","height":"40px","styles":{},"width":"100%"}, {}],
		picture1: ["wm.Picture", {"height":"100%","width":"100%"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallPhoto.dataValue","targetProperty":"source"}, {}]
			}]
		}]
	}]
}