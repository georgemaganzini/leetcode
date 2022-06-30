// more info https://leetcode.com/problems/target-sum/discuss/455024/DP-IS-EASY!-5-Steps-to-Think-Through-DP-Questions.

const findTargetSumWays = function(nums, S) {
    const memo = new Map();
    const n = nums.length;

    return countWaysToSum(n - 1, S);

    function countWaysToSum(index, rem) {
        const key = `${index}#${rem}`;

        // base case
        if (index < 0) {
            if (rem === 0) return 1;
			return 0;
        }
        if (memo.has(key)) return memo.get(key);

        const plus = countWaysToSum(index - 1, rem + nums[index])
		const minus = countWaysToSum(index - 1, rem - nums[index]);
	    const count = plus + minus;

        memo.set(key, count);
        // console.table(memo)
        return count;
    }
};



let nums = [1,1,1,1,1], target = 3;
console.log(findTargetSumWays(nums, target));

// brute force, no DP
// var findTargetSumWays = function(nums, target) {
//     let ways = 0;

//     const dfs = (i, curSum) => {
//         if (i === nums.length){
//             if (curSum === target) ways++;
//             return;
//         }

//         dfs(i + 1, curSum + nums[i]);
//         dfs(i + 1, curSum - nums[i]);
//     }

//     dfs(0, 0);
//     return ways;
// };
