function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)

     this.print_list = () => {
        let temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.val} `);
            temp = temp.next;
        }
        console.log();
     }
}

var reverseBetween = function(head, left, right) {
    if (left === right) return head;

    let dummy = new ListNode(-1);
    dummy.next = head;

    // walk to left and store previous
    let preLeft = dummy;
    let counter = 0;
    while (counter < left - 1) {
        preLeft = preLeft.next;
        counter++;
    }

    // set pointer to where reversal should begin
    // this used to be a helper function
    let newHead = preLeft.next
    counter = 0;
    let tail = newHead;
    let prev = null;

    while (counter <= right - left){
        next = newHead.next;
        newHead.next = prev;
        prev = newHead;
        newHead = next;
        counter++;
    }

    preLeft.next = prev;
    tail.next = newHead;

    // head.print_list();
    return dummy.next;
};




let left = 2,
    right = 4;

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseBetween(head, left, right))
