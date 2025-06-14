// https://www.youtube.com/watch?v=4FvRJ8T8Izw&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=18
// https://chatgpt.com/c/684a582c-bf14-8011-94e2-6ae21ffee514
// https://chat.deepseek.com/a/chat/s/35290673-1a33-4341-9ec6-06c6fee5c75f

// Linked list (Doubly) in Js


console.log("Doubly Linked List in JavaScript");

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

        // Case 1: Add at the beginning
        if (index === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            }
            this.head = newNode;
            return;
        }

        // Traverse to node at (index - 1)
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        // Insert newNode between current and current.next
        newNode.next = current.next;
        newNode.prev = current;

        if (current.next) {
            current.next.prev = newNode;
        }

        current.next = newNode;
    }


    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
    }

    removeLast() {
        if (!this.head) return;

        let current = this.head;
        while (current.next) {
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
        Forward() {
        let current = this.head;
        console.log("Forward Traversal:");
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    Backward() {
        if (!this.head) return; 
        let current = this.head;
        console.log("Backward Traversal:");
        
        // Go to the last node
        while (current.next) {
            current = current.next;
        }

        // console.log("Backward Traversal:");
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }

    print() {
        let current = this.head;
        console.log("ALL Data Print:");
        
        while (current) {
            console.log(current.data);
            current = current.next;

        }
    }
}

// ya hum is liya bnata ha ka taka hum class ko access kr ka is sa mukhtlif data print krwaya bs
const doubly = new DoublyLinkedList();

// Some Added
doubly.addLast(12)
doubly.addFirst(60);
doubly.addFirst(30);
doubly.addAt(123)
doubly.addFirst(10);
doubly.addLast(20);
doubly.addLast(40);

// Some Remove
doubly.removeFirst();
doubly.removeAt();
doubly.removeLast();

// Print All Elemnt
doubly.print();
doubly.Backward();
doubly.Forward();


// Check a Size Indx / Elmnt Number
console.log("All Add Remove First last Mehtod Use After Index of : ", doubly.size());