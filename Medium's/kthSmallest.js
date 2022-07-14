// binary search version

var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1];
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        let count = 0;
        for (let i = 0;i<matrix.length;i++) {
            for (let j=0;j<matrix.length;j++) {
                // we have set an arbitraty mid, test to see how many numbers fall under it
                if (matrix[i][j] <= mid) count++;
                else break; // skip this row when matrix[i][j] exceeds value
            }
        }
        if (count < k) lo = mid+1; // our window is too small, make it bigger
        else hi = mid; // our window is too big
    }
    return lo
};


let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], k = 5;
console.log(kthSmallest(matrix, k))

// const {
//   PriorityQueue,
//   MinPriorityQueue,
//   MaxPriorityQueue,
// } = require('@datastructures-js/priority-queue');


// const kthSmallest = function(matrix, k) {
//     let preQueue = new Map();
//     const q = new MaxPriorityQueue();

//     let counter = 0;
//     let exit = false;

//     // go "right" k times
//     for(let i = 0; i < matrix.length; i++) {
//         for(let j = 0; j < matrix.length; j++){
//             counter++;
//             if(counter > k) {
//                 exit = true;
//                 break;
//             }
//             if (!preQueue.has(`[${i}][${j}]`)) preQueue.set(`[${i}][${j}]`, matrix[i][j])
//         }
//         if (exit) break;
//     }

//     counter = 0;
//     exit = false;
//     console.log(k)

//     // go "down" k times
//     for(let i = 0; i < matrix.length; i++) {
//         for(let j = 0; j < matrix.length; j++){
//             counter++;
//             if (counter > k) {
//                 exit = true;
//                 break;
//             }
//             if (!preQueue.has(`[${j}][${i}]`)) preQueue.set(`[${j}][${i}]`, matrix[j][i])
//         }
//         if (exit) break;
//     }

//     console.table(preQueue);
//     preQueue.forEach((value) => q.enqueue(value))
//     console.log(q.toArray())

//     console.log(q.size(), k)

//     while (q.size() > k) q.dequeue();


//     return q.front();
// };
