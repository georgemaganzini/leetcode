class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}


var swapPairs = function(head) {
    let secondNodeinPair = false;
    let originalHead = head;
    if (head.next) originalHead = head.next;

    while (head) {

        if (secondNodeinPair) {
            // point prev node to next
            prev.next = head.next
            // point current node to prev
            head.next = prev;
            // hold new next in temporary variable
            temp = prev.next
            // adjust prev and head pointers
            prev = head;
            head = temp;
        } else {
            temp = head.next;
            prev = head;
            head = temp;
        }

        secondNodeinPair = !secondNodeinPair;
    }

    return originalHead ? originalHead : null;
};


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log(swapPairs(head))