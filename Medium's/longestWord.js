var longestWord = function(words) {
    // default sort is aligned with problem goals (by length and lexigraphical order)
    words.sort();
    let dp = new Set();
    dp.add("");
    let res = "";
    for (let word of words){
        if (dp.has(word.slice(0, -1))){
            dp.add(word);
            // don't need to check lexigraphical order since we already sorted
            if (word.length > res.length) res = word;
        }
    }
    return res;
};

let words = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]
console.log(longestWord(words));
