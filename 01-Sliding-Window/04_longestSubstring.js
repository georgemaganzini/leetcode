const longestSubstringKDistinct = (string, k) => {
    let windowStart = 0
    let longest = 0;
    let charFrequency = {};

    // loop to try to extend range
    for (let windowEnd = 0; windowEnd < string.length; windowEnd++){
        const rightChar = string[windowEnd];
        if(!(rightChar in charFrequency)){
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;
        // shrink the sliding window, until we are left with 'k distinct characters in
        // the charFrequency
        while (Object.keys(charFrequency).length > k){
            const leftChar = string[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0){
                delete charFrequency[leftChar];
            }
            windowStart += 1; // shrink the window
        }
        // remember the max length so far
        longest = Math.max(longest, windowEnd - windowStart + 1);
    }

    return longest;
}

let string = "araaci";
let k = 3;

console.log(longestSubstringKDistinct(string, k));