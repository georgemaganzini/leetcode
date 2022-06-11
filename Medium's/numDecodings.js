var numDecodings = function(s) {
    if (s[0]=== 0) return 0;

    let alpha = {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H",
        9: "I", 10: "J", 11: "K", 12: "L", 13: "M", 14: "N", 15: "O", 16: "P", 17: "Q",
        18: "R", 19: "S", 20: "T", 21: "U", 22: "V", 23: "W", 24: "X", 25: "Y", 26: "Z"
    }

    let dp = Array(s.length).fill(1);

    dp[0] = 1;

    let result = 0;

    const dfs = (i) {
        if (i in dp) return dp[i]
        if (s[i]==="0") return 0;

        res = dfs(i + 1)
        if ((i + 1 < s.length && s[i]==="1") ||
            (s[i]==="2" && s[i+1]))

    }

    return dp
};

let s = "11106";
console.log(numDecodings(s));