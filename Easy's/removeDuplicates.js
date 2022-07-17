var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i])
            nums[++i] = nums[j];
    }
    return ++i;
};


let nums = [1,1,2];
console.log(removeDuplicates(nums));