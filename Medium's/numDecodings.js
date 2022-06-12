var numDecodings = function(s) {

    let dp = Array(s.length+1).fill(0);

    if (s[0]==='0') return 0

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++){
        // + being used as unary operator here, turns string into a number
        const oneDigit = +s.slice(i-1, i);
        const twoDigits = +s.slice(i-2, i);

        // just make sure the number is valid (not zero)
        // then continue keeping track of the paths that got to i-1 position if
        // last single digit was a valid continuation of path
        if (oneDigit > 0) dp[i] = dp[i-1];
        // make sure there is no leading zero, and also <= 26
        // then add on the valid paths to two digits ago
        if (twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i-2]
        // console.log(oneDigit, twoDigits, dp);
    }
    return dp[s.length];
};

let s = "11106";
console.log(numDecodings(s));