var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === target) return true;

        if (nums[l] < nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else if (nums[mid] < nums[r]){
            if (nums[mid] < target && target <= nums[r])l = mid + 1;
            else r = mid - 1;
        } else if (nums[r] === target) return true; // best we can do is just check one side and iterate it if other checks fail
        else r--;
    }
    return (nums[l] === target);
};

let nums = [3, 1], target = 0;

console.log(search(nums, target));