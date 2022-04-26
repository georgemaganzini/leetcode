/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let results = []
    for (let i = 0; i < nums.length; i++){
        const currentNum = nums[i];
        if (results.includes(currentNum)) return true
        results.push(currentNum)
    }
    return false
};

// better, low mem but still bottom 5% speed

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums.includes(nums[i]) && nums.indexOf(nums[i]) !== i) return true
    }
    return false
};

// faster solutions involve Map or Set:

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

var containsDuplicate = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let temp = nums[i];
        if (map.get(temp)) {
            return true;
        } else {
            map.set(temp, 1);
        }
    }
    return false;
};