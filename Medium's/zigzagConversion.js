var convert = function(s, numRows) {
    s = s.split('');
    let result = Array(numRows).fill('');

    while (s.length > 0){
    // down
        for (i = 0; i < numRows; i++) {
            if (s[0]) result[i] += s.shift();
        }

        // console.log(s.length)

        // up, right
        for (i = numRows - 2; i > 0; i--) {
             if (s[0]) result[i] += s.shift();
        }
    }

    console.log(result)

    // for (let subArr of result){
    //     resultString += ...subArr;
    // }

    return result.join("");
};


let s = "PAYPALISHIRING", numRows = 3;
// Output: "PAHNAPLSIIGYIR"

// P   A   H   N
// A P L S I I G
// Y   I   R
console.log(convert(s, numRows))