var minDifference = function(nums) {
    // can probably be done w/o sort
    nums = nums.sort((a,b)=>a-b);
    let min = Infinity;
    let right = nums.length - 4;
    // console.log(nums)
    for (let left = 0; left < 4; left++, right++){
        let currMin = nums[right] - nums[left];
        // console.log("left:", left, "right:", right)

        min = Math.min(currMin, min);
    }

    return min || 0;
};

let nums = [20,66,68,57,45,18,42,34,37,58];
console.log(minDifference(nums))


// non-Knapsack approach, wont find optimal solution for [20,66,68,57,45,18,42,34,37,58],
// also would be awkward if high and low are equidistant, would need global view to decide
// which to remove

// var minDifference = function(nums) {
//     nums = nums.sort((a,b)=>a-b);

//     for (let i = 0; i < 3; i++){
//     console.log(nums)
//     if (nums.length <= 1) return 0;
//     let average = nums.reduce((a, b) => a + b) / nums.length;
//     let left = Math.abs(nums[0]-average);
//     let right = Math.abs(nums[nums.length-1]-average);
//     console.log("chop left?", left > right, left, right)
//     if (left > right) nums.shift();
//     else nums.pop();
//     }
//     console.log(nums.reduce((a, b) => a + b) / nums.length)
//     console.log(nums)
//     return nums[nums.length-1] - nums[0];
// };
