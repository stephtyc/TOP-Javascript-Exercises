const reverseString = function (string) {
	let strReverse = string.split("").reverse("").join("");
	return strReverse;
};

module.exports = reverseString;
