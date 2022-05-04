var majorityElement = function(nums) {
    let res = 0;
    let count = 0;

    nums.forEach((num)=>{
        if (count === 0) res = num;
        count += num === res ? 1 : -1;
    })

    return res
};


// var majorityElement = function(nums) {
//     let map = new Map();
//     let majorityNum = Math.ceil(nums.length/2)

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in map) {
//             map[nums[i]]++;
//         } else {
//             map[nums[i]] = 1;
//         }
//         if (map[nums[i]] === majorityNum) return nums[i];
//     }
// }
let nums = [3,2,3];

console.log(majorityElement(nums));