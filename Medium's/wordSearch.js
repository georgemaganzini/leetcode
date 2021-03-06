var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let path = new Set();

    const dfs = (r, c, i) => {
        if (i == word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || word[i] != board[r][c] || path.has(`(${r},${c})`)) return false;

        path.add(`(${r},${c})`);
        let res = ((dfs(r + 1, c, i + 1)) ||
                (dfs(r - 1, c, i + 1)) ||
                (dfs(r, c + 1, i + 1)) ||
                (dfs(r, c - 1, i + 1)));
        // console.log("pre del", r, c, path)
        path.delete(`(${r},${c})`);
        // console.log("post del", path)
        return res;
    }

    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];

let word = "ABCB";

console.log((exist(board, word)));
