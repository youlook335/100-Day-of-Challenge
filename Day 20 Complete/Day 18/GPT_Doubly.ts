// Chat Gpt Code is A Simple Doubly Linked List Implementation Not is Important


// Doubly Linked List in JavaScript
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        if (this.head !== null) {
            this.head.prev = newNode;
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.prev.next = null;
    }

    printForward() {
        let current = this.head;
        console.log("Forward:");
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    printBackward() {
        if (!this.head) return;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        console.log("Backward:");
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

// 🔍 Test Code:
const list = new DoublyLinkedList();
list.addFirst(30);
list.addFirst(20);
list.addFirst(10);
list.addLast(40);
list.addLast(50);

list.removeFirst();  // Remove 10
list.removeLast();   // Remove 50

list.printForward();   // Output: 20, 30, 40
list.printBackward();  // Output: 40, 30, 20
