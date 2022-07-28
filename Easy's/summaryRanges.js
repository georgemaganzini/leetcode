/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++){
        let start = nums[i];
        while (nums[i+1] - nums[i] <= 1 && i < nums.length - 1){
            i++
        }
        if (nums[i] !== start) result.push(`${start}->${nums[i]}`)
        else result.push(`${nums[i]}`)
    }
    return result;
};

let nums = [0,1,2,4,5,7]; // ["0->2","4->5","7"]


console.log(summaryRanges(nums))