var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let path = new Set()

    const dfs = (r, c, i) => {
        if (i == word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || word[i] != board[r][c] || (r,c) in path) return false;

        path.add((r,c));
        let res = (dfs(r + 1, c, i + 1)) ||
                (dfs(r - 1, c, i + 1)) ||
                (dfs(r, c + 1, i + 1)) ||
                (dfs(r, c - 1, i + 1));
        path.remove((r,c));
        return res;
    }

    for (let i = 0; i < )
};