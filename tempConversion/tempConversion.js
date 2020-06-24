const ftoc = function (f) {
	let tempC = ((f - 32) * 5) / 9;
	roundedC = Math.round(tempC * 10) / 10;
	return roundedC;
};

const ctof = function (c) {
	let tempF = (c * 9) / 5 + 32;
	let roundedF = Math.round(tempF * 10) / 10;
	return roundedF;
};

module.exports = {
	ftoc,
	ctof,
};
