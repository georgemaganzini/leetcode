/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    if (k%matrix[0].length) {
         skip = Math.floor(k / matrix[0].length);
         remainder = k%matrix[0].length - 1;
         return matrix[skip][remainder];
    } else return matrix[k/matrix[0].length - 1][matrix[0].length - 1];
};