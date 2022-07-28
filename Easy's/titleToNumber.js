var titleToNumber = function(s) {
  let total = 0
  for (let i = 0; i < s.length; i += 1) {
    total = total * 26 + s.charCodeAt(i) - "A".charCodeAt(0) + 1
  }
  return total
};