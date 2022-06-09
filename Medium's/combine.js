// Use depth-first, i & j iterators for backtracking.
// Decide to take or not take at each iteration.
// Don’t forget edge cases and to .slice(), cannot slate.push within parameter of function call, unsure why (e.g. dfs(slate.push(j), “.push is not a function”

var combine = function (n, k) {
    let result = [];
    const dfs = (slate, i) => {
        if (slate.length == k) {
            result.push(slate.slice());
            return;
        }

        for (let j = i; j <= n; j++) {
            slate.push(j);
            dfs(slate, j + 1);
            slate.pop();
        }
    }
    dfs([], 1);
    return result;
};

let n = 4;
let k = 2;
console.log(combine(n,k));