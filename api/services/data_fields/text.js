/**
 * Generate data type for AppBuilder apps.
 */

var AD = require('ad-utils');

module.exports = {

	getFieldString: function (column) {
		var dfd = AD.sal.Deferred();

		var colString = column.name + ':' + column.type;

		if (column.setting.supportMultilingual) {
			colString += ':multilingual';
		}

		dfd.resolve(colString);

		return dfd;
	}

};