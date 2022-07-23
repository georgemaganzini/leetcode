class BinaryIndexedTree {
    constructor(size) {
        this.bit = new Array(size);
    }
    sum(index) {
        let count = 0;
        while (index > 0) {
            count += this.bit[index] || 0;
            index = index - (index & -index); // this is to get parent node in binary indexed tree
        }
        return count;
    }
    update(index, delta) {
        while (index < this.bit.length) {
            this.bit[index] = (this.bit[index] || 0) + delta;
            index = index + (index & -index); // this is to get next node in binary indexed tree
        }
    }
}



var countSmaller = function(nums) {
    let counts = new Array(nums.length);
    let delta = 1e4+1; // Math.pow(10,4) +1 this is to handle negative numbers to make them positive as binary indexed tree takes indexes which is >= 0
    let bitArray = new BinaryIndexedTree(2e4+2);
    for (let i = nums.length - 1; i >= 0; i--) {
        counts[i] = bitArray.sum(nums[i] + delta - 1);
        bitArray.update(nums[i]+delta, 1);
    }
    return counts;
};


let nums = [5183,2271,3067,539,8939,2999,9264,737,3974,5845]; // Output [2, 1, 1, 0]
console.log(countSmaller(nums))

// original solution, too slow:

// var countSmaller = function(nums) {
//     let result = Array(nums.length);
//     const memo = new Map();

//     const dfs = (i, num, start, count) => {
//         if (memo.has(`${i}, ${num}`)) {
//             count += memo.get(`${i}, ${num}`);
//             result[start] = count;
//             memo.set(`${start}, ${num}`, count);
//             return;
//         }

//         if (i === nums.length) {
//             result[start] = count;
//             memo.set(`${start}, ${num}`, count);
//             return;
//         }

//         if (nums[i] < num) count++;

//         dfs(i + 1, num, start, count);
//     }

//     for (let i = nums.length - 1; i >= 0; i--){
//         dfs(i, nums[i], i, 0);
//     }

//     return result;
// };
