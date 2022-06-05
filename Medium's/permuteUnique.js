var permuteUnique = function(nums) {
    let result = [];

    const dfs = (i, nums) => {
        if (i === nums.length) {
            result.push(nums.slice());
            return;
        }

        let map = new Map();

        for (let j = i; j < nums.length; j++){

            if (map.has(nums[j])) continue;
            map.set(nums[j], true);

            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    dfs(0, nums);
    return result;
};