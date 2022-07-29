var findAndReplacePattern = function(words, pattern) {
    let result = [];
    let patternMap = {};
    let wordMap = {};
    let currentWord;
    let currentLetter;
    let addWord;

    for (let i = 0; i < words.length; i++){
        patternMap = {};
        wordMap = {};
        addWord = true;
        currentWord = words[i];

        for (let j = 0; j < currentWord.length; j++){
            currentLetter = currentWord[j];
            if (currentLetter in wordMap) {
                if (wordMap[currentLetter] !== pattern[j]) {
                    addWord = false;
                    break;
                }
            } else {
                if (pattern[j] in patternMap) {
                    addWord = false;
                    break;
                }
                wordMap[currentLetter] = pattern[j];
                patternMap[pattern[j]] = currentLetter;
            }
        }

        if (addWord) result.push(currentWord);
    }
    return result;
};

let words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb";
console.log(findAndReplacePattern(words, pattern));
