/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++){
        if (s[i] in mapS) {
            if (mapS[s[i]] !== t[i]) return false;
        } else {
            if (t[i] in mapT) return false;
            mapT[t[i]] = s[i]
            mapS[s[i]] = t[i]
        }
    }

    return true;

};

let s = "eggz", t = "addd"; // true;

console.log(isIsomorphic(s, t))