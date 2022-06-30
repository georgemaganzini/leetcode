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
        arrayOfBuckets.push([`bucket #${i}`, 0]);
    }

    const pq = new MinPriorityQueue((tuple)=>tuple[1]);

    for (let bucket of arrayOfBuckets){
        pq.enqueue(bucket)
    }

    for (let num of nums) {
        let lowest = pq.dequeue();
        lowest[1] += num;
        pq.enqueue(lowest);
    }

    return arrayOfBuckets.every((val) => val[1] === arrayOfBuckets[0][1])
};

let nums = [4,3,2,3,5,2,1], k = 4;
console.log(canPartitionKSubsets(nums, k));