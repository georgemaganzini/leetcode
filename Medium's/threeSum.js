var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = []

    for (let i = 0; i < nums.length; i++) {
       if (i > 0 && nums[i] === nums[i-1]) continue;

       let left = i + 1;
       let right = nums.length - 1;

       while (left < right) {
            curSum = nums[i] + nums[left] + nums[right];

            if (curSum > 0) right--;
            else if (curSum < 0) left++;
            else {
                res.push([nums[i], nums[left], nums[right]])
                left++;
                while (nums[left] === nums[left - 1] && left < right) left++;
            }
       }
    }
    return res;
}

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));