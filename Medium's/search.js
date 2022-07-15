// check which side is sorted (left or right)
// then check target is within sorted bounds, if it is shift window there, else shift window to other side;

// can refactor such that both conditions that lead to right = mid - 1, and both that lead to left = mid + 1 are combined
// but this is easier to understand;

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right){
        mid = left + Math.floor((right - left)/2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            // left is sorted
            if (nums[left] <= target && target <= nums[mid]){
                // target is in left
                right = mid - 1;
            } else {
                // target is in right
                left = mid + 1;
            }
        } else {
            // left isnt sorted, but right is, target not necessarily in right though
            if (nums[mid] < target && target <= nums[right]){
                // target is in right
                left = mid + 1;
            } else right = mid - 1;
        }
    }
    return nums[left] === target ? left : -1;
};

let nums = [4,5,6,7,0,1,2], target = 3;

console.log(search(nums, target));