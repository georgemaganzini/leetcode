// try/catch for 1st degree out of bounds (i)
// detect 2nd degree out of bounds with undefined

var surfaceArea = function(grid) {
    let total = 0;
    let value;

    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid.length; j++){
            // top/bottom
            if (grid[i][j] > 0) total += 2;

            // north-facing side
            try {
                value = grid[i-1][j]
            } catch {
                value = 0;
            }
            total += Math.max(grid[i][j] - value, 0);

            // south-facing side
            try {
                value = grid[i+1][j]
            } catch {
                value = 0;
            }
            total += Math.max(grid[i][j] - value, 0);

             // east-facing side
            value = grid[i][j+1] === undefined ? 0 : grid[i][j+1]
            total += Math.max(grid[i][j] - value, 0);

            // west-facing side

            value = grid[i][j-1] === undefined ? 0 : grid[i][j-1]
            total += Math.max(grid[i][j] - value, 0);
        }
    }
    return total;
};

let grid = [[1,2],[3,4]];
console.log(surfaceArea(grid));