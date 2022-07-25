// TODO: review

const minMovesToMakePalindrome = (s) => {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let removed;
        if (s[i] == s[n - 1]) { // remove rightmost
            removed = s.slice(0, i) + s.slice(i + 1, -1);
            return i + minMovesToMakePalindrome(removed);
        } else if (s[0] == s[n - 1 - i]) { // remove leftmost
            removed = s.slice(1, n - 1 - i) + s.slice(n - i);
            return i + minMovesToMakePalindrome(removed);
        }
    }
    return 0;
};

// const dfs = (s) => {
//     let n = s.length;
//     for (let i = 0; i < n; i++) {
//         let removed;
//         if (s[i] == s[n - 1]) { // remove rightmost
//             removed = s.slice(0, i) + s.slice(i + 1, -1);
//             return i + dfs(removed);
//         } else if (s[0] == s[n - 1 - i]) { // remove leftmost
//             removed = s.slice(1, n - 1 - i) + s.slice(n - i);
//             return i + dfs(removed);
//         }
//     }
//     return 0;
// };

let s = "aabb";

console.log(minMovesToMakePalindrome(s))