var convertToTitle = function(n) {
    if (n == 0) return null;
    let result = '';
    while (n > 0) {
        let r = n % 26;
        let d = parseInt(n / 26);
        if (r == 0) {
            r = 26;
            d = d - 1;
        }
        result += String.fromCharCode (64 + r);
        n = d;
    }
    return res
}


var convertToTitle = function(n) {
     n = n - 1;
    if(n>=0&&n<26){
        return String.fromCharCode(65+n);
    }
    return convertToTitle(parseInt(n/26)) + convertToTitle((n%26)+1);
};

var convertToTitle = function(n) {
    // General idea: do long division with base 26
    // To do that, we need to build up a map of 26^0, 26^1, 26^2 etc
    // We do that in a while loop, until we reach a exp that's bigger than n
    // Now we do long devision and store the numbers in an array

    // There's a problem though: it's not really base 26, as we can't have zeroes
    // To fix that, there is a loop that turns zeroes into 26's by borrowing 1 from 26^next

    // Then we can use fromCharCode(int) to turn numbers into letters
    // String.fromCharCode() return will return A @ 65, Z @ 90

    // Check for bad input
    if (!n) {
        return '';
    }

    // Fill up map to get the base 26 numbers
    let map = {
        0: 1,
        1: 26
    };
    let counter = 1;
    let result = 26;

    while (result < n) {
        result = result * 26;
        counter++;
        map[counter] = result;
    }

    // Long division part
    let i, l;
    let out = [];
    let remainder = n;
    for (i = counter - 1; i >= 0; i--) {

        // how many times can we take 26^i out of n ?
        let divisions = Math.floor(remainder / map[i]);

        // do that
        remainder = remainder - (divisions * map[i]);

        // record it
        out.push(divisions);
    }

    // Fix zeroes. Out can be something like [2,0,1], that should become [1,26,1]
    for (i = out.length - 1; i > 0; i--) {
        if (out[i] === 0) {
            out[i] = 26;
            out[i-1] = out[i-1] - 1;
        }
    }

    // Finally, convert the numbers to letters
    let title = '';
    for (i = 0, l = out.length; i < l; i++) {
        if (out[i] !== 0) {
            title += String.fromCharCode(out[i] + 64);
        }
    }

    return title;
};