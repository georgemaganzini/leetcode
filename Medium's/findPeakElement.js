// modified binary search, instead of searching for target, search for when mid is > it's right neighbor

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        // if we go down this path, it means we are going uphill, binary search will then find the peak if there is one,
        //  or the end index on the right (which is valid because out of bounds index is considered -Infinity)
        if (nums[mid] < nums[mid + 1]){
            left = mid + 1;

        // if we go down this path, we are doing down, binary search will then find the peak if there is one,
        // or the start index on the left (which is valid because nums[-1] is -Ifinity)
        } else {
            right = mid;
        }
    }
    return left;
};

let nums = [10, 9, 8, 7, 6, 5, 1, 2, 1]; // this seems like an edge-case, but nums[-1] and nums[nums.length] are -Infinity
console.log(findPeakElement(nums))