var sortedSquares = function(nums) {
  const n = nums.length;
  const squares = Array(n).fill(0);
  let highestSquareIndex = n - 1;
  let left = 0;
  let right = n - 1;

  while (left <= right){
    let leftSquare = nums[left]**2
    let rightSquare = nums[right]**2
    if (leftSquare > rightSquare) {
      squares[highestSquareIndex] = leftSquare
      left++
    } else {
      squares[highestSquareIndex] = rightSquare
      right--
    }

    highestSquareIndex--
  }
  return squares;
}

let nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))

// make an array, and fill it with largets values first, use two pointers to work inwards as highest (squared/absolute) values will be on either edge