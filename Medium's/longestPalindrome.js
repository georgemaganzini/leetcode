// expand pointers from center when checking if substring is a palindrome
// O(n^2), instead of 0(n^3) (brute force check every possible substring from outwards->in)
// i.e. check every letter (n) as potential center, rather than check every possible substring (n^2)
// edge cases around even vs odd length palindrome, sometimes around s.length of 0,1,2 (the latter relevant with this setup)

var longestPalindrome = function(s) {
    let max = '';
    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i--;
            j++;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }
    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters
        const odd = findLongestPalindrome(s, i, i);
        const even = findLongestPalindrome(s, i, i + 1);
        const longer = odd.length > even.length ? odd : even;

        max = longer.length > max.length ? longer : max

    }
    return max;
};

let s = "ac";
console.log(longestPalindrome(s));

// my original,

var longestPalindrome = function(s) {
    let max = "";

    const checkPalindromeLength = (curr, l, r) => {
        if (l < 0 || r > s.length - 1) return;

        if (s[l]===s[r]) {
            if (l !== r) curr = s[l] + curr + s[r]
            max = curr.length > max.length ? curr : max;
            checkPalindromeLength(curr, l-1, r+1);
        }

        return;
    }

    for (let i = 0; i < s.length; i++){
        checkPalindromeLength("", i, i+1);
        checkPalindromeLength(s[i], i, i);
    }

    return max;
}