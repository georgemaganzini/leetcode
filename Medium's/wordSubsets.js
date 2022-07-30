var wordSubsets = function(A, B) {
    const output = []
    const freqB = Array(26).fill(0);

    for(let wordB of B) {
        const currFreq = getFreq(wordB);

        for(let i = 0; i < freqB.length; i++) {
            freqB[i] = Math.max(freqB[i], currFreq[i]);
        }
    }

    for(let wordA of A) {
        const freqA = getFreq(wordA)
        const universal = isSubset(freqA);
        if(universal) output.push(wordA);
    }

    function isSubset(freqA) {
        for(let i = 0; i < freqA.length; i++) {
            if(freqB[i] > freqA[i]) return false;
        }
        return true;
    }

    function getFreq(word) {
        const map = Array(26).fill(0);

        for(let char of word) {
            const idx = char.charCodeAt() - 'a'.charCodeAt()
            map[idx]++
        }
        return map
    }
    return output;
};
let words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"] // Output: ["facebook","google","leetcode"]
console.log(wordSubsets(words1, words2))