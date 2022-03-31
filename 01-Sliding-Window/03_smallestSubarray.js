const smallestSubarray = (arr, s) => {
    // Validate input array, initialize smallest answer so far to array length if possible, otherwise set to -1 to indicate error
    let smallest = arr.reduce((acc, curr) => acc + curr) >= s ? arr.length : -1

    let sum = 0;
    let start = 0;
    let currLen = 0;

    // interate over "end" as usual, summing as we go
    for (let windowEnd =0; windowEnd < arr.length; windowEnd++){
        sum += arr[windowEnd];

        // use a while loop to count length, check if its less than smallest, subtract start
        // repeat until no longer >= s
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