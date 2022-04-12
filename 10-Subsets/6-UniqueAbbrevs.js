const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class AbbreviatedWord {
  constructor(str, start, count) {
    this.str = str;
    this.start = start;
    this.count = count;
  }
}

function generate_generalized_abbreviation(word) {
  let wordLen = word.length,
    result = [];
  const queue = new Deque();
  queue.push(new AbbreviatedWord('', 0, 0));
  while (queue.length > 0) {
    const abWord = queue.shift();
    if (abWord.start === wordLen) {
      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }
      result.push(abWord.str);
    } else {
      // continue abbreviating by incrementing the current abbreviation count
      queue.push(new AbbreviatedWord(abWord.str, abWord.start + 1, abWord.count + 1));

      // restart abbreviating, append the count and the current character to the string
      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }

      let newWord = abWord.str + word[abWord.start]
      queue.push(new AbbreviatedWord(newWord, abWord.start + 1, 0));
    }
  }
  return result;
}

console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`);
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);

// Recursive Solution:

// function generate_generalized_abbreviation(word) {
//   const result = [];
//   generate_abbreviation_recursive(word, '', 0, 0, result);
//   return result;
// }


// function generate_abbreviation_recursive(word, abWord, start, count, result) {
//   if (start === word.length) {
//     if (count !== 0) {
//       abWord += count;
//     }
//     result.push(abWord);
//   } else {
//     // continue abbreviating by incrementing the current abbreviation count
//     generate_abbreviation_recursive(word, abWord, start + 1, count + 1, result);

//     // restart abbreviating, append the count and the current character to the string
//     if (count !== 0) {
//       abWord += count;
//     }
//     const newWord = abWord + word[start];
//     generate_abbreviation_recursive(word, newWord, start + 1, 0, result);
//   }
// }


// console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`);
// console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);
