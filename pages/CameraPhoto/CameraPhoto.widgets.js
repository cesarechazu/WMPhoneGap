CameraPhoto.widgets = {
	phoneGapCallPhoto: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"capture_picture"}, {"onError":"phoneGapCallPhotoError","onSuccess":"phoneGapCallPhotoSuccess"}, {
		input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"50","targetProperty":"quality"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
		takePhotoPGButton: ["wm.Button", {"border":"1","caption":"Take photo with PhoneGapCall","height":"55px","width":"100%"}, {"onclick":"takePhotoPGButtonClick"}],
		takePhotoJSButton: ["wm.Button", {"border":"1","caption":"Take photo with java script function","height":"55px","width":"100%"}, {"onclick":"takePhotoJSButtonClick"}],
		picturesPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			picturePGPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
				picturePG: ["wm.Picture", {"aspect":"h","height":"100%","width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallPhoto.dataValue","targetProperty":"source"}, {}]
					}]
				}],
				pathPGText: ["wm.Text", {"border":"0","caption":"Path","captionSize":"40px","displayValue":"","height":"45px","readonly":true,"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"picturePG.source","targetProperty":"dataValue"}, {}]
					}]
				}]
			}],
			pictureJSPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
				pictureJS: ["wm.Picture", {"aspect":"h","height":"100%","styles":{},"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.cameraPicVar.dataValue","targetProperty":"source"}, {}]
					}]
				}],
				pathJSText: ["wm.Text", {"border":"0","caption":"Path","captionSize":"40px","displayValue":"","height":"45px","readonly":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"pictureJS.source","targetProperty":"dataValue"}, {}]
					}]
				}]
			}]
		}]
	}]
}