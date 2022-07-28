// lots of edge cases
// convert s to array, comparte lengths
// use Object.values(map).includes instead of x in Object.values

// can also call Set on sArray & pattern to skip Object.includes check later
// also can make a second map that is reversed

var wordPattern = function(pattern, s) {
    let map = {};
    s = s.split(' ');
    if (pattern.length !== s.length) return false;
    for (let i = 0; i < pattern.length; i++){
        if (s[i] in map) {
            if (map[s[i]] !== pattern[i]) return false;
        } else if (Object.values(map).includes(pattern[i])) {
           return false;
        } else {
            map[s[i]] = pattern[i];
        }
    }

    return true;
};

let pattern = "abba", s = "dog cat cat fish"; // True

console.log(wordPattern(pattern, s));