// sliding window approach

var totalFruit = function(fruits) {
    let maxFruit = 1;
    let left = 0;
    let right = 0;
    const types = new Map();

    for (right = 0; right < fruits.length; right++){
        types.set(fruits[right], types.get(fruits[right]) + 1 || 1);

        while (types.size > 2){
            maxFruit = Math.max(maxFruit, right - left);
            if (types.get(fruits[left]) === 1) types.delete(fruits[left]);
            else types.set(fruits[left], types.get(fruits[left]) - 1);
            left++;
        }
    }
    maxFruit = Math.max(maxFruit, right - left);

    return maxFruit;
};

let fruits = [1,2,1,3,3,3,3];
console.log(totalFruit(fruits));

// quadratic approach

// var totalFruit = function(fruits) {
//     let maxFruit = 1;
//     let j = 0;

//     for (let i = 0; i < fruits.length; i++){
//         current = 0;
//         types = new Set();
//         for (j = i; j < fruits.length; j++){
//             types.add(fruits[j]);
//             if (types.size > 2) {
//                 maxFruit = Math.max(maxFruit, j - i);
//                 break;
//             }
//         }
//         if (types.size <= 2) maxFruit = Math.max(maxFruit, j - i);
//     }

//     return maxFruit;
// };
