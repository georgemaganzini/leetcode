// still need to review

var findNumberOfLIS = function(nums) {
    let dp = {};
    let lenLIS = 0;
    let res = 0;


    for (let i = nums.length - 1; i > -1; i--){
        let maxLen = 1,
            maxCnt = 1;

        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] > nums[i]){
                [length, count] = dp[j];
                if (length + 1 > maxLen){
                    maxLen = length + 1;
                    maxCnt = count;
                } else if (length + 1 === maxLen){
                    maxCnt += count;
                }

            }
        }

        if (maxLen > lenLIS){
            lenLIS = maxLen;
            res = maxCnt;
        } else if (maxLen == lenLIS){
            res += maxCnt;
        }
        dp[i] = [maxLen, maxCnt]
    }

    return res;
};

let nums = [1, 3, 5, 4, 7];
console.log(findNumberOfLIS(nums));

// alt 1

// var findNumberOfLIS = function(nums) {
//     // We initialize an array named "tracker" to track the longest increasing subsequence ending at each
//     // index and initialize all positions with 1 as each item in nums can be considered as subsequence in
//     // itself.
//     let tracker = new Array(nums.length).fill(1);


//     // While tracking, we will realize that at times there is more than one set of preceding items in nums
//     // that can make the longest increasing subsequence that end at the index we are currently processing.
//     // The best way to track this is in a seperate array called frequency. Each element will here is
//     // initialized to 1. This signifies that initially, there can only be a single longest
//     // subsequence ending at any index.
//     let frequency = new Array(nums.length).fill(1);

//     // Now let's start processing from left to right, starting with the second element at index 1
//     // Skipping first element as we cannot find a subsequence longer than 1 that can end at index 0.
//     for(let i = 0; i < nums.length; i++){
//         // Now let's compare it with every element before it
//         for(let j = 0; j < i; j++){

//             // VERIFY: Quick verification that j can be a part of a strictly increasing subsequence ending
//             // at i
//             if(nums[j] < nums[i]){

//                 // CASE 1: Is Connecting i to the subsequence ending at j makes a subsequence larger that
//                 // any other subsequence that has ended at i. This increases the subsequence ending at j
//                 // by just 1 hence the addition.
//                 if(tracker[i] < tracker[j]+1){
//                     // we update longest subsequence ending at i
//                     tracker[i] = tracker[j]  + 1;

//                     // The new longest subsequence length is created by any and every path that could have
//                     // ended at the jth index. Hence we set i's frequency same as j.
//                     frequency[i] = frequency[j];
//                 } else if(tracker[i] === tracker[j]  + 1){

//                     // CASE 2: This means this is not the first time we found a j that helps make the
//                     // longest subsequence ending at i. Since length of subsequence itself didn't change,
//                     // no updates have to be made to the tracker array.

//                     // But this still needs to be tracked in our frequency array. So we add frequency of
//                     // all longest subsequences that end at j to our frequency tracker for i.
//                     frequency[i] += frequency[j];
//                 }
//             }
//         }
//     }

//     // FINALLY:
//     // 1. We find the longest path we ever saw using our tracker array
//     const longestPath = Math.max(...tracker);

//     // 2. For each index/element that had the longest path end at it, we add it's frequency to our
//     // overall result
//     let result = 0;
//     for(let k = 0; k < nums.length; k++){
//         if(tracker[k] === longestPath) result += frequency[k];
//     }

//     return result;
// };

// alt 2

// Find the longest increasing subsequence

// a. At each interaction, check whether the longest subsequence ending up with index j is 'extendable', i.e. whether nums[j] < nums[i]

// b. If so, then dp[i] = Math.max(dp[j]+1, dp[i])

// Count the number of longest increasing subsequence

// a. At each interation, if the dp[i] can be updated to a greater value, that means we have longer increasing subsequence(s) by extending from index j. The number of them is equal to the number of subsequence at j, i.e. count[i] = count[j].

// b. If the dp[i] is equal to 'the greatest value' we currently have, then count[i] += count[j]

// c. The total count is equal to the sum of count of longest increasing subsequence

// var findNumberOfLIS = function(nums) {
//     let dp = Array(nums.length).fill(1);
//     let count = Array(nums.length).fill(1);

//     let maxLen = 0;
//     for(let i = 0; i < nums.length; i++) { // current one
//         for(let j = 0; j < i; j++) { // compare to previous ones
//             if(nums[j] < nums[i] && dp[j]+1 > dp[i]) {
//                 dp[i] = dp[j]+1;
//                 count[i] = count[j];
//             } else if(nums[j] < nums[i] && dp[j]+1 === dp[i]) {
//                 count[i] += count[j];
//             }
//         }
//         maxLen = Math.max(dp[i], maxLen);
//     }

//     let res = 0;
//     for(let i = 0; i < count.length; i++) {
//         if(dp[i] === maxLen) res += count[i];
//     }

//     return res;
// };