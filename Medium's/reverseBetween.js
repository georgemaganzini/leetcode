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

    const reverse = (head) => {
        let tail = head;
        let prev = null;
        let counter = 0;
        while (counter <= right - left){
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
            counter++;
        }

        return [prev, tail, head];
    }

    let [secondHead, tail, thirdHead] = reverse(preLeft.next);

    preLeft.next = secondHead;
    tail.next = thirdHead;

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
