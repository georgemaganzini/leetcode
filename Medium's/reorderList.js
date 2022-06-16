

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)

    this.print_list = function() {
        temp = this;
        while (temp !== null) {
        process.stdout.write(`${temp.value} `);
        temp = temp.next;
        }
        console.log();
    }
}


var reorderList = function(head) {
    if (head.next === null || head.next.next === null) return;

    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    headSecondHalf = reverse(slow); // reverse the second half
    headFirstHalf = head;

    // rearrange to produce the LinkedList in the required order
    while (headFirstHalf !== null && headSecondHalf !== null) {
        temp = headFirstHalf.next;
        headFirstHalf.next = headSecondHalf;
        headFirstHalf = temp;

        temp = headSecondHalf.next;
        headSecondHalf.next = headFirstHalf;
        headSecondHalf = temp;
    }

    // set the next of the last node to 'null'
    if (headFirstHalf !== null) {
        headFirstHalf.next = null;
    }
}


function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
