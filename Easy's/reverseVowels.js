var reverseVowels = function(s) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    s = s.split('');

    let i = 0;
    let j = s.length - 1;


    while (i < j) {
        while (!vowels.has(s[i])){
            i++
            if (i >= j) return s.join('');
        }
        while (!vowels.has(s[j])){
            j--
            if (i >= j) return s.join('');
        }

        [s[i], s[j]] = [s[j], s[i]]
        i++;
        j--;
    }

    return s.join('');
};

let s = "leetcode"; // Output: "holle"
console.log(reverseVowels(s));
