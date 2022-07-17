// TODO: review

// non recursive version w/o binary search is faster:

const searchMatrix = (matrix, target) => {
    if(!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = 0, col = matrix[0].length - 1;
    while(row < rows && col >= 0) {
        if(matrix[row][col] === target) {
            return true;
        }
        if(matrix[row][col] < target) {
            row++;
        }else {
            col--;
        }
    }
    return false;
};

var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length) return false;

    const rows = matrix.length - 1;
    const cols = matrix[0].length - 1;

    const hasTarget = (startRow, endRow, startCol, endCol) => {
        if (startRow > endRow || startCol > endCol) return false;

        const middleRow = Math.floor((endRow - startRow) / 2) + startRow;
        const middleCol = Math.floor((endCol - startCol) / 2) + startCol;

        if (matrix[middleRow][middleCol] === target) return true;

        if (matrix[middleRow][middleCol] < target) {
			// let m - is our middle point.
			// if m less than the target than all points before m also less tha target (marked by x)
			// so we only need look through cells marked by 1 and 2
			// x x x 2 2
			// x x x 2 2
			// x x m 2 2
			// 1 1 1 1 1
			// 1 1 1 1 1
            return hasTarget(middleRow + 1, endRow, startCol, endCol) ||
                   hasTarget(startRow, middleRow, middleCol + 1, endCol);
        } else {
			// let m - is our middle point.
			// if m more than the target than all points after m also bigger than the target (marked by x)
			// so we only need look through cells marked by 1 and 2
			// 1 1 2 2 2
			// 1 1 2 2 2
			// 1 1 m x x
			// 1 1 x x x
			// 1 1 x x x
            return hasTarget(startRow, endRow, startCol, middleCol - 1) ||
                   hasTarget(startRow, middleRow - 1, middleCol, endCol);
        }
    }

    return hasTarget(0, rows - 1, 0, cols - 1);
}
let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;

console.log(searchMatrix(matrix, target));