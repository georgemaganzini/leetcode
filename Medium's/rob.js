// original dynammic programming method -> if choosing to rob a house, check if
// we have had a higher loot total before in this spot
// alternatively it is a variation on fib, just check max from one before and two before


var rob = function(nums) {
    /*
    O(n) time, O(1) space

	- Bottom up strategy
	- Iterative
	- Memoization

	Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    */

    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let maxAtTwoBefore = nums[0];
    let maxAtOneBefore = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxAtCurrent;
    }

    return maxAtOneBefore;
};



// var rob = function(nums) {
//     let max = 0;

//     let topScore = [];

//     const dfs = (curr, i) => {
//         if (i > nums.length - 1) {
//             max = Math.max(curr, max);
//             return;
//         }

//         if (curr + nums[i] > topScore[i] || topScore[i] === undefined) {
//             topScore[i] = curr + nums[i];
//             dfs(curr + nums[i], i + 2)
//         }

//         dfs(curr, i + 1)


//     }

//     dfs(0, 0);
//     return max;
// };

// let nums = [1,2,3,1];

// console.log((rob(nums)));