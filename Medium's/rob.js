var rob = function(nums) {
    let max = 0;

    let topScore = [];

    const dfs = (curr, i) => {
        if (i > nums.length - 1) {
            max = Math.max(curr, max);
            return;
        }

        if (curr + nums[i] > topScore[i] || topScore[i] === undefined) {
            topScore[i] = curr + nums[i];
            dfs(curr + nums[i], i + 2)
        }

        dfs(curr, i + 1)


    }

    dfs(0, 0);
    return max;
};

let nums = [1,2,3,1];

console.log((rob(nums)));