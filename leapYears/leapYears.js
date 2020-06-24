const leapYears = function (year) {
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return true;
			}
			return false;
		}
		return true;
	} else {
		return false;
	}
	return leapYears;
	// return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
	// if (year % 4 === 0) {
	// 	return true;
	// }
	// if (year % 100 !== 0 && year % 400 == 0) {
	// 	return true;
	// }
	// if (year % 100 == 0 && year % 400 != 0) {
	// 	return false;
	// }
	// if (year % 4 != 0 && year % 100 != 0) {
	// 	return false;
	// }
};
module.exports = leapYears;
