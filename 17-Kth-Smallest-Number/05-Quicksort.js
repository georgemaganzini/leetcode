function find_Kth_smallest_number(nums, k) {
  return find_Kth_smallest_number_rec(nums, k, 0, nums.length - 1);
}

function find_Kth_smallest_number_rec(nums, k, start, end) {
  const p = partition(nums, start, end);

  if (p === k - 1) {
    return nums[p];
  }
  if (p > k - 1) { // search lower part
    return find_Kth_smallest_number_rec(nums, k, start, p - 1);
  }
  // search higher part
  return find_Kth_smallest_number_rec(nums, k, p + 1, end);
}

function partition(nums, low, high) {
  if (low === high) {
    return low;
  }

  const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
  [nums[pivotIndex], nums[high]] = [nums[high], nums[pivotIndex]];

  const pivot = nums[high];
  for (i = low; i < high; i++) {
    // all elements less than 'pivot' will be before the index 'low'
    if (nums[i] < pivot) {
      [nums[low], nums[i]] = [nums[i], nums[low]];
      low += 1;
    }
  }

  // put the pivot in its correct place
  [nums[low], nums[high]] = [nums[high], nums[low]]; //swap
  return low;
}


console.log(
    `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`);

// as there're two 5s in input array, our 3rd and 4th smallest numbers should be a '5'
console.log(
    `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`);

console.log(
    `Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`);


// Modified Quicksort w/ random pivot to avoid worst case scenario:

// function find_Kth_smallest_number(nums, k) {
//   return find_Kth_smallest_number_rec(nums, k, 0, nums.length - 1);
// }

// function find_Kth_smallest_number_rec(nums, k, start, end) {
//   const p = partition(nums, start, end);

//   if (p === k - 1) {
//     return nums[p];
//   }
//   if (p > k - 1) { // search lower part
//     return find_Kth_smallest_number_rec(nums, k, start, p - 1);
//   }
//   // search higher part
//   return find_Kth_smallest_number_rec(nums, k, p + 1, end);
// }

// function partition(nums, low, high) {
//   if (low === high) {
//     return low;
//   }

//   const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
//   [nums[pivotIndex], nums[high]] = [nums[high], nums[pivotIndex]];

//   const pivot = nums[high];
//   for (i = low; i < high; i++) {
//     // all elements less than 'pivot' will be before the index 'low'
//     if (nums[i] < pivot) {
//       [nums[low], nums[i]] = [nums[i], nums[low]];
//       low += 1;
//     }
//   }

//   // put the pivot in its correct place
//   [nums[low], nums[high]] = [nums[high], nums[low]]; //swap
//   return low;
// }


// console.log(
//     `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`);

// // as there're two 5s in input array, our 3rd and 4th smallest numbers should be a '5'
// console.log(
//     `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`);

// console.log(
//     `Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`);