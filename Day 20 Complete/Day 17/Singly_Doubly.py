from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 14)
        self.cell(0, 10, "Singly vs Doubly Linked List - JavaScript Guide", ln=True, align="C")
        self.ln(5)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, title, ln=True)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font("Arial", "", 11)
        self.multi_cell(0, 7, body)
        self.ln()

    def code_block(self, code):
        self.set_font("Courier", "", 10)
        self.set_fill_color(230, 230, 230)
        self.multi_cell(0, 6, code, border=1, fill=True)
        self.ln()

pdf = PDF()
pdf.add_page()

# Chapter: Conceptual Difference
pdf.chapter_title("1. Difference Between Array, Singly, and Doubly Linked List")
pdf.chapter_body("""
Array:
- Built-in structure in JavaScript.
- Fixed continuous memory blocks.
- Uses index to access elements.

Singly Linked List:
- Made using custom Node class.
- Each node points to the next node only.
- Memory can be scattered.
- One-directional traversal.

Doubly Linked List:
- Each node points to both next and previous.
- Two-directional traversal.
- More memory due to extra pointer.
""")

# Chapter: Singly Linked List Code
pdf.chapter_title("2. Singly Linked List Code in JavaScript")
singly_code = """
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.print();
"""
pdf.code_block(singly_code)

# Chapter: Doubly Linked List Code
pdf.chapter_title("3. Doubly Linked List Code in JavaScript")
doubly_code = """
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  printForward() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  printBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

const dlist = new DoublyLinkedList();
dlist.push("A");
dlist.push("B");
dlist.push("C");
dlist.printForward();
dlist.printBackward();
"""
pdf.code_block(doubly_code)

# Save the PDF
pdf_path = "/mnt/data/Singly_vs_Doubly_LinkedList_JS_Guide.pdf"
pdf.output(pdf_path)
pdf_path
