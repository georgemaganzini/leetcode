var numSplits = function(s) {
    let counter = 0;
    let left = new Map();
    let right = new Map();
    for (let i = 0; i < s.length; i++){
        right.set(s[i], (right.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < s.length; i++){
        left.set(s[i], (left.get(s[i]) || 0) + 1)
        let rightCurVal = right.get(s[i]) - 1;
        right.set(s[i], rightCurVal)
        if (rightCurVal === 0) right.delete(s[i])
        if (left.size === right.size) counter++;
    }
    return counter;
};

let s = "aaaaa";
console.log(numSplits(s))