var letterCasePermutation = function(s) {
    let res = [];

    const dfs = (s, i, word) => {
        if (i === s.length) {
            res.push(word.join(''));
            return;
        }

        let char = s[i];

        if (!Number.isInteger(parseInt(char))){
            word.push(char.toUpperCase());
            dfs(s, i + 1, word);
            word.pop();

            word.push(char.toLowerCase());
            dfs(s, i + 1, word);
            word.pop();
        } else {
            word.push(char)
            dfs(s, i + 1, word);
        }
    }

    dfs(s, 0, []);

    return res;
};