// console.log("This is a Stack in DSA using JavaScript");


// push & pop

const stack = [];

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

stack.push(70);
stack.pop();

stack.push(80);
stack.pop();

stack.push(90);
stack.pop();
// console.log(stack);

// peek & isEmpty & size


// isEmpty
//is liya hota ha ka array ki value check kra ka khali ha ya fill hai
const stack2 = [];
const empty = stack2.length === 0;
// console.log("Is the stack empty? " + empty);

// Peek
// peek is liya hota ha ka array ki last value check kra ka kya hai
const stack3 = [10, 20, 30, 40, 50];
const peek = stack3[stack3.length - 1];
// console.log(peek);

// Size
const stack4 = [21, 32, 12, 54, 65, 76, 87, 98, 89, 90];
const size = stack4.length;
// console.log("Size of the stack: " + size);

// Complete Stack Implementation

class Stacks {
    constructor() {
        this.products = [];
    }
    push(element) {
        this.products.push(element);
    }
    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.products.pop();
    }
    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.products[this.products.length - 1];
    }
    isEmpty() {
        return this.products.length === 0;
    }
    size() {
        return this.products.length;
    }
}

const stack5 = new Stacks();
stack5.push("Product 1");
stack5.push("Product 2");
stack5.push("Product 3");
stack5.push("Product 4");

console.log('Prosuct peek is :',stack5.peek());   // 30
console.log('product size is :',stack5.size());   // 3
console.log('product pop is :',stack5.pop());    // 30
console.log('Prosuct peek is :',stack5.peek());   // 30
console.log('product ismepty is :',stack5.isEmpty()); // false
