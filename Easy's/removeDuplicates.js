// i stores index position last non duplicate
// when non duplicate is found after a string of duplicates, incremenent i and swap current with i (or place right after i just was)
// return ++i because we want the length not the index

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