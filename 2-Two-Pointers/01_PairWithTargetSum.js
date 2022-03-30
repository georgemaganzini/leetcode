const pairWithTargetSum = (arr, targetSum) => {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) return [left, right];
        if (targetSum > currentSum) left += 1; // we need a pair with a bigger sum
        else right -= 1; // we need a pair with a smaller sum
    }
    return [-1, -1];
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairWithTargetSum([2, 5, 9, 11], 11));

// Alternate approach with HashTable

const pair_with_target_sum = (arr, targetSum) => {
    const nums = {}; // to store numbers and their indices
    for (let i =0; i< arr.length; i++){
        const num = arr[i];
        if (targetSum - num in nums) return [nums[targetSum - num], i];
        nums[arr[i]] = i;
    }
    return [-1, -1];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));