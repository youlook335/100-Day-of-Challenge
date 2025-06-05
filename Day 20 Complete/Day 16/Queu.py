from fpdf import FPDF

# Create instance of FPDF class
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)

# Title
pdf.set_font("Arial", 'B', size=14)
pdf.cell(200, 10, txt="Queue in JavaScript (Using Class)", ln=True, align='C')
pdf.ln(10)

# Add content
content = """
Queue is a linear data structure that follows the FIFO (First In, First Out) principle.

Core Concepts and Methods:

1. enqueue(element):
   - Adds an element to the end of the queue.

2. dequeue():
   - Removes and returns the element from the front of the queue.

3. peek():
   - Returns the element at the front of the queue without removing it.

4. isEmpty():
   - Checks whether the queue is empty.

5. size():
   - Returns the number of elements in the queue.

JavaScript Example:

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());    // 10
console.log(queue.size());    // 3
console.log(queue.dequeue()); // 10
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false
"""

# Add the content line by line
pdf.set_font("Arial", size=12)
for line in content.strip().split('\n'):
    pdf.multi_cell(0, 10, txt=line)

# Save the PDF
pdf_output_path = "/mnt/data/Queue_Concepts.pdf"
pdf.output(pdf_output_path)

pdf_output_path
