// A straightforward solution using O(mn) space is probably a bad idea.
//      i.e. making a second matrix
// A simple improvement uses O(m + n) space, but still not the best solution.
//      i.e. storing which whole rows/columns to zero
// Could you devise a constant space solution?
    // flag matrix[0][0-colLength] as null to indicate column needs to be zeroed
    // flag matrix[1-roWlength][0] as null to indicate row need to be zeroed
    // use O(1) extra space to indicate if 1st (0th) row needs to be zeroed

var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowIndicator = false;

    for (let r =0; r < rows; r++){
        for (let c = 0; c < cols; c++){
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0
                if (r > 0){
                    matrix[r][0] = 0
                } else {
                    firstRowIndicator = true;
                }
            }
        }
    }

    for (let r = 1; r < rows; r++){
        for (let c = 1; c < cols; c++){
            if (matrix[0][c] === 0 || matrix[r][0] === 0){
                matrix[r][c] = 0
            }
        }
    }

    if (matrix[0][0] === 0){
        for (let r = 0; r< rows; r++){
            matrix[r][0] = 0
        }
    }

    if (firstRowIndicator){
        for (let c = 0; c < cols; c++){
            matrix[0][c] = 0
        }
    }


    return matrix;
};