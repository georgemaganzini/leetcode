var longestCommonPrefix = function(strs) {
    let slate = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (strs[i][j] === slate[j] && j < strs[i].length) j++
        if (!j) slate = "";
        else slate = strs[i].slice(0, j);
    }

    return slate;
};

let strs = ["",""];
console.log(longestCommonPrefix(strs));