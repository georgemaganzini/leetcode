// inner loop finds potential prefix(es)
// outer loop starts at indexs after prefix is found
// becareful with indicies of slice, initial table (length+1), and return (length - 1)

var wordBreak = function(s, wordDict) {
    // s.length + 1 is necessary because of how secondary paramater of slice (j in this case) is "up until aka non inclusive"
    // i.e. table indicies represent if the substring ending before that index have been taken care of already
    const table = new Array(s.length + 1).fill(false);

    table[0] = true;

    for (let i = 0; i < table.length; i++){
        if (table[i] === false) continue;
        for (let j = i + 1; j < table.length; j++){
            if (wordDict.includes(s.slice(i, j))) {
                table[j] = true;
            }

        }
    }
    return table[table.length - 1]
};

let s = "leetcode",
    wordDict = ["leet", "lee", "code"];

console.log(wordBreak(s, wordDict));
