// condensed version:

var detectCycle = function(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}

// https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes


// find cycle - fast and slow pointers, if they are ever equal, there is a cycle, use a while loop with "!==null"
// find cycle length - from within cycle, store start node, then send a pointer forward counting how many nodes until current.val === start.val
// don't forget break statements in while loops
// find cycle head - cheat pointer2 ahead cycleLength nodes,
// send both pointers forward at same speed, they will meet at start of cycle
// define functions outside of main function to avoid "ReferenceError: Cannot access 'findLength' before initialization" error
// edge case of LL with length 1?

// var detectCycle = function(head) {
//     let fast = head;
//     let slow = head;
//     let cycleLength = 0;
//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if (fast === slow) {
//             cycleLength = findLength(slow)
//             break;
//         }
//     }
//     if (cycleLength === 1) return head;
//     if (cycleLength) return findStart(cycleLength, head);
//     else return -1;
// };

// const findLength = (start) => {
//     let current = start;
//     let length = 0;
//     while (true) {
//         current = current.next;
//         length++
//         if (current === start) break;
//     }
//     return length;
// }

// const findStart = (length, head) => {
//     let pointer1 = head;
//     let pointer2 = head;
//     while (length > 0) {
//         pointer2 = pointer2.next;
//         length--;
//     }
//     while (pointer1 !== pointer2){
//         pointer1 = pointer1.next;
//         pointer2 = pointer2.next;
//     }
//     return pointer1;
// }

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1);
head.next = head;

console.log(detectCycle(head))