var combine = function (n, k) {
    if (n == 1 && k == 1) return [[1]];

    let result = [];
    const dfs = (slate, i) => {
        if (slate.length == k) result.push(slate.slice());
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
console.log(combine(4,2));