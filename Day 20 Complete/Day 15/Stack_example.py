from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 14)
        self.cell(0, 10, 'Stack Data Structure - Detailed Guide', 0, 1, 'C')
        self.ln(5)
        
    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, title, 0, 1)
        self.ln(2)
        
    def chapter_body(self, body):
        self.set_font('Arial', '', 11)
        self.multi_cell(0, 8, body)
        self.ln()
        
    def add_code(self, code):
        self.set_font('Courier', '', 10)
        self.set_fill_color(230, 230, 230)
        self.multi_cell(0, 7, code, 0, 1, fill=True)
        self.ln()
        
pdf = PDF()
pdf.add_page()

# Title and Intro
intro = (
    "This document explains the Stack data structure in detail.\n"
    "Stack is a linear data structure that follows the Last In First Out (LIFO) principle.\n"
    "We will cover Stack concepts, JavaScript examples, and practical use cases.\n"
    "Prepared for Tanveer."
)
pdf.chapter_body(intro)

# Chapter 1: What is Stack
pdf.chapter_title("1. What is Stack?")
body1 = (
    "A Stack is a linear data structure that follows the LIFO (Last In First Out) principle.\n"
    "The last element inserted in the stack is the first one to be removed.\n"
    "Common examples include a stack of plates or browser history."
)
pdf.chapter_body(body1)

# Chapter 2: Basic Operations of Stack
pdf.chapter_title("2. Basic Operations of Stack")
body2 = (
    "Main operations in a stack are:\n"
    "- push(element): Adds an element to the top of the stack.\n"
    "- pop(): Removes the element from the top of the stack.\n"
    "- peek(): Returns the top element without removing it.\n"
    "- isEmpty(): Checks whether the stack is empty.\n"
)
pdf.chapter_body(body2)

# Chapter 3: JavaScript Array as Stack
pdf.chapter_title("3. Using JavaScript Array as Stack")
body3 = (
    "In JavaScript, arrays can be used to implement stacks using push() and pop() methods.\n"
    "Example:"
)
pdf.chapter_body(body3)
code3 = (
    "const stack = [];\n"
    "stack.push(10);\n"
    "stack.push(20);\n"
    "console.log(stack.pop());  // 20\n"
    "console.log(stack[stack.length - 1]);  // 10 (peek)\n"
)
pdf.add_code(code3)

# Chapter 4: Example walkthrough
pdf.chapter_title("4. Example Walkthrough")
body4 = (
    "Let's add multiple elements and remove some to see how the stack changes.\n"
    "Example:\n"
    "const stack = [];\n"
    "stack.push(10);\n"
    "stack.push(20);\n"
    "stack.push(30);\n"
    "stack.pop(); // removes 30\n"
    "stack.push(40);\n"
    "console.log(stack); // [10, 20, 40]\n"
)
pdf.chapter_body(body4)

# Chapter 5: Custom Stack Class
pdf.chapter_title("5. Custom Stack Class in JavaScript")
body5 = (
    "We can also create a Stack class with its own methods for better abstraction.\n"
    "Example:"
)
pdf.chapter_body(body5)
code5 = (
    "class Stack {\n"
    "  constructor() {\n"
    "    this.items = [];\n"
    "  }\n"
    "  push(element) {\n"
    "    this.items.push(element);\n"
    "  }\n"
    "  pop() {\n"
    "    if(this.isEmpty()) return 'Stack is empty';\n"
    "    return this.items.pop();\n"
    "  }\n"
    "  peek() {\n"
    "    return this.items[this.items.length - 1];\n"
    "  }\n"
    "  isEmpty() {\n"
    "    return this.items.length === 0;\n"
    "  }\n"
    "}\n"
)
pdf.add_code(code5)

# Chapter 6: Practical Problems with Stack
pdf.chapter_title("6. Practical Problems Using Stack")
body6 = (
    "Some common problems where stacks are useful:\n"
    "- Reverse a string\n"
    "- Check for balanced parentheses in expressions\n"
    "- Implement undo functionality\n"
    "\nExample: Reverse a string\n"
    "Push all characters, then pop them to get reversed string."
)
pdf.chapter_body(body6)
code6 = (
    "function reverseString(str) {\n"
    "  const stack = [];\n"
    "  for(let char of str) {\n"
    "    stack.push(char);\n"
    "  }\n"
    "  let reversed = '';\n"
    "  while(stack.length > 0) {\n"
    "    reversed += stack.pop();\n"
    "  }\n"
    "  return reversed;\n"
    "}\n"
    "console.log(reverseString('Tanveer')); // reevnaT\n"
)
pdf.add_code(code6)

# Save PDF
pdf.output("/mnt/data/Stack_Data_Structure_Tanveer.pdf")
