var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;

    // skip intervals that end before newInterval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]){
        result.push(intervals[i]);
        i++;
    }

    // now that we know start of where overlaps happen,
    // begin merging where current index's start is less than or equal to newInterval's end;
    // continue until current interval start is no longer less than or equal to newInterval's end;
    while (i < intervals.length && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    result.push(newInterval);

    // finish iterating over intervals and add to results;
    while (i < intervals.length){
        result.push(intervals[i]);
        i++;
    }

    return result;
}



let intervals = [[1,3],[6,9]], newInterval = [2,5];
console.log(insert(intervals, newInterval));