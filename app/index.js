'use strict'
module.exports = {
	findMissing: function(arr1, arr2) {
		var missingNum1 = arr1.find((number) => arr2.indexOf(number) === -1);
		var missingNum2 = arr2.find((number) => arr1.indexOf(number) === -1);
		var missingNumber = [missingNum1 || 0, missingNum2 || 0];
		if (missingNumber[0] === 0 || missingNumber[1] === 0) {
			return missingNumber[1];
		}
		return missingNumber;
	}
}