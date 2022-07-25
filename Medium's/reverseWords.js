// TODO: review

// w/o methods:

function reverseWords(s) {
  const ret = [];
  let word = [];
  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) === ' ') {
	    // We found the space, put word in front (if there is any)
        word.length > 0 && ret.unshift(word.join(''));
		// Reset the current word
        word = [];
      }
    else {
	  // Add characters to the current word
      word.push(s.charAt(i));
    }
  }
  // If there is current word exists, add it in front
  word.length > 0 && ret.unshift(word.join(''));
  return ret.join(' ');
};

// var reverseWords = function(s) {
//     s = s.split(' ').filter(e => e !== "");
//     let result = "";

//     console.log(s)

//     for (let i = s.length - 1; i > 0; i--) {
//         result += s[i] + " ";
//     }

//     return result + s[0]

// };

let s = "  hello world  " // blue is sky the

console.log(reverseWords(s))