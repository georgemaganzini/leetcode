var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    const hash = {};

    for (let end = 0; end < s.length; end++){
        let rightChar = s[end];
        hash[rightChar] = hash[rightChar] + 1 || 1;

        while (hash[rightChar] > 1){
            let leftChar = s[start];

            if (hash[leftChar] > 1){
                hash[leftChar]--;
            } else {
                delete hash[leftChar];
            }

            start++;
        }

        max = Math.max(max, (end - start) + 1);
    }
    return max;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));