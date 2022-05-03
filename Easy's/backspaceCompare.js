var backspaceCompare = function(s, t) {
    let index1 = s.length - 1;
    let index2 = t.length - 1;

    while (index1 >= 0 || index2 >= 0){
        let valid1 = getNextValidIndex(s, index1);
        let valid2 = getNextValidIndex(t, index2);

        if (valid1 < 0 && valid2 < 0) return true;

        if (valid1 < 0 || valid2 < 0) return false;

        if (s[valid1] !== t[valid2]) return false;

        index1 = valid1 - 1;
        index2 = valid2 - 1;
    }

    return true

};

const getNextValidIndex = (string, index) => {
    let backspaceCount = 0;

    while (index >= 0) {
        if (string[index] === "#"){
            backspaceCount++;
        } else if (backspaceCount > 0) {
            backspaceCount--;
        } else break;

        index--;
    }

    return index
}

let s = "bxj##tw";
let t = "bxj###tw";

console.log(backspaceCompare(s, t))