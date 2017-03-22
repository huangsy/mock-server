var fs = require('fs');
var path = require('path');
var conf = require(path.resolve(process.cwd(), 'mock.json'));
var date = require('../rules/date');
var number = require('../rules/number');
var string = require('../rules/string');

var globalData = {};

function mock(config) {
	var data = {};
	Object.keys(config).forEach(function(key) {
		var item = config[key];
		switch (item.type) {
			case 'string':
				data[item.name] = string(item.length);
				break;
			case 'number':
				data[item.name] = number.random(item.length);
				break;
			case 'date':
				data[item.name] = date.random(item.length);
				break;
			default:
				if (globalData[item.type]) {
					data[item.name] = [];
					for (var i = item.length; i > 0; i--) {
						data[item.name].push(mock(globalData[item.type]));
					}
				} else {
					data[item.name] = item;
				}
		}
	});
	return data;
}

module.exports = function(config) {
	var apis = config.api;
	var cachePath = config.path;
	if (!fs.existsSync(cachePath)) {
		fs.mkdirSync(cachePath);
	}
	Object.keys(apis).forEach(function(key) {
		var matched = [];
		var api = apis[key];
		var data = {};
		if (/\.json$/.test(key)) {
			data = mock(api);
			fs.writeFile(path.resolve(cachePath, key), JSON.stringify(data), function() {});
		} else {
			globalData[key] = api;
		}
	});
	return
};
