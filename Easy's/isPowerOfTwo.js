/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;

    while (n%2 === 0 && n > 2){
        n = n/2;
    }

    return n < 3;
};

// also

var isPowerOfTwo = function(n) {
    return (Math.log2(n) % 1 === 0);
};