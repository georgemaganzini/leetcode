var combinationSum = function(candidates, target) {
    let result = [];

    const dfs = (target, slate, i) => {
        if (target < 0) return;

        if (target === 0) {

            result.push(slate.slice());

            return;
        }

        for (let j = i; j < candidates.length; j++) {
            const curVal = candidates[j];


            slate.push(curVal);
            dfs(target - curVal, slate, j);
            slate.pop();
        }
    }

    dfs(target, [], 0);

    return result;
};

let candidates = [2, 3, 6, 7];
let target = 7;

console.log(combinationSum(candidates, target));