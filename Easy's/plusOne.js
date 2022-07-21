// more concise:

var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
        digits[i]++;
        if(digits[i] > 9){
            digits[i] = 0;
        }else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};


// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--){
//         if (digits[i] !== 9) {
//             digits[i] += 1;
//             for (i = i + 1; i < digits.length; i++) {
//                 digits[i] = 0;
//             }
//             return digits;
//         }
//     }

//     digits.unshift(1);
//     for (i = 1; i < digits.length; i++) {
//         digits[i] = 0;
//     }
//     return digits;

// };

let digits = [1,2,3];
console.log(plusOne(digits));