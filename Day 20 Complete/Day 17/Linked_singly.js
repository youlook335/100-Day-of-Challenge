console.log("This is a linked singly list implementation in JavaScript");
// https://chatgpt.com/c/684a582c-bf14-8011-94e2-6ae21ffee514
// https://www.youtube.com/watch?v=TjeTc1f3ebY

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
        while (current) {
            console.log(current.data);
            current = current.next; // Traverse through the list
        }
    }
}
const list = new LinkedList();

list.addLast(30);
list.addAt(0,20);
list.addFirst(10);
list.addLast(50);
list.removeTop();
list.addLast(60);
list.addFirst(5);
// agr hum is ko use kra to hma phela likhna hoga ka indx ki value itni ho tab hi ja kar is ko wahi rkh da ga jo hum na indx ka baad value dali hia
list.addAt(2,40);
list.print();




// 🔚 خلاصہ:
// Method	کام کیا کرتا ہے
// addFirst()	شروع میں node ڈالنا
// addLast()	آخر میں node ڈالنا
// addAt(index)	کسی خاص جگہ پر node ڈالنا
// removeTop()	شروع والا node ہٹانا
// removeLast()	آخر والا node ہٹانا
// removeAt(index)	خاص index والا node ہٹانا
// print()	پورا list print کرنا
// size()	list کا size count کرنا