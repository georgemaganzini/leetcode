var spiralOrder = function(matrix) {

};

// [0][0] -> [0][n], [0][n] -> [m][n]
// [m][n] -> [m][0], [m][0] -> [1][0]


// every 4th direction change, start going one less than previous max length or width (m or n initially)
// flag element as 0 after added to results array, end when 0 is encountered