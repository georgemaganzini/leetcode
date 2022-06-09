// Uses binary search to determine where new number belongs in final subarray "sorts" the numbers as they build in increasing order,
// when a non-increasing number is found, places it in the highest valid index possible. Cleverly overwrites dp indicies in a such a way
// that the longest consecutive subarray is still stored until it is surpassed, uncomment lines 26, 58 for visualization

var lengthOfLIS = function(nums) {
    const binarySearchPosition = (dp, target, hi) => {
        let lo = 0;
        while (lo <= hi) {
            let mid = Math.floor((lo+hi)/2);
            // if we get a repeat number basically just have it overwrite itself in dp[]
            if (target === dp[mid]) return mid;
            // go under all the "Infinity"s as well as other numbers greater than target
            else if (target < dp[mid]) hi = mid-1;
            // go above any numbers target is greater than
            else lo = mid+1;
        }
        // lo represents 1 index above ~largest~ number that target is greater than
        return lo;
    }

    if (nums === null || nums.length===0) return 0;
    if (nums.length === 1) return 1;
    let dp = new Array(nums.length).fill(Infinity);
    for (let i=0; i<nums.length; i++){
        let pos = binarySearchPosition(dp, nums[i], i);
        // console.log("target:",nums[i], "index:",i, "\n", dp)
        dp[pos] = nums[i];
    }

    for (let i = dp.length-1; i >= 0; i--){
        if (dp[i] !== Infinity) return i+1;
    }

    return 0;
};


// DP version is very concise
// Simply check if potential next number is valid (greater than current)
// if so, add 1 to memo representing next index, then set current's memo
// to the max of it's current val or the next index's + 1

// var lengthOfLIS = function(nums) {
//     let dp = Array(nums.length).fill(1);

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++){
//             if (nums[i] > nums[j]){
//                 dp[i] = Math.max(dp[i], 1 + dp[j])
//             }
//         }
//     }
//     return Math.max(...dp);

// };

let nums = [10,9,2,5,3,7,101,18];
// nums = [10,11,12,13,14,1,2,3];
console.log(lengthOfLIS(nums));