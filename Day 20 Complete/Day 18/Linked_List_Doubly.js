// https://www.youtube.com/watch?v=4FvRJ8T8Izw&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=18
// https://chatgpt.com/c/684a582c-bf14-8011-94e2-6ae21ffee514
// https://chat.deepseek.com/a/chat/s/35290673-1a33-4341-9ec6-06c6fee5c75f

// Linked list (Doubly) in Js


console.log("Singly Linked List in JavaScript");

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

        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
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
        newNode.prev = current;
        current.next = newNode;
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    addAt(data, index) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid index");
            return;
        }

        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        newNode.prev = current;
        newNode.next = current.next;

        if (current.next) {
            current.next.prev = newNode;
        }
        current.next = newNode;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            if (current.next) {
                current.next.prev = current;
            }
        }
    }
    print(){
        
    }
}