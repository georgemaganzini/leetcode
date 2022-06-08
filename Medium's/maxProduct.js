var maxProduct = function(nums) {
    let res = Math.max(...nums)
    let curMin = 1,
        curMax = 1;

    for (let n of nums){
        let temp = curMax * n;
        curMax = Math.max(curMax * n, curMin * n, n);
        curMin = Math.min(temp, curMin * n, n);
        res = Math.max(res, curMax)
    }

    return res;
};

let nums = [2, 3, -2, 4];
console.log(maxProduct(nums));