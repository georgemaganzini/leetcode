var findTargetSumWays = function(nums, target) {
    let ways = 0;

    const dfs = (i, curSum) => {
        if (i === nums.length){
            if (curSum === target) ways++;
            return;
        }

        dfs(i + 1, curSum + nums[i]);
        dfs(i + 1, curSum - nums[i]);
    }

    dfs(0, 0);
    return ways;
};

let nums = [1,1,1,1,1], target = 3;
console.log(findTargetSumWays(nums)); 