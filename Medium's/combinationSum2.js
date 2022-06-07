var combinationSum2 = function(candidates, target) {
    let result = [];

    candidates.sort((a, b) => a - b);

    const dfs = (target, slate, i) => {
        if (target < 0) return;

        if (target === 0) {
            result.push(slate.slice());
            return;
        }

        for (let j = i; j < candidates.length; j++){
            const curVal = candidates[j];

            if (i !== j && curVal === candidates[j - 1]) continue;

            slate.push(curVal);
            dfs(target - curVal, slate, j + 1)
            slate.pop();
        }
    }

    dfs(target, [], 0);
    return result;
};

let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;

console.log(combinationSum2(candidates, target))