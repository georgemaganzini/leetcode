var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right){
        mid = left + Math.floor((right - left)/2);

        if (nums[mid] === target) return mid;

        if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};


let nums = [1,3,5,6], target = 0;

console.log(searchInsert(num, target))