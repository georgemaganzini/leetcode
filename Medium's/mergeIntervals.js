var merge = function(intervals) {
    // if (intervals.length < 2) return intervals;

    // sort by start value
    intervals.sort((a, b)=> a[0] - b[0]);

    let mergedIntervals = [];

    // set initial interval as start and end
    let start = intervals[0][0];
    let end = intervals[0][1];

    // interate starting at index 1
    for (let i = 1; i < intervals.length; i++){
        let curStart = intervals[i][0];
        let curEnd = intervals[i][1];
        if (curStart <= end){
            end = Math.max(curEnd, end)
        } else {
            mergedIntervals.push([start, end]);
            start = curStart;
            end = curEnd;
        }
    }
    mergedIntervals.push([start, end]);
    return mergedIntervals;
};


let intervals = [[1,3],[2,6],[8,10],[15,18]];

console.log(merge(intervals))
