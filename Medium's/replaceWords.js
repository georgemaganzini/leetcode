class Trie{
  constructor(){
    this.isWord = false;
    this.children = {};
  }
}
var replaceWords = function(dict, sentence) {
  const root = new Trie();
  for(const word of dict){
    insertIntoTrie(word, root)
  }

  const wordsInS = sentence.split(' ');
  const res = [];
  for (const word of wordsInS){
    const newWord = searchTrie(word, root);
    res.push(newWord)
  }
  return res.join(' ');
};

function insertIntoTrie(word, root){
  let node = root;
  for(const c of word){
    const children = node.children;
    if(!children[c]) children[c] = new Trie();
    node = children[c];
  }
  node.isWord = true;
}

function searchTrie(word, root){
  let node = root;
  let newWord = '';
  for(const c of word){
    const children = node.children;
    if(!children[c]) return word;
    newWord += c;
    node = children[c];
    if(node.isWord) return newWord
  }
  return word
}


// w/o Trie:

var replaceWords = function(dictionary, sentence) {
    let result = "";
    let current;
    let faster = new Set(dictionary);

    let wordArray = sentence.split(' ');

    for (let i = 0; i < wordArray.length; i++){
        current = "";
        for (let j = 0; j < wordArray[i].length; j++){
            current += wordArray[i][j];
            if (faster.has(current)) break;
        }
        result += current
        if (i < wordArray.length - 1) result += " ";
    }

    return result;
};

let dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery";

console.log(replaceWords(dictionary, sentence));