var isUgly = function(n) {
  if(n<=0) return false

  while(n > 2){
    if(n%2===0){
      n=n/2
    }
     else if(n%3===0){
      n =  n/3
    }
      else if(n%5===0){
      n=n/5
    }else {
      return false
    }
  }

 return  true
};


let n = 6 // true

console.log(isUgly(7))