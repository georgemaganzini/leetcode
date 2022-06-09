// DP version is very concise
// Simply check if potential next number is valid (greater than current)
// if so, add 1 to memo representing next index, then set current's memo
// to the max of it's current val or the next index's + 1

var lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++){
            if (nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    return Math.max(...dp);

};

let nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));