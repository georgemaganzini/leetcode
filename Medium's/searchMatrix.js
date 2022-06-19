const searchMatrix = (matrix, target) => {
  const line = binSearch(target, 0, matrix.length, i => matrix[i][0])
  const item = binSearch(target, 0, matrix[line].length, i => matrix[line][i])
  return matrix[line][item] === target
}

const binSearch = (target, lo, hi, fn) => {
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2)
    const value = fn(mid)
    if (value === target)
      return mid
    if (value < target)
      lo = mid
    else
      hi = mid
  }
  return lo
}


// var searchMatrix = function(matrix, target) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;
//     let left = 0;
//     let right = rows * cols - 1;

//     // less than OR equal to because we are looking for an exact number, but it might not be present
//     // therefore we need to check the last possible number
//     while (left <= right){
//         // dont divide by two because we are dealing with a matrix;
//         // however this is now becomes O(n), previous solution with 2x binary search was better
//         let mid = Math.floor(left + (right - left));
//         let midVal = matrix[Math.floor(right/cols)][right%cols];
//         console.log(midVal)

//         if (midVal === target) return true;

//         if (target < midVal) right = mid - 1;
//         else left = mid + 1;

//     }
//     return false;
// };

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;
console.log(searchMatrix(matrix, target));