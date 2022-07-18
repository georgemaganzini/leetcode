var lengthOfLastWord = function(s) {
    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] !== " ") {
            let j = i;
            while (s[j] !== " " && j !== -1){
                j--;
            }
            return i - j;
        }
    }
    return 0;
};

let s = "a";
console.log(lengthOfLastWord(s))


// alternate left-to-right

var lengthOfLastWord = function(s) {
    let length = 0, max = 0;
    for (let i = 0; i < s.length; i++)
        if (s[i] !== ' ')
            length++, max = length;
        else
            length = 0;
    return max;
};