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
contactsList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[
{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"left","formatFunc":""},
{"show":true,"field":"name.formatted","title":"Name.formatted","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"name.familyName","title":"Name.familyName","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"name.givenName","title":"Name.givenName","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"name.middleName","title":"Name.middleName","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"name.honorificPrefix","title":"Name.honorificPrefix","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"name.honorificSuffix","title":"Name.honorificSuffix","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"nickname","title":"Nickname","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"birthday","title":"Birthday","width":"100%","displayType":"Java.util.Date","align":"left","formatFunc":""},
{"show":true,"field":"note","title":"Note","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${id} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name.formatted: \" + ${name.formatted}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name.familyName: \" + ${name.familyName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name.givenName: \" + ${name.givenName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name.middleName: \" + ${name.middleName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name.honorificPrefix: \" + ${name.honorificPrefix}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name.honorificSuffix: \" + ${name.honorificSuffix}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nickname: \" + ${nickname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Birthday: \" + ${birthday}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Note: \" + ${note}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}
],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"selectFirstRow":true,"styleAsGrid":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"phoneGapCallContacts","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

Contacts.prototype._cssText = '';
Contacts.prototype._htmlText = '';