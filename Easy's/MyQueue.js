class MyQueue {
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        this.stack1.push(x);
    }

    pop() {
        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop());
        }

        let removed = this.stack1.pop();

        while (this.stack2.length > 0){
            this.stack1.push(this.stack2.pop());
        }

        return removed;
    }

    peek() {
        if (!this.stack1.length) return undefined;
        return this.stack1[0];
    }

    empty() {
        return this.stack1.length === 0;
    }
}



/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */