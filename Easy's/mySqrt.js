// w/ binary search:

  var mySqrt = function(x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};

// The tricky point is that we will return right if there is no square root found.

// The reason is the square root is between [n-1, n] and we can know that when while is broken right must be n-1

// brute force

// const mySqrt = function(x) {
//     let result = 1;
//     while (result*result <= x) result++;
//     return result - 1;
// };