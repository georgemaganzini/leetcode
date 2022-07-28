/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

// faster with pre computed squares


var isHappy = function(n) {
    if (n < 1) return false;

    const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

    let set = new Set();

    while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
        n = 0;
        for (char of s) {
            n += squares[char];
        }
        if (n == 1) return true;
    }

    return false;
};