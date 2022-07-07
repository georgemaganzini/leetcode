
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var rotateRight = function(head, k) {
    if (!head) return null;
    let length = 1;
    let originalHead = new ListNode(-Infinity, head);
    originalHead = originalHead.next;

    while (head.next) {
        head = head.next;
        length++;
    }

    head.next = originalHead;
    head = originalHead;

    // k can be larger than length, hence the mod
    const walkDistance = length - k%length;

    console.log(walkDistance, length)

    for (let i = 0; i < walkDistance; i++) head = head.next;

    let temp = head.next;
    head.next = null;

    return temp;
};


const head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);

console.log(rotateRight(head, 4))

// simple and clear with "fast and slow" model
// start at dummy node rather than instantiate length at 1
// careful with setting up for loop though (starts at 1, <= length - k)

// var rotateRight = function(head, k) {
//     let dummy = new ListNode()
//     let slow = dummy
//     let fast = dummy
//     let length = 0
//     dummy.next = head
//     while(fast.next != null){
//         fast = fast.next
//         length++
//     }
//     k = k % length
//     for (var i = 1; i <= length - k; i++) {
//         slow = slow.next
//     }
//     fast.next = dummy.next
//     dummy.next = slow.next
//     slow.next = null
//     return dummy.next
// };