var combine = function(n, k) {
    let result = [];

    const dfs = (slate) => {

        if (slate.length === k) {
            result.push(slate)
            return;
        }

        const start = slate.length === 0 ? 1 : slate[slate.length-1] + 1
        for (let i = start; i <= n; i++) dfs(slate.concat(i));
    }
    dfs([]);
    return result;
};

let n = 4;
let k = 2;
console.log(combine(4,2));