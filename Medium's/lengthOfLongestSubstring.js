// sliding window

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    const hash = {};

    // iterate with end
    for (let end = 0; end < s.length; end++){
        let rightChar = s[end];
        hash[rightChar] = hash[rightChar] + 1 || 1;

    // when duplicate letter is detected, start shrinking window from left until no value is > 1
        while (hash[rightChar] > 1){
            let leftChar = s[start];

            if (hash[leftChar] > 1){
                hash[leftChar]--;   // decrement if > 1
            } else {
                delete hash[leftChar]; // otherwise delete
            }

            start++;    // increment left pointer to keep shrinking window until it is valid
        }

        max = Math.max(max, (end - start) + 1); // take math.max at each iteration after checking that no values exceed 1
    }
    return max;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));