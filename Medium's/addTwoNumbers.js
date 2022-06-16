// walk along each LL with pointers while maintainig a carry variable as well
// use a while loop + ternary operator, substituting 0 if node is null
// add carry, mod by 10 to determine current/next digit, use math.floor to determine next carry
// use a dummy node (-1) to start

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(-1);
    let dummy = result;

    while (l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        let nextDigit = (l1Val + l2Val + carry) % 10;
        result.next = new ListNode(nextDigit);
        result = result.next;

        carry = Math.floor((l1Val + l2Val + carry) / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
};
