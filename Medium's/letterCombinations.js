var letterCombinations = function(digits) {
    let key = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }

    let result = [];

    if (digits.length === 0) return result;

    const dfs = (i, string) => {
        if (string.length === digits.length){
            result.push(string.slice());
            return;
        }


        dfs(i + 1, string + key[digits[i]][0]);
        dfs(i + 1, string + key[digits[i]][1]);
        dfs(i + 1, string + key[digits[i]][2]);
        if (digits[i] === "7" || digits[i] === "9") dfs(i + 1, string += key[digits[i]][3]);

    }

    dfs(0, "");
    return result;
};

let digits = "23";
console.log(letterCombinations(digits))