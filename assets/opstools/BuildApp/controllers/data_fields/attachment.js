steal(function () {
	var componentIds = {
		editView: 'ab-new-attachment'
	};

	// General settings
	var attachmentDataField = {
		name: 'attachment',
		type: 'file', // http://sailsjs.org/documentation/concepts/models-and-orm/attributes#?attribute-options
		icon: 'file',
		menuName: 'Attachment',
		includeHeader: true,
		description: 'Attach a file to this object'
	};

	// Edit definition
	attachmentDataField.editDefinition = {
		id: componentIds.editView,
		rows:[
		{
		    view:"uploader",
		    id: "uploader_1",
		    value:"Upload file",
		    link:"mylist",
		    upload:"php/upload.php",
		    datatype:"json"
		}, 
		{
		    view:"list",  
		    id:"mylist", 
		    type:"uploader",
		    autoheight:true, 
		    borderless:true 
		}
    		]
	};
	// Populate settings (when Edit field)
	attachmentDataField.populateSettings = function (application, data) {
		if (!data) return;

		
	};

	// For save field
	attachmentDataField.getSettings = function () {
		// TODO:
		// fieldName = base.getFieldName(self.componentIds.attachmentView);
		// fieldLabel = base.getFieldLabel(self.componentIds.attachmentView);
		// fieldSettings.icon = self.componentIds.attachmentIcon;
		return {
			fieldName: attachmentDataField.name,
			type: attachmentDataField.type,
			setting: {
				icon: attachmentDataField.icon,

				editor: 'attachmentDataField',
				template:'<div class="ab-attachment-data-field"></div>',

				filter_type: 'text', // DataTableFilterPopup - filter type
/*
				useWidth	: $$(componentIds.useWidth).getValue(),	
				imageWidth	: $$(componentIds.imageWidth).getValue(),		
				useHeight	: $$(componentIds.useHeight).getValue(),
				imageHeight	: $$(componentIds.imageHeight).getValue()
*/
			}
		};
	};

	// Reset state
	attachmentDataField.resetState = function () {
		// TODO:
	};

	attachmentDataField.customDisplay = function (application, object, fieldData, rowId, data, itemNode, options) {

		var $container = $(itemNode).find('.ab-attachment-data-field');	
		$container.html(JSON.stringify(data));

		return true;
	};
	return attachmentDataField;

});
