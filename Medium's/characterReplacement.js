const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] + 1 || 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    // does not need to be a while loop because it does not get triggered by an increase to maxCharCount
    // can get triggered by a maxCharCount swap though
    // using a sliding window, so just kick out the left one at a time regardless of if it is maxCharCount, which gets updated every loop
    // window is still permanently expanded by early string of characters in a row for when it is calc'd at end
    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};


let s =  "AABABBA", k = 1;
console.log(characterReplacement(s, k))

// works but too slow & complicated

// var characterReplacement = function(s, k) {
//     let charMap = new Map();
//     let counter = 0;
//     let start = 0;
//     let end;
//     let max = 0;
//     let highestFreq = [null, -Infinity];

//     for (end = 0; end < s.length; end++){
//         // increment character in map or add it if it doesn't exist yet
//         charMap.set(s[end], charMap.get(s[end]) + 1 || 1);


//         // check if current char is current most frequent, if so increment its frequency count
//         if (s[end] === highestFreq[0]) {
//             highestFreq[1]++;
//         // otherwise if it is greater than current most frequent, swap it to most frequent
//         } else if (charMap.get(s[end]) > highestFreq[1]) {
//             // if (highestFreq[0] !== null) counter++; // counter doesnt change when initial swap happens
//             [highestFreq[0], highestFreq[1]] = [s[end], charMap.get(s[end])];

//         }
//         // if not dealing with current most freq, increment letter counter

//         if (s[end] !== highestFreq[0]) counter++;

//         console.log(end, s[end], charMap, highestFreq, counter)

//         while (counter > k) {
//             max = Math.max(max, end - start); // no -1 here because we are one over already
//             charMap.set(s[start], charMap.get(s[start]) - 1);
//             if (s[start] === highestFreq[0]) {
//                 highestFreq[1]--;
//                 // check if still highest, need to be tracking second highest?
//                 prev = highestFreq[0];
//                 charMap.forEach((val, key) => {
//                     if (val > highestFreq[1] && key !== highestFreq[0]){
//                         [highestFreq[0], highestFreq[1]] = [key, val];
//                     }
//                 })
//                 if (highestFreq[0] !== prev) counter--; // if highestfreq changed, decrement counter?

//             } else counter--;
//             start++;
//         }
//     }
//     max = Math.max(max, end - start); // no -1 here because end got incremented one more to exit the loop

//     return max;
// };
