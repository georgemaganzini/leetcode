// walk along ll until end is found, go backwards n steps?
// or store previous n nodes/steps
// or reverse it on the way there and on the way back?
// have one pointer n steps behind

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)

    this.print_list = function () {
        temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.val} `);
            temp = temp.next;
        }
        console.log()
    }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-Infinity);
    dummy.next = head;

    // create two pointers
    let fast = head;
    let slow = dummy;
    // give first pointer a head start of n
    for (let i = 0; i < n; i++) fast = fast.next;

    // when last node is detected by pointer one
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    // adjust pointer two's node's .next to point to .next.next
    slow.next = slow.next.next

    return dummy.next;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
let n = 2;

removeNthFromEnd(head, n);

head.print_list();

// no dummy needed with this method:
// var removeNthFromEnd = function(head, n) {
//     let fast = head, slow = head
//     for (let i = 0; i < n; i++) fast = fast.next
//     if (!fast) return head.next
//     while (fast.next) fast = fast.next, slow = slow.next
//     slow.next = slow.next.next
//     return head
// };