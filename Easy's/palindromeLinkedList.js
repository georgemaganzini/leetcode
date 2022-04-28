const isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;
    let startPointer = head;
    let len = 0;

    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        len++;
    }

    let mid = reverse(slow);

    while (len) {
        len--;
        if (mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }

    return true;
};

const reverse = (head) => {
    let prev = null;
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

console.log(`Is palindrome: ${isPalindrome(head)}`);
