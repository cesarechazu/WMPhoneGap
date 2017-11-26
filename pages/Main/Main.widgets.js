Main.widgets = {
	navHome: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Home\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	newPage: ["wm.Variable", {"isList":true,"type":"StringData"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panelEncabezado: ["wm.Panel", {"_classes":{"domNode":["mainHeaderPanel"]},"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"10,10,10,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			appNameLabelPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				appNameLabel: ["wm.Label", {"_classes":{"domNode":["appNameLabel"]},"caption":"WaveMaker 6.7 PhoneGap","padding":"4","styles":{},"width":"100%"}, {}],
				iconsNameLabel: ["wm.Label", {"_classes":{"domNode":["iconsNameLabel"]},"caption":"Primo Icons","padding":"4","styles":{},"width":"100%"}, {}],
				devNameLabel: ["wm.Label", {"_classes":{"domNode":["iconsNameLabel"]},"caption":"Desarrollado por: César Echazú","padding":"4","styles":{},"width":"100%"}, {}]
			}],
			pictureHome: ["wm.Picture", {"aspect":"v","height":"100%","source":"resources/images/PrimoIcons/home.png","styles":{},"width":"50px"}, {"onclick":"navHome"}]
		}],
		panelSeparador: ["wm.Panel", {"height":"8px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#505050"},"verticalAlign":"top","width":"100%"}, {}],
		pageContainer: ["wm.PageContainer", {"deferLoad":true,"padding":"10","pageName":"Home","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"pageContainerPageChanged"}]
	}]
}