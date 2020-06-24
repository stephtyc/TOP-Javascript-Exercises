const sumAll = function (a, b) {
	//Fulfill "returns ERROR with non-number parameters"

	if (typeof a !== "number" || typeof b !== "number") {
		return "ERROR";
	}

	//Fulfills if larger number is first

	let min = Math.min(a, b);
	let max = Math.max(a, b);

	//Fullfill "returns ERROR with negative numbers"

	if (min < 0 || max < 0) {
		return "ERROR";
	}

	let sumTotal = 0;

	for (let i = min; i <= max; i++) {
		sumTotal += i;
	}

	return sumTotal;
};

module.exports = sumAll;
