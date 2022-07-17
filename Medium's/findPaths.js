// TODO: review

var findPaths = function(m, n, maxPath, i, j, memo = new Map()) {
    const key = maxPath + ',' + i + ',' + j;

    if (memo.has(key)) return memo.get(key);

    const isOutside = i === -1 || i === m || j === -1 || j === n;

    if (maxPath === 0 || isOutside) return +isOutside;

    memo.set(key, (
          findPaths(m, n, maxPath - 1, i - 1, j, memo)
        + findPaths(m, n, maxPath - 1, i + 1, j, memo)
        + findPaths(m, n, maxPath - 1, i, j + 1, memo)
        + findPaths(m, n, maxPath - 1, i, j - 1, memo)
    ) % 1000000007);


    return memo.get(key);
};
let m = 8, n = 7, maxMove = 16, startRow = 1, startColumn = 5;

console.log(findPaths(m, n, maxMove, startRow, startColumn));