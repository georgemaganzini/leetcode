var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) break;
    }

    let slow2 = 0;

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow
};

let nums = [1,3,4,2,2];
console.log(findDuplicate(nums))

// Floyd's algorithm
// Use fast and slow pointers to find first intersection
// then create second slow pointer, when two slow pointers meet, duplicate is found
// "n - 1" is clue that it's a linked list problem with a cycle