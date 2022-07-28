/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    let prev;
    let current;

    for (let i = 0; i < numRows; i++){
        current = [];
        prev = result[result.length - 1];
        for (let j = 0; j < i + 1; j++){
            if (j === 0 || j === prev.length) current[j] = 1;
            else current[j] = prev[j-1] + prev[j]
        }
        result.push(current);
    }

    return result;
};

let numRows = 5 // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

console.log(generate(5))