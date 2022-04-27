function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}

// same as:

// function singleNumber(nums) {
//   let num = 0;
//   for (let n of nums) {
//     num ^= n;
//   }
//   return num;
// }

// var singleNumber = function(nums) {
//     let mapper = new Map();
//     for (let i =0; i < nums.length; i++){
//         if (mapper.has(nums[i])){
//             mapper.delete(nums[i])
//         } else mapper.set(nums[i], 1)
//     }
//     for (const key of mapper.keys()){
//         return key
//     }
// };

nums = [4,1,2,1,2]

console.log(singleNumber(nums))