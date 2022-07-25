var maxLength = function (arr) {
    let res = 0;

    let solve = (start, curr) => {
        if (curr.length !== new Set(curr.split('')).size) {
            return;
        }

        res = Math.max(res, curr.length);

        for (let i = start; i < arr.length; i++) {
            solve(i + 1, curr + arr[i]);
        }
    }

    solve(0, '');

    return res;
};

// const maxLength = arr => {
//   let res = 0;

//   const dp = (idx, cur) => {
//     res = Math.max(res, cur.length);
//     for (let i = idx; i < arr.length; i++) {
//       ((cur+arr[i]).length === new Set([...cur,...arr[i]]).size) &&
//         dp(i + 1, cur + arr[i]);
//     }
//   }

//   dp(0, '');
//   return res;
// };

let arr = ["un","iq","ue"] // Output: 4

console.log(maxLength(arr))