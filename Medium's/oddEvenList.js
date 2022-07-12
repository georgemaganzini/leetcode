/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    // adjust pointers to skip every other
    // i.e. temp = node.next.next
    // throw node.next to helper function (still pointing to temp but that's okay?)
    // reassign node.next = temp;
    // end when we hit tail (might need some logic depending on if tail falls on odd or even)

    // helper function-> receives nodes, needs to connect them in order received then return head;


    // connect tail to newHead


    // return original head (or dummy.next)
}; 