var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // insert values indexed at their frequency
    for(let [num, freq] of freqMap) {
        // create a set for each frequency and add the value, if the frequency already has a value, add new value to the set
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }

    for(let i = bucket.length-1; i >= 0; i--) {
        // iterate backwards, skip if index is undefined, if multiple values, use spread operator to include all
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};

let nums = [1,1,1,2,2,3], k = 2;
console.log(topKFrequent(nums, k))

// quick-select version:

// var findKthLargest = function(nums, k) {
//     // the final position of the kth largest number in a sorted array
//     const finalIdx = nums.length - k;
//     let left = 0;
//     let right = nums.length-1;

//     while(left <= right) {
//         // random num between left and right
//         const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
//         // the final position of the pivot in a sorted array
//         const pivotIdx = pivotHelper(pivot, left, right);
//         // the target number is in its correct postion, thus return
//         if(pivotIdx === finalIdx) return nums[finalIdx];

//         // if pivotIdx is smaller we undershot, so look only on the right half
//         if(pivotIdx < finalIdx) left = pivotIdx + 1;
//         // else we overshot, so look only on the left half
//         else right = pivotIdx - 1;
//     }

//     function pivotHelper(pivot, start, end) {
//         // move the pivot to the end (get it out of the way)
//         swap(pivot, end);

//         let i = start;
//         let j = start;

//         // move smaller nums to the begining of the array
//         while(j < end) {
//             if(nums[j] <= nums[end]) {
//                 swap(i, j);
//                 i++;
//             }
//             j++;
//         }
//         // swap pivot to its final position
//         swap(i, end);
//         return i;
//     }

//     function swap(i, j) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
// };