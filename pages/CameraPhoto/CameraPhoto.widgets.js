CameraPhoto.widgets = {
	phoneGapCallPhoto: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"capture_picture"}, {"onError":"phoneGapCallPhotoError"}, {
		input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"50","targetProperty":"quality"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
		takePhotoPGButton: ["wm.Button", {"border":"1","caption":"Take photo with PhoneGapCall","height":"40px","width":"100%"}, {"onclick":"phoneGapCallPhoto"}],
		takePhotoJSButton: ["wm.Button", {"border":"1","caption":"Take photo with java script function","height":"40px","width":"100%"}, {"onclick":"takePhotoJSButtonClick"}],
		picture1: ["wm.Picture", {"aspect":"h","height":"100%","width":"100%"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallPhoto.dataValue","targetProperty":"source"}, {}]
			}]
		}],
		imageURIText: ["wm.LargeTextArea", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"80px","mobileHeight":"80px","styles":{},"width":"98%"}, {}]
	}]
}