/**
 * 创建文档
 */

module.exports = function(config) {
	var http = require('http');
	var fs = require('fs');
	var path = require('path');
    var mock = require('../lib/mock');

	var cachePath = config.path;

	var server = http.createServer(function(req, res) {
		if (!fs.existsSync(cachePath)) {
			fs.mkdirSync(cachePath);
		}
		var filePath = path.resolve(cachePath, req.url.split('/').pop());
		fs.readFile(filePath, 'utf8', function(err, data) {
			var mockData = mock(config);
			if (err) {
				res.end(mockData);
				return;
			}
			try {
				JSON.parse(data);
				res.end(data);
			} catch(e) {
				res.end(mockData);
			}
		});
	});

	server.listen(3002);
    console.log('server proxy for http://' + config.host);
}
