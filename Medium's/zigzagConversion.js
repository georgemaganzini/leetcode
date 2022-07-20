var convert = function(s, numRows) {
    let result = Array(numRows).fill('');
    let counter = 0;

    while (counter < s.length){
        // down
        for (i = 0; i < numRows && counter < s.length; i++, counter++) {
            result[i] += s[counter];
        }

        // up, right
        for (i = numRows - 2; i > 0 && counter < s.length; i--, counter++) {
             result[i] += s[counter];
        }
    }

    return result.join("");
};


let s = "PAYPALISHIRING", numRows = 3;
// Output: "PAHNAPLSIIGYIR"

// P   A   H   N
// A P L S I I G
// Y   I   R

console.log(convert(s, numRows))