const Heap = require('collections/heap');

var kClosest = function(points, k) {
    // iterate over points, add to minHeap
    // let minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));
    let result = [];

    for (let i = 0; i < points.length; i++){
        // ignoring sqrt for distance
        let diagDist = points[i][0]**2 + points[i][1]**2
        // need to store original coords
        // minHeap.push([diagDist, points[i]]);
        result.push([diagDist, points[i]]);
    }
    // for (let i = 0; i < k; i++){
    //     result.push(minHeap.pop()[1]);
    // }
    result.sort((a, b) => a[0] - b[0]);

    let finalResult = [];

    for (let i = 0; i < k; i++){
        finalResult.push(result[i][1]);
    }

    return finalResult;
};

let points = [[1, 3], [-2, 2]], k = 1;

console.log(kClosest(points, k));