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

let s = "aabb";
console.log(minMovesToMakePalindrome(s))

// two pointer:

// var minMovesToMakePalindrome = function(s) {
//     let left = 0, right = s.length-1, ans = 0;


//     function swapStr(str, first, last){
//         return str.substr(0, first)
//            + str[last]
//            + str.substring(first+1, last)
//            + str[first]
//            + str.substr(last+1);
//     }

//     while (left < right) {
//         let l = left, r = right;

//         while (s[l] != s[r]) {
//             r--;
//         }

//         if (l == r) {
//             ans++;
//             s = swapStr(s, r, r+1);
//             continue;
//         } else {
//             while (r < right) {
//                 s = swapStr(s, r, r+1);
//                 ans++;
//                 r++;
//             }
//         }
//         left++;
//         right--;
//     }

//     return ans;
// };