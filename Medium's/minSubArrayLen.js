var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let curSum = 0;
    while (left < nums.length && right < nums.length){
        // iterate over array, expand window until it is >= target
        curSum += nums[right];
        // then slide forward by moving left pointer first
        while (curSum >= target){
            minLen = Math.min(minLen, right - left + 1);
            curSum -= nums[left];
            left++;
        }
        right++;
    }
    return minLen === Infinity ? 0 : minLen;
};

let target = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums));