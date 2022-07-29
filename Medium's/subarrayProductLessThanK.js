var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let res = 0, left = 0, right = 0, product = 1;
    while(right < nums.length) {
        product *= nums[right];
        while(product >= k)  {
            product /= nums[left];
            left++;
        }
        res += right - left + 1; // if subarray is valid, count it's permutations as well
        right++;
    }
    return res;
};

let nums = [10,5,2,6], k = 100;
console.log(numSubarrayProductLessThanK(nums, k));

// too slow

// var numSubarrayProductLessThanK = function(nums, k) {
//     let count = 0;

//     const checkMultiples = (product, i) => {
//         if (product >= k || i > nums.length) return;

//         count++;
//         checkMultiples(product * nums[i], i + 1)
//     }

//     for (let i = 0; i < nums.length; i++){
//         checkMultiples(nums[i], i + 1);
//     }

//     return count;
// };