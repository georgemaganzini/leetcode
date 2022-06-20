// .sort ascending, pop() k times: n log n + k
// maxheap, pop() k times: n log n + k
// minheap that only holds k: n log k

const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');


var findKthLargest = (nums, k) => {
    let pq = new MinPriorityQueue();

    for (let x of nums) {
        pq.enqueue(x);
        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    return pq.front().element; // add .element on leetcode
};

let nums = [3,2,1,5,6,4], k = 2;
console.log(findKthLargest(nums, k));