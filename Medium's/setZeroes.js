// A straightforward solution using O(mn) space is probably a bad idea.
//      i.e. making a second matrix
// A simple improvement uses O(m + n) space, but still not the best solution.
//      i.e. storing which whole rows/columns to zero
// Could you devise a constant space solution?

var setZeroes = function(matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    let rows = new Array(rowLength).fill(1);
    let columns = new Array(colLength).fill(1)



    return matrix;
};