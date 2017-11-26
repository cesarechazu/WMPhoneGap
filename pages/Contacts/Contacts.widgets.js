Contacts.widgets = {
	phoneGapCallContacts: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"contacts_readInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"searchText.dataValue","targetProperty":"filter"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"10","styles":{},"verticalAlign":"top"}, {}, {
		searchText: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"60px","dataValue":undefined,"displayValue":"","height":"45px","margin":"0,0,0,0","placeHolder":"Search","styles":{},"width":"100%"}, {}],
		contactsList: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"border":"0","columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"name.formatted","title":"Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"name.familyName","title":"Family Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"name.givenName","title":"Given Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"name.middleName","title":"Middle Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"name.honorificPrefix","title":"Honorific Prefix","width":"120px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"name.honorificSuffix","title":"Honorific Suffix","width":"120px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nickname","title":"NickName","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"birthday","title":"Birthday","width":"110px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"note","title":"Note","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":true}
],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"selectFirstRow":true}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallContacts","targetProperty":"dataSet"}, {}]
			}]
		}]
	}]
}