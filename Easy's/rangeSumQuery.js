/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.runningTotal = [0];

    for (let i = 0; i < nums.length; i++){
        this.runningTotal[i + 1] = nums[i] + this.runningTotal[i];
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.runningTotal[right + 1] - this.runningTotal[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */