// console.log('Running')
//  Stack follow LIFO order .
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items.length = 0;
    }

    contains(item) {
        if (!this.isEmpty()) {
            return this.items.includes(item);
        }
    }
    printStack() {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i]
        }
        return str;
    }
}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.printStack())
stack.clear();
console.log(stack.size())