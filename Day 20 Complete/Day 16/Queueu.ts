// console.log("Queueu.js");
// جب آپ Queue (قطار) کا concept سیکھ رہے ہیں تو آپ کو درج ذیل 5 اہم concepts لازمی سیکھنے پڑیں گے — یہ بالکل ویسے ہی ہیں جیسے Stack میں آپ نے push, pop, peek, isEmpty, size سیکھے تھے۔

// ✅ Queue کے 5 ضروری Concepts:
// enqueue(element)
// → Queue میں آخر میں (end پر) نیا عنصر add کرنا۔
// → JavaScript میں: array.push(element)

// dequeue()
// → Queue سے سب سے پہلا عنصر نکالنا (FIFO - First In First Out)
// → JavaScript میں: array.shift()

// peek()
// → Queue میں سب سے پہلا عنصر دیکھنا بغیر نکالے۔
// → JavaScript میں: array[0]

// isEmpty()
// → دیکھنا کہ Queue خالی ہے یا نہیں۔
// → JavaScript میں: array.length === 0

// size()
// → Queue میں کل کتنے elements ہیں۔
// → JavaScript میں: array.length

// last elemnt add

// const enqueue = [10, 20, 30, 40, 50];
// enqueue.push(90);
// console.log("Enqueue is:", enqueue);

// first element remove
const dequeue = [100 , 200, 300, 400, 500];
dequeue.shift();
// console.log("Dequeue is:", dequeue);

// any elemnt check a value
const peek = [1000, 2000, 3000, 4000, 5000];
// console.log("Peek is:", peek[1]);

// check empty Fill ya Empty
const isEmpty = [];
// console.log("Is Empty:", isEmpty.length === 0 );

// check size of Queue
const size = [1, 2, 3, 4, 5];
// console.log("Size of Queue is:", size.length);

// Complete Queue Example
class Queue {
  constructor() {
    this.items = [];
  }

  // ✅ Add element to the end (enqueue)
  enqueue(element) {
    this.items.push(element);
  }

  // ✅ Remove element from the front (dequeue)
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // ✅ Peek: Check the front element
  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // ✅ Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // ✅ Get the size of the queue
  size() {
    return this.items.length;
  }
}
// Example usage

const last_queue = new Queue();

last_queue.enqueue(10);
last_queue.enqueue(20);
last_queue.enqueue(30);

console.log(last_queue.peek());     // 10
console.log(last_queue.size());     // 2
console.log(last_queue.dequeue());  // 10
console.log(last_queue.size());     // 2
console.log(last_queue.isEmpty());