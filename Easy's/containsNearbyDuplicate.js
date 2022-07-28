/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let left = 0;
    let right = 0;
    let counter = 0;
    let seen = new Set();

    while (right < k && right < nums.length){
        if (seen.has(nums[right])) return true;
        seen.add(nums[right]);
        right++;
    }

    while (right < nums.length) {
        if (seen.has(nums[right])) return true;
        seen.add(nums[right]);
        seen.delete(nums[left]);
        left++;
        right++;
    }

    return false;
};

let nums = [1,2,3,1], k = 3;
console.log(containsNearbyDuplicate(nums, k))