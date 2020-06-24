const repeatString = function (string, times) {
	if (times < 0) {
		return "ERROR";
	}

	let resultString = "";

	for (let i = 0; i < times; i++) {
		resultString += string;
	}
	return resultString;
};

module.exports = repeatString;
