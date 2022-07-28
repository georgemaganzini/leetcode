var reverseBits = function(n) {
  var result = 0;
  var count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};

function reverseBits(n) {
  return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
}



/*
Process the right-most bit for 32 times (at most)
*/
var reverseBits = function(n) {
    let res = 0, pow = 31;
    while (n > 0) {
        let rightMost = n & 1;
        res = res + (rightMost << pow);
        pow--;
        n = n >>> 1;
    }
    // take negative into positive
    return res >>> 0;
    // T.C: O(1)
    // S.C: O(1)
};