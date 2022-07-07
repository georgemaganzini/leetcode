
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