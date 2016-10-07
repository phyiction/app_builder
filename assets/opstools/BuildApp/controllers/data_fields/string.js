steal(function () {
	var componentIds = {
		editView: 'ab-new-singleText',
		headerName: 'ab-new-singleText-header',
		labelName: 'ab-new-singleText-label',
		textDefault: 'ab-new-singleText-default',
		supportMultilingual: 'ab-new-singleText-support-multilingual',
	};

	// General settings
	var stringDataField = {
		name: 'string',
		type: 'string', // http://sailsjs.org/documentation/concepts/models-and-orm/attributes#?attribute-options
		icon: 'font',
		menuName: 'Single line text'
	};

	// Edit definition
	stringDataField.editDefinition = {
		id: componentIds.editView,
		rows: [
			{
				view: "label",
				label: "<span class='webix_icon fa-{0}'></span>{1}".replace('{0}', stringDataField.icon).replace('{1}', stringDataField.menuName)
			},
			{
				view: "text",
				id: componentIds.headerName,
				label: "Name",
				placeholder: "Name",
				labelWidth: 50,
				css: 'ab-new-field-name', // Highlight this when open
				on: {
					onChange: function (newValue, oldValue) {
						if (oldValue == $$(componentIds.labelName).getValue())
							$$(componentIds.labelName).setValue(newValue);
					}
				}
			},
			{
				view: "text",
				id: componentIds.labelName,
				label: 'Label',
				placeholder: 'Header name',
				labelWidth: 50,
				css: 'ab-new-label-name'
			},
			{
				view: "text",
				id: componentIds.textDefault,
				placeholder: 'Default text'
			},
			{
				view: "checkbox",
				id: componentIds.supportMultilingual,
				labelRight: 'Support multilingual',
				labelWidth: 0,
				value: true
			}
		]
	};

	// Populate settings (when Edit field)
	stringDataField.populateSettings = function (data) {
		$$(componentIds.headerName).setValue(data.name.replace(/_/g, ' '));
		$$(componentIds.labelName).setValue(data.label);
		$$(componentIds.textDefault).setValue(data.default);
		$$(componentIds.supportMultilingual).setValue(data.supportMultilingual);
	};

	// For save field
	stringDataField.getSettings = function () {
		return {
			name: $$(componentIds.headerName).getValue(),
			label: $$(componentIds.labelName).getValue(),
			default: $$(componentIds.textDefault).getValue(), // Default value
			supportMultilingual: $$(componentIds.supportMultilingual).getValue(),
			fieldName: stringDataField.name,
			type: stringDataField.type,
			setting: {
				icon: stringDataField.icon,
				editor: 'text', // http://docs.webix.com/desktop__editing.html
				filter_type: 'text' // DataTableFilterPopup - filter type
			}
		};
	};

	// Reset state
	stringDataField.resetState = function () {
		$$(componentIds.headerName).setValue('');
		$$(componentIds.headerName).enable();
		$$(componentIds.labelName).setValue('');
		$$(componentIds.textDefault).setValue('');
		$$(componentIds.supportMultilingual).setValue(1);
	};

	return stringDataField;
});