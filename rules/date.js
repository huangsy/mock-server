var number = require('./number');

function format(data) {
	return (data < 10 ? '0' : '') + data;
}

module.exports = {
	random: function (length) {
		var timestamp = +new Date + number.random(length) * 86400 * 1000;
		var date = new Date(timestamp);
		return date.getFullYear() + '-' +
			format(date.getMonth() + 1) + '-' +
			format(date.getDate()) + ' ' +
			format(date.getHours()) + ':' +
			format(date.getMinutes()) + ':' +
			format(date.getSeconds());
	}
};