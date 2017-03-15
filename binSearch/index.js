'use strict'
module.exports = {
	//Array method to generate [1, 2, 3 . . . 20]
	Array.prototype.toTwenty = function toTwenty() {
    	var nums = [];
    	for (var i = 1; i < 21; i++) {
        	nums.push(i);
    	}
    	return nums;
	}

	//Array method to generate [2, 4, 6 . . . 40]
	Array.prototype.toForty = function toForty() {
    	var nums = [];
    	for (var i = 2; i < 41; i += 2) {
        	nums.push(i);
    	}
    	return nums;
	}

	//Array method to generate [10, 20, 30 . . . 1000]
	Array.prototype.toOneThousand = function toOneThousand() {
    	var nums = [];
    	for (var i = 10; i < 1001; i += 10) {
        	nums.push(i);
    	}
    	return nums;
	}

	Array.prototype.search = function search(n) {

    	//define variables
    	var length  = this.length,
        var	high    = length,
        var	low     = 1,
        var	mid     = low + Math.floor((high - low)/2),
        var	count   = 0;

        //find the index of n with binary search
        while (this[mid - 1] !== n) {
            if (n > this[mid - 1]){
               	low  = mid + 1;
               	count++;
            } else {
               	high = mid -1;
            }
            mid  = low + Math.ceil((high - low)/2);

            //exit if the number was not found in the array
            if (low === mid && this[mid - 1] !== n) return {
            	length: length, index: -1, count: count
            	};
        	}
        	if (n === this[length - 1]) return {
        		length: length, index: (high - 1), count: 0
            }
        	return {
                length: length, index: (mid - 1), count: count
            };
	}
}