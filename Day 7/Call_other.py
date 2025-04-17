from fpdf import FPDF

# Create instance of FPDF class
pdf = FPDF()

# Add page
pdf.add_page()

# Set title
pdf.set_font("Arial", 'B', 16)
pdf.cell(200, 10, txt="JavaScript Asynchronous Programming - Callback, Promises, Async/Await", ln=True, align='C')

# Line break
pdf.ln(10)

# Set content font
pdf.set_font("Arial", size=12)

# Introduction
pdf.multi_cell(0, 10, txt="Asynchronous programming in JavaScript allows tasks to be performed in the background without blocking the main thread. This is achieved using Callbacks, Promises, and Async/Await.\n\n")

# Callback Section
pdf.set_font("Arial", 'B', 14)
pdf.cell(200, 10, txt="1. Callback Function", ln=True)
pdf.set_font("Arial", size=12)
pdf.multi_cell(0, 10, txt=(
    "A callback is a function passed into another function as an argument to be executed later.\n"
    "It is used to handle asynchronous tasks.\n\n"
    "Example:\n"
    "```javascript\n"
    "function sayHello(name, callback) {\n"
    "  console.log(`Hello, ${name}`);\n"
    "  callback();\n"
    "}\n\n"
    "function goodbye() {\n"
    "  console.log('Goodbye!');\n"
    "}\n\n"
    "sayHello('Ali', goodbye);\n"
    "```"
))

# Line break
pdf.ln(10)

# Promises Section
pdf.set_font("Arial", 'B', 14)
pdf.cell(200, 10, txt="2. Promises", ln=True)
pdf.set_font("Arial", size=12)
pdf.multi_cell(0, 10, txt=(
    "A promise is an object representing the eventual completion or failure of an asynchronous operation.\n"
    "It helps avoid callback hell by allowing chaining of operations.\n\n"
    "Example:\n"
    "```javascript\n"
    "let promise = new Promise(function(resolve, reject) {\n"
    "  let success = true;\n"
    "  if (success) {\n"
    "    resolve('Kaam hogaya!');\n"
    "  } else {\n"
    "    reject('Error hogaya!');\n"
    "  }\n"
    "});\n\n"
    "promise\n"
    "  .then(function(result) {\n"
    "    console.log(result);  // Kaam hogaya!\n"
    "  })\n"
    "  .catch(function(error) {\n"
    "    console.log(error);   // Error hogaya!\n"
    "  });\n"
    "```"
))

# Line break
pdf.ln(10)

# Async/Await Section
pdf.set_font("Arial", 'B', 14)
pdf.cell(200, 10, txt="3. Async/Await", ln=True)
pdf.set_font("Arial", size=12)
pdf.multi_cell(0, 10, txt=(
    "Async/Await is a modern approach to handling asynchronous operations in JavaScript.\n"
    "It allows for writing asynchronous code in a synchronous-like manner, making it more readable.\n\n"
    "Example:\n"
    "```javascript\n"
    "function getData() {\n"
    "  return new Promise(resolve => {\n"
    "    setTimeout(() => {\n"
    "      resolve('Data mil gaya!');\n"
    "    }, 2000);\n"
    "  });\n"
    "}\n\n"
    "async function showData() {\n"
    "  console.log('Data ka intezaar...');\n"
    "  let result = await getData();\n"
    "  console.log(result);\n"
    "}\n\n"
    "showData();\n"
    "```"
))

# Line break
pdf.ln(10)

# Conclusion
pdf.set_font("Arial", 'I', 12)
pdf.multi_cell(0, 10, txt=(
    "In conclusion, Callback, Promises, and Async/Await are essential concepts for handling asynchronous tasks in JavaScript. "
    "While Callbacks are basic, Promises offer better handling, and Async/Await is the most modern and readable approach to working with asynchronous code.\n\n"
    "By understanding and practicing these, you can easily handle complex tasks and avoid common pitfalls like callback hell."
))

# Save the pdf with name
file_path = "/mnt/data/JS_Async_Programming.pdf"
pdf.output(file_path)

file_path
