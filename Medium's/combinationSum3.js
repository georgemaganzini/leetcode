var combinationSum3 = function(k, n) {
    let result = [];

    const dfs = (target, i, slate) => {
        if (target < 0) return;

        if (target === 0) {
            if (slate.length === k) result.push(slate.slice());
            return;
        }

        for (let j = i; j <= 9; j++){
            j, i = i, j;
            dfs(target - j, j + 1, slate.concat(j));
            i, j = j, i;
        }

    }

    dfs(n, 1, []);
    return result;
};

let k = 3,
    n = 7;

console.log(combinationSum3(k, n));