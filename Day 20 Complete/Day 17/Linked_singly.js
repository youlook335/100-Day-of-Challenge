console.log("This is a linked singly list implementation in JavaScript");

// Linked List in javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Pointer to the first node
    }
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head; // Point new node to the current head
        this.head = newNode; // Update head to the new node
    }
    addLast(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode; // If list is empty, set head to new node
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Point last node to the new node
    }
    size(){
        let count = 0;
        let current = this.head;
        while (current) {
            count++; // Increment count for each node
            current = current.next; // Move to the next node
        }
        return count; // Return the total count of nodes
    }
    addAt(index, data) {
        if(index < 0 || index > this.size()){
            console.error("Invalid Syntax");
            return;
        }

        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head; // Point new node to the current head
            this.head = newNode; // Update head to the new node
            return;
        }

        let current = this.head;
        for(let i = 0; i < index -1 ; i++){
            current = current.next; // Traverse to the node before the index
        }
        newNode.next = current.next; // Point new node to the next node
        current.next = newNode; // Point current node to the new node
    }
    
    removeTop(){
        if(!this.head){
            return; // If list is empty, do nothing
        }
        this.head = this.head.next; // Update head to the next node
    }
    removeLast(){
        if(!this.head){
            return; // If list is empty, do nothing
        }
        let current = this.head;
        while (current.next.next){
            current = current.next; // If only one node, set head to null
        }
        current.next = null; // Traverse to the last node
    }
    removeAt(index){
        if(index < 0 || index >= this.size()){
            console.error("Invalid Syntax");
            return;
        }

        if (index === 0) {
            this.head = this.head.next; // Update head to the next node
            return;
        }
        let current = this.head;
        for(let i = 0; i < index -1 ; i++){
            current = current.next; // Traverse to the node before the index
        }

        if(current.next){
            current.next = current.next.next; // Point current node to the next node
        }
    }
    print() {
        let current = this.head;
        let result = '';
        while (current) {
            console.log(current.data);
            current = current.next; // Traverse through the list
        }
    }
}
const list = new LinkedList();