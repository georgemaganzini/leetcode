// pass the mutated/swapped nums array as a param into dfs
// don't forget to slice() a copy into results
// pass i through as a param, use only 1 "let j = i" loop

var permute = function(nums) {
    let result = [];

    const dfs = (i, nums) => {
        if (i === nums.length) {
            result.push(nums.slice());
            return;
        }

        for (let j = i; j < nums.length; j++){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    dfs(0, nums);
    return result;
};

let nums = [1,2,3];
console.log(permute(nums));