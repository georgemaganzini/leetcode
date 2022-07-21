var sortColors = function(nums) {
    // all elements < low are 0, and all elements > high are 2
  // all elements from >= low < i are 1
  let low = 0,
    high = nums.length - 1,
    i = 0;
  while (i <= high) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]]; // swap
      // increment 'i' and 'low'
      i += 1;
      low += 1;
    } else if (nums[i] === 1) {
      i += 1;
    } else { // the case for nums[i] === 2
      [nums[i], nums[high]] = [nums[high], nums[i]]; // swap
      // decrement 'high' only, after the swap the number at index 'i' could be 0, 1,
      // or 2
      high -= 1;
    }
  }
};

let nums = [2,0,2,1,1,0];
console.log(sortColors(nums));