var uniquePaths = function(m, n) {
    const table = Array(m).fill(Array(n));

    // fill straight right and straight down paths with 1 possibility
    for (let i = 0; i < m; i++) table[i][0] = 1;
    for (let i = 0; i < n; i++) table[0][i] = 1;


    // iterate over everything else and sum grid location north and west of current location
    for (let i = 1; i < table.length; i++) {
        for (let j = 1; j < table[i].length; j++){
            table[i][j] = table[i-1][j] + table[i][j-1];
        }
    }

    return table[m-1][n-1];
};

let m = 3, n = 2;
console.log(uniquePaths(m, n));
