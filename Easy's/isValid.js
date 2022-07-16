var isValid = function(s) {
    const stack = [];
    const complement = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let char of s) {
        if (!complement[char]) stack.push(char);
        // .pop() happens either way, only the part after is contingent on the condition
        // if previous was not the compliment, return false, otherwise we popped off a pair and should continue;
        else if (stack.pop() !== complement[char]) return false;
    }

    return stack.length === 0;
};

let s = "(())";

console.log(isValid(s));