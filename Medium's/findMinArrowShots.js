// the while loop in function below: finds area of overlap between intervals
// then tries to check that if that overlap area overlaps with the next interval
// continues until it no longer can find more overlaps, then takes a shot
// (increments shots, moves i to j (next non overapping integer), and repeats the process)

var findMinArrowShots = function(arr) {
    arr.sort((a,b) => a[0] - b[0]);
    let shots = 0;
    for(let i=0; i<arr.length; i++){
        let j = i;
        let [xStart, xEnd] = arr[i];
        // make sure j+1 is in bounds and check if they overlap
        while(j+1 < arr.length && xEnd >= arr[j+1][0]  ){
            // move new start to the larger of the two
            xStart = Math.max(xStart, arr[j+1][0]);
            // move new end to the lesser of the two
            xEnd = Math.min(xEnd, arr[j+1][1]);
            j++;
        }
        // after finding window where most overlap, take a shot and move i to j
        shots++;
        i=j;
    }
    return shots
};

// const shootArrow = (arrow, targets) => {
//     let remaining = [];
//     for (let interval of targets) {
//         if (!(arrow >= interval[0] && arrow <= interval[1])) remaining.push(interval);
//     }
//     return remaining;
// }

// var findMinArrowShots = function(points) {
//     points.sort((a, b) => a[1] - b[1]);
//     let counter = 0;

//     while (points.length) {
//         points = shootArrow(points[0][1], points);
//         counter++;
//     }

//     return counter;
// };

// let points = [[10,16],[2,8],[1,6],[7,12]];

// console.log(findMinArrowShots(points));
