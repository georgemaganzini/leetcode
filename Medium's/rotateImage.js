var rotate = function(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;

    while (left < right){
        for (let i =0; i < right - left; i++){
            let top = left;
            let bottom = right;

            // save top-left value
            let topLeft = matrix[top][left + i];

            // move bottom left into top left
            matrix[top][left + i] = matrix[bottom - i][left];

            // bottom right -> bottom left
            matrix[bottom - i][left] = matrix[bottom][right - i];

            // top right -> bottom right
            matrix[bottom][right - i] = matrix[top + i][right];

            // top left -> top right
            matrix[top + i][right] = topLeft;
        }
        right--;
        left++;
    }
};