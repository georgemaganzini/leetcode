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
    if(!head || !head.next) return head;
    var v1 = head, v2 = head.next, v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log(swapPairs(head))