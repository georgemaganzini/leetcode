// non bitwise:
// var missingNumber = function(nums) {
//     let sum = 0
//     for (let i = 0; i < nums.length + 1; i ++) sum += i
//     const subSum = nums.reduce((a, b)=> a + b)
//     return sum - subSum
// };

// with series formula:
// var missingNumber = function(nums) {
//     let len = nums.length;//length of array.
//     let sum = (len*(len+1))/2; // sum of all nos from 0 to n by series formula
//     let sum2 = nums.reduce((a,c)=> a+c); //sum of array elements.
//     return sum-sum2; //difference is the answer
// };

// bitwise:

var missingNumber = function(nums) {
    return nums.reduce((acc, cur, i) => acc ^= i ^ cur, nums.length);
};



console.log(missingNumber([1, 2, 3, 4]))