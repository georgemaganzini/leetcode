var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let distance = Infinity;
    for (let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;
        let new_target = target - nums[i];
        while (left < right) {
            let curSum = nums[left] + nums[right];

            if (Math.abs(distance) > Math.abs(new_target - curSum)) {
                distance = new_target - curSum;
            }

            if (curSum === new_target) return target;
            else if (curSum < new_target) left++;
            else right--;
        }
    }
    return target - distance;
};
let nums = [-1,2,1,-4], target = 1;
console.log(threeSumClosest(nums, target));