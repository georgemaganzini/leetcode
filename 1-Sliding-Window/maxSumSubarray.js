const maxSubarray = (arr, k) => {
    let sum = 0;
    let start = 0;
    let highest = 0;

    // important that we are tracking the END here, therefore we iterate until arr.length, not arr.length - k + 1 etc.
    // keeping the variable names as semantic and accurate helps with bugfixing and mental models
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        sum += arr[windowEnd];

        // here k - 1 is important
        if (windowEnd >= k - 1){
            highest = sum > highest ? sum : highest
            sum -= arr[start]
            start++
        }
    }

    return highest
}


let nums = [2, 1, 5, 1, 3, 2]

console.log(maxSubarray(nums, 3))