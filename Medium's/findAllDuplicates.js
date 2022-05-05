var findDuplicates = function(nums) {
    let result = [];
    for (let i =0; i< nums.length; i++){
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) result.push(index + 1);
        nums[index] *= -1;
    }
    return result;
};
// My original solution

// var findDuplicates = function(nums) {
//     let result = Array(nums.length + 1).fill(0)

//     for (let i = 0; i < nums.length; i++) result[nums[i]]++;

//     for (let j = result.length - 1; j >= 0; j--){
//         if (result[j] == 2) result[j] = j;
//         else result[j] = 0;
//     }

//     let i = 0;
//     let j = 0;

//     while (i < result.length){
//         const val = result[i];
//         if (val) result[j++] = val;
//         i++
//     }

//     result.length = j;

//     return result
// };

let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));