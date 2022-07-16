var isPalindrome = function(x) {
    x = x.toString();

    let left = 0;
    let right = x.length - 1;

    while (left < right) {
        if (x[left] !== x[right]) return false;
        left++;
        right--;
    }

    return true;
};

let x = 121;

console.log(isPalindrome(x));