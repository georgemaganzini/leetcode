/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;

    while(n != 0) {
        sum += n & 1;
        n = n >>> 1;
    }

    return sum;
};

var hammingWeight = function(n) {
    // remove 0s from base2 representation of the number
    return n.toString(2).replace(/0/g, '').length;
};


const hammingWeight = (n) => {
	let count = 0;

	while (n !== 0) {
		count++;
		n = n & (n - 1);
	}

	return count;
};