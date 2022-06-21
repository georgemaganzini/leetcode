// using binary search to determine window

var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k; // -k because we are looking for window start, and do not want window to go out of bounds

    while (left < right) {
        let mid = Math.floor(left + (right - left)/2)
        if (x - arr[mid] > arr[mid + k] - x) left = mid + 1;
        else right = mid; // no -1 here because tiebreaker is lower number i.e. rather have the window 1 to the left than psuedorandomily determined
    }


    return arr.slice(left, left + k);
};

let arr = [1,1,1,10,10,10], k = 1, x = 9;
console.log(findClosestElements(arr, k, x));