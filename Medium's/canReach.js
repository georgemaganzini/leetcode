const canReach = (arr, start) => {
    const val = arr[start];
    if (val === 0) return true;
    if (val === -1) return false;
    arr[start] = -1;
    return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};

let arr = [4,2,3,0,3,1,2], start = 5 // true

console.log(canReach(arr, start))