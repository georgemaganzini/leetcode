const longestWithDistinct = (string) => {
    let freq = {};
    let start = 0;
    let maxLength = 0;
    for (let end = 0; end < string.length; end++){
        const right = string[end];
        if (!(right in freq)){
            freq[right] = 0;
        }
        freq[right] += 1;
        while (Math.max(...Object.values(freq)) > 1){
            const left = string[start];
            freq[left] -= 1;
            if (freq[left]=== 0){
                delete freq[left]
            }
            start++
        }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

const string = "abccde"
console.log(longestWithDistinct(string))