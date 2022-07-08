/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // find cycle - fast and slow pointers, if they are ever equal, there is a cycle
    // use a while loop with "!==null"

    // find cycle length - from within cycle, store start node, then send a pointer forward counting how many nodes until current.val === start.val

    // find cycle head - cheat pointer2 ahead cycleLength nodes,
    // send both pointers forward at same speed, they will meet at start of cycle
};