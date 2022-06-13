// walk from left to right, expand pointers outward from each position
// handle odd and even length palindromes
// dont forget to DECREMENT left while INCREMENTing count and right

var countSubstrings = function(s) {
    let count = 0;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]){
            count++;
            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++){
        expand(i, i);
        // if (i+1 < s.length) unnecessary, while loop requirements cover i > s.length
        expand(i, i + 1)
    }
    return count;
};

let s = "abc";
console.log(countSubstrings(s));