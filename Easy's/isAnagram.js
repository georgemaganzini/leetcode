/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let freq = {};

    for (char of s){
        freq[char] = ++freq[char] || 1;
    }


    for (char of t){
        freq[char]--;
        if (freq[char] === 0) delete freq[char];
    }

    return Object.keys(freq).length === 0;
};


let s = "anagram", t = "nagaram"; // true;
console.log(isAnagram(s, t))