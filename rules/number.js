module.exports = {
	random: function (length) {
		var rand = Math.random();
		if (length && isNaN(length)) return rand;
		return +Math.random().toString(10).substring(2, +length + 2);
	}
};