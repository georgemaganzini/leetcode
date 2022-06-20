const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

var reorganizeString = function(s) {
    let res = "";
    let pq = new PriorityQueue((a, b) => b[1] - a[1]);
    let map = new Map();

    for (let char of s) map.set(char, (map.get(char)|| 0) + 1)

    for (let item of map) pq.enqueue(item)

    let prev = null;
    let current = null;

    while (pq.size()){

        current = pq.dequeue();
        res += current[0];
        current[1]--;
        if (current[1]=== 0) current = null;

        if (prev !== null) pq.enqueue(prev);

        prev = current;
    }

    if (!prev) return res;
    else {
        if (prev[1] > 1) return "";
        else return res += prev[0];
    }
};

let s = "aab";
console.log(reorganizeString(s));

// alternate:

var reorganizeString = function(S) {
	let map = {};

	for (let char of S) map[char] = map[char] + 1 || 1;

	let max = 0;
	let maxLetter;

  for (let key in map) {
    if (map[key] > max) {
      max = map[key]; //Max occurence of char
      maxLetter = key; //Max char
    }
  }

  if (max > (S.length + 1) / 2) return "";

  let res = new Array(S.length);

  let index = 0;

//Embed maxLetter into res
  while (map[maxLetter] > 0) {
    res[index] = maxLetter;
    index += 2;
    map[maxLetter]--;
  }

  //Embed rest of characters into res
  for (let key in map) {
    while (map[key] > 0) {
      if (index >= res.length) index = 1;
      res[index] = key;
      index += 2;
      map[key]--
    }
  }

return res.join('');

};