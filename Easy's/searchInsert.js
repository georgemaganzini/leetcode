var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // use less than + or equals to when we are still interested in finding a certain index even if number might not be in array
    // instead of stopping when we have narrowed it down to two indices, go one more iteration
    // mid defaults to left because of Math.floor, and follows logic around treating left as mid;
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