module.exports = function (length) {
	return Math.random().toString(36).substring(2, +length + 2);
};