from fpdf import FPDF

# Create a PDF file using FPDF
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

# Set title and font
pdf.set_font("Arial", style='B', size=16)
pdf.cell(200, 10, "Understanding ES6+ Features (Destructuring, Spread, Rest, Arrow Functions)", ln=True, align='C')

# Set font for content
pdf.ln(10)  # line break
pdf.set_font("Arial", size=12)

# Content for the PDF
content = """
Part 1: Basic Concepts

1. Destructuring:
Destructuring کا مقصد یہ ہے کہ آپ data structures (array یا object) سے values کو زیادہ آسان اور واضح طریقے سے extract کر سکیں۔

- Object Destructuring:
Object destructuring سے آپ object کی properties کو variables میں assign کر سکتے ہیں۔

Example:
const person = { name: 'Ali', age: 25, city: 'Lahore' };
const { name, age } = person;
console.log(name, age); // Output: Ali 25

- Array Destructuring:
Array destructuring سے آپ array کے elements کو directly variables میں assign کر سکتے ہیں۔

Example:
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second); // Output: 10 20


2. Spread Operator (...):
Spread operator آپ کو array یا object کے elements کو unroll (expand) کرنے کی سہولت دیتا ہے۔

- Array Example:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

- Object Example:
const person = { name: 'Ali', age: 25 };
const updatedPerson = { ...person, city: 'Lahore' };
console.log(updatedPerson); // Output: { name: 'Ali', age: 25, city: 'Lahore' }


3. Rest Operator (...):
Rest operator function parameters میں استعمال ہوتا ہے تاکہ آپ multiple arguments کو array میں convert کر سکیں۔

Example:
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


4. Arrow Functions:
Arrow functions concise syntax provide کرتے ہیں۔ یہ `this` کو lexically bind کرتے ہیں، یعنی outer function کی `this` context inherit کرتے ہیں۔

Basic Example:
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

No Parameters Example:
const greet = () => console.log('Hello!');
greet(); // Output: Hello!


Part 2: Advanced Concepts

1. Advanced Destructuring:
Destructuring کو آپ default values کے ساتھ بھی استعمال کر سکتے ہیں اور nested objects میں بھی۔

- Default Values Example:
const person = { name: 'Ali' };
const { name, age = 25 } = person;
console.log(name, age); // Output: Ali 25

- Nested Object Destructuring Example:
const person = { name: 'Ali', address: { city: 'Lahore', country: 'Pakistan' } };
const { address: { city, country } } = person;
console.log(city, country); // Output: Lahore Pakistan


2. Spread Operator in Functions:
Spread operator function calls میں arguments pass کرنے کے لیے بھی استعمال ہو سکتا ہے۔

Example:
const numbers = [1, 2, 3];
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 3


3. Advanced Arrow Functions:
Arrow functions کو callbacks اور higher-order functions میں استعمال کیا جا سکتا ہے۔ `this` binding کی وجہ سے یہ callbacks میں زیادہ effective ہوتے ہیں۔

Example with `this`:
const obj = {
  name: 'Ali',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  }
};
obj.greet(); // Output: Hello, Ali


4. Rest and Spread with Objects:
آپ objects میں بھی rest اور spread operator کا استعمال کر سکتے ہیں۔

- Rest in Object:
const person = { name: 'Ali', age: 25, city: 'Lahore' };
const { city, ...rest } = person;
console.log(city); // Output: Lahore
console.log(rest); // Output: { name: 'Ali', age: 25 }
"""

# Add content to the PDF
pdf.multi_cell(0, 10, content)

# Save PDF to a file
pdf_output_path = "/mnt/data/ES6_Plus_Features.pdf"
pdf.output(pdf_output_path)

pdf_output_path  # Return the file path for download
