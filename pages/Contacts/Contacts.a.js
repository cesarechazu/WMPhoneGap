dojo.declare("Contacts", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
_end: 0
});

Contacts.widgets = {
phoneGapCallContacts: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"contacts_readInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
searchText: ["wm.Text", {"border":"0","caption":"Search","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"42px","width":"100%"}, {}],
contactsList: ["wm.List", {"border":"0","columns":[
{"show":true,"field":"id","title":"Id","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name.formatted","title":"Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name.familyName","title":"Family Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name.givenName","title":"Given Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name.middleName","title":"Middle Name","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name.honorificPrefix","title":"Honorific Prefix","width":"120px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name.honorificSuffix","title":"Honorific Suffix","width":"120px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"nickname","title":"NickName","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"birthday","title":"Birthday","width":"110px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"note","title":"Note","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${id} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name.formatted}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Family Name: \" + ${name.familyName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Given Name: \" + ${name.givenName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Middle Name: \" + ${name.middleName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Honorific Prefix: \" + ${name.honorificPrefix}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Honorific Suffix: \" + ${name.honorificSuffix}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"NickName: \" + ${nickname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Birthday: \" + ${birthday}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Note: \" + ${note}\n + \"</div>\"\n\n","mobileColumn":false}
],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"selectFirstRow":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallContacts","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

Contacts.prototype._cssText = '';
Contacts.prototype._htmlText = '';