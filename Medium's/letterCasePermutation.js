var letterCasePermutation = function(s) {
    const res = [];

    const dfs = (s, i, slate) => {
        if (i === s.length) {
            res.push(slate.join(''));
            return;
        }

        let char = s[i];

        if (isNaN(char)){
            slate.push(char.toUpperCase());
            dfs(s, i + 1, slate);
            slate.pop();

            slate.push(char.toLowerCase());
            dfs(s, i + 1, slate);
            slate.pop();
        } else {
            slate.push(char)
            dfs(s, i + 1, slate);
            slate.pop();
        }
    }

    dfs(s, 0, []);

    return res;
};

let s = "a1b2"

console.log(letterCasePermutation(s))