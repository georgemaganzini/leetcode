const smallestSubarray = (arr, s) => {
    let smallest = arr.reduce((acc, curr) => acc + curr) >= s ? arr.length : -1

    let sum = 0;
    let start = 0;
    let currLen = 0;
    for (let windowEnd =0; windowEnd < arr.length; windowEnd++){
        sum += arr[windowEnd];

        while (sum >= s){
            currLen = windowEnd - start + 1
            smallest = currLen < smallest ? currLen : smallest;
            sum -= arr[start]
            start++;
        }
    }

    return smallest ? smallest : "total array value is less than target"
}

let arr = [3, 4, 1, 1, 6];
let s = 8;

console.log(smallestSubarray(arr, s));