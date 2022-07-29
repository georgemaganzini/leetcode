// greedy approach: make k buckets, starting from largets num, place into bucket with least
// total sum (after intializing each bucket with top 4 items) - negative values will cause issues

// brute force just try every possible combination with k non-empty sets
// with DP:

const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');


var canPartitionKSubsets = function(nums, k) {
    nums.sort((a, b) => b - a);

    let arrayOfBuckets = []

    for (let i = 0; i < k; i++){
        arrayOfBuckets.push([0]);
    }

    const pq = new MinPriorityQueue();

    for (let bucket of arrayOfBuckets){
        pq.enqueue(bucket)
    }

    for (let num of nums) {
        let lowest = pq.dequeue();
        lowest[0] += num;
        pq.enqueue(lowest);
    }

    return arrayOfBuckets.every((val) => val[1] === arrayOfBuckets[0][1])
};

let nums = [4,3,2,3,5,2,1], k = 4;
console.log(canPartitionKSubsets(nums, k));

var canPartitionKSubsets = function(nums, k) {
    const total = nums.reduce((acc, cur) => acc + cur, 0);
    if(total % k != 0) return false;

    const subset = total / k;
    const memo = new Map();

    function partition(idx, sum, count) {
        if(count === k-1) return true;

        const key = nums.join();
        if(memo.has(key)) return false;

        if(sum === subset) return partition(0, 0, count+1);
        if(sum > subset) return false;

        for(let i = idx; i < nums.length; i++) {
            if(nums[i] === null) continue;
            const num = nums[i];
            nums[i] = null;
            if(partition(i+1, sum+num, count)) return true;
            nums[i] = num;
        }
        memo.set(key, false);
        return false;
    }
    return partition(0, 0, 0);
};