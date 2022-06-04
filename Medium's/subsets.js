var subsets = function(nums) {
    let result = [];

    const dfs = (i, nums, subset) => {

        if (i === nums.length) {
            // don't forget to make a copy aka .slice()
            result.push(subset.slice());
            return;
        }
        dfs(i + 1, nums, subset);


        subset.push(nums[i]);
        dfs(i + 1, nums, subset);
        subset.pop(nums[i]);


    }

    dfs(0, nums, []);
    return result;
};


let nums = [1,2,3];
console.log(subsets(nums))