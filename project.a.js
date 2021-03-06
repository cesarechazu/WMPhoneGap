wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.Object"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}, {
			"name": "arg3",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "arg4",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['waveMakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['common.themes.phonegap'] = {"wm.AppRoot":{"padding":"0","margin":"0","borderColor":"#d9d9d9"},"wm.TabLayers":{"border":0,"borderColor":"#d9d9d9","headerHeight":"34px","margin":"0","mobileHeaderHeight":"34px","headerWidth":"100px","clientBorder":"1","clientBorderColor":"#c5c5c5"},"wm.AccordionLayers":{"border":0,"borderColor":"#2c2c2c","captionHeight":"40","captionBorder":"0,0,1,0","captionBorderColor":"#232323","margin":"0","arrowsOnLeft":false,"clientBorder":"0","clientBorderColor":"#2c2c2c"},"wm.FancyPanel":{"innerBorder":"0","borderColor":"#dfdfdf","labelHeight":"30"},"wm.Button":{"padding":"0","borderColor":"#d9d9d9","desktopHeight":"45px","width":"100px","border":1,"margin":"5","mobileHeight":"55px"},"wm.ToggleButton":{"padding":"0","borderColor":"#d9d9d9","desktopHeight":"45px","width":"100px","border":1,"margin":"5","mobileHeight":"55px"},"wm.PopupMenuButton":{"padding":"0","borderColor":"#d9d9d9","desktopHeight":"45px","width":"100px","border":1,"margin":"5","mobileHeight":"55px"},"wm.ToggleButtonPanel":{"borderColor":"#d9d9d9","padding":"0","buttonBorderColor":"#d9d9d9","border":0,"buttonBorder":"0,0,0,0","desktopHeight":"40px","lastButtonBorder":"0"},"wm.Text":{"border":0,"desktopHeight":"35px","editorBorder":true,"captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.LargeTextArea":{"border":0,"desktopHeight":"35px","editorBorder":true,"captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.Number":{"border":0,"desktopHeight":"35px","editorBorder":true,"captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.Currency":{"border":0,"desktopHeight":"35px","editorBorder":true,"captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.SelectMenu":{"border":0,"desktopHeight":"35px","editorBorder":true,"captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.Lookup":{"border":0,"desktopHeight":"35px","editorBorder":true,"captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.FilteringLookup":{"border":0,"desktopHeight":"35px","editorBorder":true,"captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.Checkbox":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.RadioButton":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.RichText":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.CheckboxSet":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.RadioSet":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.ListSet":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.Slider":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.DojoGrid":{"border":0,"borderColor":"#d9d9d9","margin":"5","padding":"0","desktopHeight":"100%","mobileHeight":"100%"},"wm.List":{"border":0,"borderColor":"#d9d9d9","margin":"5","padding":"0","desktopHeight":"100%","mobileHeight":"100%"},"wm.Date":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.Time":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.DateTime":{"border":0,"editorBorder":true,"desktopHeight":"35px","captionAlign":"left","captionPosition":"left","margin":"0,0,0,5","mobileHeight":"45px","borderColor":"#d9d9d9","captionSize":"100px"},"wm.dijit.ProgressBar":{"desktopHeight":"38px","mobileHeight":"38px","width":"40px","margin":"0","padding":"0","borderColor":"#d9d9d9"},"wm.Bevel":{"borderColor":"#cccccc","bevelSize":"2"},"wm.Splitter":{"borderColor":"#cccccc","bevelSize":"2"},"wm.dijit.Calendar":{"border":1,"borderColor":"#d9d9d9","margin":"0","desktopHeight":"240px","width":"300px","padding":"0","mobileHeight":"240px"},"wm.Dialog":{"borderColor":"#d9d9d9","titlebarHeight":"35","titleBarButtonsOnRight":true,"titlebarBorderColor":"#a8a8a8","titlebarBorder":"0,0,0,0","footerBorder":"0,0,0,0","border":1},"wm.PageDialog":{"borderColor":"#d9d9d9","titlebarHeight":"35","titleBarButtonsOnRight":true,"titlebarBorderColor":"#a8a8a8","titlebarBorder":"0,0,0,0","footerBorder":"0,0,0,0","border":1},"wm.GenericDialog":{"borderColor":"#d9d9d9","titlebarHeight":"35","titleBarButtonsOnRight":true,"titlebarBorderColor":"#a8a8a8","titlebarBorder":"0,0,0,0","footerBorder":"0,0,0,0","border":1},"wm.DesignableDialog":{"borderColor":"#d9d9d9","titlebarHeight":"35","titleBarButtonsOnRight":true,"titlebarBorderColor":"#a8a8a8","titlebarBorder":"0,0,0,0","footerBorder":"0,0,0,0","border":1},"wm.Dashboard":{},"wm.ButtonBarPanel":{"padding":"5"},"wm.DojoMenu":{"desktopHeight":"32px","padding":"0","mobileHeight":"32px","margin":"0"},"wm.Toast":{"borderColor":"gray","border":1,"autoSetBorderColor":true}};
wm.componentList['example.GoogleOrgChart'] = ['wm.base.widget.Composite','common.packages.example.GoogleOrgChart'];
dojo.declare("WMPhoneGap", wm.Application, {
	"currencyLocale": "$", 
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "Main", 
	"phoneTheme": "common.themes.phonegap", 
	"projectSubVersion": "Alpha0", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "navigateToLogin", 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "Main", 
	"tabletTheme": "common.themes.phonegap", 
	"theme": "common.themes.phonegap", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		cameraPicVar: ["wm.Variable", {"type":"StringData"}, {}], 
		stringAppVar: ["wm.Variable", {"type":"StringData"}, {}]
	},
	_end: 0
});

WMPhoneGap.extend({

	_end: 0
});
WMPhoneGap.prototype._css = 'html.WMApp body .appNameLabel {\
color: #ffffff;\
font-size: 20px;\
font-weight: bold;\
}\
html.WMApp body .mainHeaderPanel {\
background-color: #0866c6;\
}\
html.WMApp body .iconsNameLabel {\
color: #ffffff;\
font-size: 12px;\
}\
html.WMApp body .labelTitle {\
font-size: 18px;\
text-align: center;\
font-weight: bold;\
}\
html.WMApp body .layoutBoxHome {\
background-image: url("resources/images/back.jpg");\
}\
';
