# Create a clean PDF with watermark "Tanveer"
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=14)

# Add Title
pdf.cell(200, 10, txt="Arrow Functions in JavaScript (ES6+)", ln=True, align='C')
pdf.ln(5)

# Add clean content with new watermark
content = """
Arrow Functions Kya Hote Hain?

Arrow Functions JavaScript ES6 ka ek Short, Clean aur Modern tareeqa hai functions likhne ka.

Aam Function:
function add(a, b) {
  return a + b;
}

Arrow Function:
const add = (a, b) => a + b;

Dono ek hi kaam karte hain, bas likhne ka andaaz badla hai.

Syntax:
const functionName = (parameters) => {
  // code
};

Misal:
const greet = () => {
  console.log("Assalam o Alaikum!");
};
greet();

Implicit Return:
Agar function ka sirf ek statement ho:
const multiply = (a, b) => a * b;

this ke sath Arrow Function:
function Person() {
  this.name = "Ali";
  setTimeout(() => {
    console.log("Hello " + this.name);
  }, 1000);
}
new Person();

Kahan Na Lagayen?
- Jab 'this' ka apna alag context chahiye
- Event listeners mein

Summary:

Feature               | Traditional Function | Arrow Function
------------------------------------------------------------
Syntax                | Long                 | Short
this binding          | Own                  | Parent context
arguments object      | Available            | Not available
Suitable for methods? | Yes                  | Not always

Watermark: Tanveer
"""

pdf.multi_cell(0, 8, content)

# Output PDF with new watermark
pdf_output_path = "/mnt/data/Arrow_Functions_Tanveer_Final.pdf"
pdf.output(pdf_output_path)

# Provide the link
pdf_output_path
