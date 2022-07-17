var strStr = function(haystack, needle) {
    let indexOfStart = -1;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]){
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] !== haystack[i + j]) break;
                else if (j === needle.length - 1) return i;
            }
        }
    }
    return indexOfStart;
};
let haystack = "mississippi", needle = "issip";

console.log(strStr(haystack, needle));