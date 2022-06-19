var intervalIntersection = function(firstList, secondList) {
    let result = [];
    let i = 0;
    let j = 0;


    // use while loop to ensure we iterate over both arrays until they are completed
    while (i < firstList.length && j < secondList.length) {
        let a = firstList[i];
        let b = secondList[j];
        // check if one overlaps the other
        a_overlaps_b = a[0] >= b[0] && a[0] <= b[1];
        b_overlaps_a = b[0] >= a[0] && b[0] <= a[1];

        // push overlap section into results (max of both starts, min of both ends)
        if (a_overlaps_b || b_overlaps_a){
            result.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);
        }

        // figure out which interval to increment based on which one ends first
        if (a[1] < b[1]) i++;
        else j++;
    }

    return result;
};

let firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]];
console.log(intervalIntersection(firstList, secondList));