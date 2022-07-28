var getRow = function(rowIndex) {
    let prev;
    let current = [1];

    for (let i = 1; i <= rowIndex; i++){
        prev = current;
        current = [];
        for (let j = 0; j < i + 1; j++){
            if (j === 0 || j === prev.length) current[j] = 1;
            else current[j] = prev[j-1] + prev[j]
        }
    }

    return current;
};
