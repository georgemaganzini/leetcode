var longestWord = function(words) {
    // default sort is aligned with problem goals (by length and lexigraphical order)
    words.sort();
    let dp = new Set();
    dp.add("");
    let res = "";
    for (let word of words){
        if (dp.has(word.slice(0, -1))){
            dp.add(word);
            // don't need to check lexigraphical order since we already sorted
            if (word.length > res.length) res = word;
        }
    }
    return res;
};

let words = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]
console.log(longestWord(words));


var longestWord = function(words) {
    if (!words.length) return ''
    words.sort()
    let set = new Set()
    let ans = ''
    for (let i = 0; i < words.length; i++) {
        let prev = words[i].substring(0, words[i].length - 1)
        if (words[i].length === 1 || set.has(prev)) {
          ans = words[i].length > ans.length ? words[i] : ans
          set.add(words[i])
        }
    }
    return ans
};

// trie version:
var longestWord = function(words) {
    let trie = new Trie()
    for (let i = 0; i < words.length; i++) {
      trie.add(words[i])
    }
    let longestWord = ''
    var dfs = function(node, s) {
      let keys = Object.keys(node.storage)
      for (let i = 0; i < keys.length; i++) {
        if (node.storage[keys[i]].isWord) {
          dfs(node.storage[keys[i]], s + keys[i])
        }
      }
      if (s.length > longestWord.length) {
        longestWord = s
      } else if (s.length === longestWord.length) {
        longestWord = getSmallest(s, longestWord)
      }
    }
    dfs(trie.root, '')
    return longestWord
};

var getSmallest = function(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            return a
        } else if (b[i] < a[i]) {
            return b
        }
    }
    return a
}

class Node {
    constructor() {
        this.isWord = false
        this.storage = {}
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }
    add(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            if (!curr.storage[word[i]]) {
                curr.storage[word[i]] = new Node()
            }
            curr = curr.storage[word[i]]
        }
        curr.isWord = true
    }
}