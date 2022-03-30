const findWordConcat = (str, words) => {
    if (words.length === 0 || words[0].length === 0) return [];

    wordFrequency = {};

    words.forEach(word => {
        if (!(word in wordFrequency)) wordFrequency[word] = 0;
        wordFrequency[word] += 1;
    });

    const resultIndices = [];
    const wordsCount = words.length;
    const wordLength = words[0].length;

    for (i = 0; i < (str.length - wordsCount * wordLength)+1; i++){
        const wordsSeen = {};
        for (j = 0; j <wordsCount; j++){
            nextWordIndex = i + j * wordLength;
            // Get the next word from the string
            let word = str.substring(nextWordIndex, nextWordIndex + wordLength);
            if (!(word in wordFrequency)) break;

        // Add the word to the 'wordsSeen' map
        if (!(word in wordsSeen)) wordsSeen[word] = 0;
        wordsSeen[word] += 1;

        // no need to process further if the word has higher requency than required
        if (wordsSeen[word] > (wordFrequency[word] || 0)) break;

        if (j + 1 === wordsCount) resultIndices.push(i);
        }
    }
    return resultIndices;
}

console.log(findWordConcat('catfoxcat', ['cat', 'fox']));
console.log(findWordConcat('catcatfoxfox', ['cat', 'fox']));