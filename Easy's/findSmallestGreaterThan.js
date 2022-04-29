var nextGreatestLetter = function(letters, target) {
    const n = letters.length;
    let start = 0;
    let end = n - 1;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (target < letters[mid]) {
        end = mid - 1;
        } else {
        start = mid + 1;
        }
    }
    return letters[start % n];
};