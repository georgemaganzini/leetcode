var subsetsWithDup = function(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    const dfs = (i, nums, subset) => {
        if (i === nums.length){
            result.push(subset.slice());
            return;
        }

        dfs(i + 1, nums, subset);

        subset.push(nums[i]);
        dfs(i + 1, nums, subset);
        subset.pop(nums[i]);

    }

    dfs(0, nums, []);
    const hash = {};
    for (let el of result){
        if (hash[el]) continue;
        hash[el] = el;
    }
    
    return Object.values(hash);
};

let nums = [1,2,2];
console.log(subsetsWithDup(nums))