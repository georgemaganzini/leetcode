const dfs = (x, y, grid) => {
    if (x >= grid.length || y >= grid[0].length || y < 0 || x < 0 || grid[x][y] != 1) return 0

    grid[x][y] = 0;

    let north = dfs(x - 1, y, grid);
    let south = dfs(x + 1, y, grid);
    let east = dfs(x, y + 1, grid);
    let west = dfs(x, y - 1, grid);

    return 1 + north + south + east + west;
}

var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            maxArea = Math.max(maxArea, dfs(i, j, grid, 0));
        }
    }

    return maxArea;
};


let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(grid));