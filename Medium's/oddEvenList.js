var oddEvenList = function(head) {
    if (!head || !head.next) return head; // Watch out for edge cases! (0 or 1 item)

    // Core strategy: make 2 chains (odds/evens) by "leapfrogging".
    // No need to keep track of a counter or extra pointers, just need these 3:
    let odd = head;
    let even = head.next;
    const evenHead = head.next;

    // ("even.next" means more to go since even pointer is rightmost)
    // ("even &&" is there to avoid null reference error, but also for even positions)
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    // Connect the two chains: (tail of odds to head of evens)
    odd.next = evenHead;

    return head;
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(oddEvenList(head));