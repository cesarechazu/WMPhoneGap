Media.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		buttonStartRecord: ["wm.Button", {"border":"1","caption":"Start Record (10 secons)","height":"50px","mobileHeight":"50px","width":"180px"}, {"onclick":"buttonStartRecordClick"}],
		buttonPlayRecord: ["wm.Button", {"border":"1","caption":"Play Record","disabled":true,"height":"50px","iconHeight":"24px","iconWidth":"24px","imageIndex":30,"imageList":"app.silkIconList","mobileHeight":"50px","width":"180px"}, {"onclick":"buttonPlayRecordClick"}]
	}]
}