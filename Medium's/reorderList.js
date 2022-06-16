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
    // handle lengths of 1 and 2
    if (head.next === null || head.next.next === null) return;
    let fast = head;
    let slow = head;
    // find (floored) midpoint
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse second half, set new pointers to new heads
    headSecondHalf = reverse(slow);
    headFirstHalf = head;

    // rearrange to produce the LinkedList in the required order
    while (headFirstHalf !== null && headSecondHalf !== null) {
        // adjust pointers for first half
        temp = headFirstHalf.next;
        headFirstHalf.next = headSecondHalf;
        headFirstHalf = temp;

        // adjust pointers for second half being inserted in
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
    // set prev to null to account for very end
    let prev = null;
        while (head !== null) {
            // grab next
            next = head.next;
            // set current's pointer to prev
            head.next = prev;
            // set prev to current
            prev = head;
            // walk forward
            head = next;
        }
    return prev;
}
