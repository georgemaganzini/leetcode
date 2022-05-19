var spiralOrder = function(matrix) {
    let res = [];
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bot = matrix.length - 1;
    let goRight = true;

    while ((left <= right) && (top <= bot)){
        if (goRight){
            for (let i = left; i <=right; i++){
                res.push(matrix[top][i]);
            }
            top++;
            goRight = false;
        }
        if (!goRight){
            for (let i = top; i <= bot; i++){
                res.push(matrix[i][right])
            }
            right--;
            goRight = true;
        }
    }
    return res;
};
