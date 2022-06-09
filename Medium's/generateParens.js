// complete parens can be translated to:
// right parens must be <= left parens
// keep track of left and right count in dfs params,
// only add right paren is r < l

var generateParenthesis = function(n) {
    let result = [],
        left = 0,
        right = 0;

    const dfs = (l, r, string) => {
        if (l > n) return;

        if (string.length === n * 2){
            result.push(string.slice());
            return;
        }

        dfs(l + 1, r, string + "(");

        if (r < l) dfs(l, r + 1, string + ")")

    }

    dfs(left, right, "");
    return result;
};

let n = 3;
console.log(generateParenthesis(n));