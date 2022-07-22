var partition = function(head, x) {
    let part1Head = new ListNode();
    let part2Head = new ListNode();
    let dummy1 = part1Head;
    let dummy2 = part2Head;

    while(head) {
        let next = head.next;
        if (head.val < x) {
            part1Head.next = head;
            part1Head = part1Head.next;
        } else {
            part2Head.next = head;
            part2Head = part2Head.next;
        }
        head.next = null;
        head = next;
    }

    part1Head.next = dummy2.next;
    return dummy1.next;
};

let head = [1,4,3,2,5,2], x = 3; // Output: [1,2,2,4,3,5]

console.log(partition(head, x));