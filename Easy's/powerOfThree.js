var isPowerOfThree = function(n) {
    while (n > 1) {
        n = n / 3;
    }

    return n === 1;
};

let n = 27 // true

console.log(isPowerOfThree(n))