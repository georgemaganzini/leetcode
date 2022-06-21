// slightly better version:

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        let low = i+1, high = nums.length-1, sum = 0;

        while(low < high) {
            sum = nums[i] + nums[low] + nums[high];

            if(sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                while(nums[low+1] === nums[low]) low++;
                while(nums[high-1] === nums[high]) high--;
                low++;
                high--;
            } else if(sum < 0) low++;
            else high--;
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return result;
};

// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     let res = []

//     for (let i = 0; i < nums.length; i++) {
//        if (i > 0 && nums[i] === nums[i-1]) continue;

//        let left = i + 1;
//        let right = nums.length - 1;

//        while (left < right) {
//             curSum = nums[i] + nums[left] + nums[right];

//             if (curSum > 0) right--;
//             else if (curSum < 0) left++;
//             else {
//                 res.push([nums[i], nums[left], nums[right]])
//                 left++;
//                 while (nums[left] === nums[left - 1] && left < right) left++;
//             }
//        }
//     }
//     return res;
// }

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));