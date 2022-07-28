var moveZeroes = function(nums) {
    let zeroCount = 0;

    for (num of nums) {
        if (num === 0) zeroCount++;
    }

    if (zeroCount === 0 || zeroCount === nums.length) return;

    let nextNonZero = 0;

    while (nums[nextNonZero] === 0 && nextNonZero < nums.length) nextNonZero++;

    for (let i = 0; i < nums.length - zeroCount; i++){
        nums[i] = nums[nextNonZero];
        nextNonZero++;
        while (nums[nextNonZero] === 0 && nextNonZero < nums.length) nextNonZero++;
    }

    for (i = nums.length - zeroCount; i < nums.length; i++){
        nums[i] = 0;
    }

};

let nums = [0,1]

// [1,1,3,0,0]

// [1,3,12,0,0]

// more concise:

var pos = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[pos++] = nums[i];
    }
}
for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
}