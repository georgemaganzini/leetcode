const maxSubArray = function(nums) {
    let max = nums[0];
    let curSum = 0;
    for (i = 0; i < nums.length; i++){
        if (curSum < 0){
            curSum = 0
        }
        curSum += nums[i];
        max = Math.max(max, curSum)
    }
    return max
};