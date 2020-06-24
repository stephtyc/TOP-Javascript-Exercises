const removeFromArray = function (...args) {
	const array = args[0];
	const newArray = [];

	// 	//why was I stuck on this? because I kept thinking !arg.includes(item) was an != NOT comparison operator rather than view it as a logical operator

	// 	//if args includes 2 = false, then if newArr pushes 2, it will become false, therefore the newArray needs to not have 2 to be true.
	// 	array.forEach((item) => {
	// 		if (!args.includes(item)) {
	// 			newArray.push(item);
	// 		}
	// 	});
	// 	return newArray;
	// };

	array.indexOf((item) => {
		if (args.includes(item)) {
			newArray.slice(item, 1);
		}
	});

	return newArray;
};

module.exports = removeFromArray;
