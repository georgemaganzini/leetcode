var checkInclusion = function(s1, s2) {
    if (s1 === "" || s2 === "") {
        return false;
    }
    let m = new Map();

    for (let i = 0; i < s1.length; i++) {
        m.set(s1[i], m.get(s1[i]) + 1 || 1);
    }

    let start = 0, windowSize = s1.length;
    // number of unique characters to collect
    let counter = m.size;
    for (let end = 0; end < s2.length; end++) {
        let char = s2[end];
        if (m.has(char)) m.set(char, m.get(char) - 1);
        if (m.get(char) === 0) counter--; // we collected all occurrences of this char
        // we collected all occurrences of every character in s1
        while (counter === 0) {
            if (end-start+1 === windowSize) return true;
            if (m.has(s2[start])) m.set(s2[start], m.get(s2[start]) + 1);
            if (m.get(s2[start]) === 1) counter++; // we should collect one more unique char
            start++;
        }
    }
    return false;
};

let s1 = "ab", s2 = "eidboaoo";
console.log(checkInclusion(s1, s2));

// too slow

// var checkInclusion = function(s1, s2) {
//     let perms = [];

//     s1 = s1.split('');

//     const dfs = (i, s1) => {
//         if (i === s1.length) {
//             perms.push(s1.join('').slice());
//             return;
//         }

//         for (let j = i; j < s1.length; j++){
//             [s1[i], s1[j]] = [s1[j], s1[i]];
//             dfs(i + 1, s1);
//             [s1[i], s1[j]] = [s1[j], s1[i]];
//         }
//     }

//     dfs(0, s1);

//     console.log(perms)

//     for (let string of perms) {
//         if(s2.search(string) !== -1) return true;
//     }

//     return false;
// };
