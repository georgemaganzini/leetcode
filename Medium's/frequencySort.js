const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

var frequencySort = function(s) {
    let letters = {};

    for (let char of s){
        letters[char] = ++letters[char] || 1;
    }

    let queue = new MaxPriorityQueue((keyVal) => keyVal[1]);

    for (const [key, val] of Object.entries(letters)){
        queue.push([key, val]);
    }

    let result = "";


    while (queue.size()){
        [char, count] = [...queue.pop()]
        result += char.repeat(count);
    }

    return result;
};

let s = "Aabb";
console.log(frequencySort(s));

// alternate because can't get around prio queue errors on leetcode:

var frequencySort = function(s) {
    let seen ={};
    for(let char of s) seen[char] = ++seen[char] || 1;

    // just sort the object with .sort
    let SortedCharactersArray = Object.keys(seen).sort((a,b)=>seen[b]-seen[a]);

    let result = ""
    // iterate through SortedCharactersArray and append character( character frequency )times to result
    for(let char of SortedCharactersArray)
        result += char.repeat(seen[char]);

    return result;
};
