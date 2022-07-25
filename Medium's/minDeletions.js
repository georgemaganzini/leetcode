var minDeletions = function(s) {
    const freq = {};
    const used = new Set();
    let count = 0;

    for (let char of s) {
        freq[char] = ++freq[char] || 1;
    }

    for (let key of Object.keys(freq)){

        while (used.has(freq[key])) {
            freq[key]--;
            count++;
        }
        if (freq[key] > 0) used.add(freq[key]) // if key is decremented to zero, no need to count it
    }
    return count;
};

let s = "bbcebab" // output: 2

console.log(minDeletions(s));