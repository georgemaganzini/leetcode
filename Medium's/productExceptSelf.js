var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);
    let prefix = 1;
    for (i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix *= nums[i]
    }
    let postfix = 1;
    for (j = nums.length - 1; j > -1; j--){
        res[j] *= postfix;
        postfix *= nums[j];
    }
    return res
};

let nums = [1,2,3,4];

console.log(productExceptSelf(nums));