var spiralOrder = function(matrix) {
    let res = [];
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bot = matrix.length - 1;
    let direction = "right";

    while (left <= right && top <= bot){
        if (direction==="right"){
            for (let i = left; i <=right; i++){
                res.push(matrix[top][i]);
            }
            top++;
            direction = "down";
        }
        else if (direction==="down"){
            for (let i = top; i <= bot; i++){
                res.push(matrix[i][right])
            }
            right--;
            direction = "left";
        }
        else if (direction==="left"){
            for (let i = right; i >= left; i--){
                res.push(matrix[bot][i])
            }
            bot--;
            direction = "up";
        }
        else if (direction==="up"){
            for (let i = bot; i >= top; i--){
                res.push(matrix[i][left])
            }
            left++;
            direction = "right";
        }
    }
    return res;
};
