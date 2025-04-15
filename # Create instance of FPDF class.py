# Create instance of FPDF class
pdf = FPDF()

# Add a page
pdf.add_page()

# Set title
pdf.set_font("Arial", 'B', 16)
pdf.cell(200, 10, txt="DOM Manipulation - Query Selectors & Events", ln=True, align="C")
pdf.ln(10)

# Introduction and sections
sections = [
    ("📌 Basic / Beginner Topics", [
        ("DOM Introduction", "DOM کیا ہے؟"),
        ("HTML اور DOM میں فرق", "Basic Query Selectors"),
        ("getElementById()", "Example: const divElement = document.getElementById('myDiv');"),
        ("getElementsByClassName()", "const paragraphs = document.getElementsByClassName('myParagraph');"),
        ("getElementsByTagName()", "const listItems = document.getElementsByTagName('li');"),
        ("Using querySelector() and querySelectorAll()", "const firstDiv = document.querySelector('div');"),
        ("querySelector(): First matching element", "const firstDiv = document.querySelector('div');"),
        ("querySelectorAll(): All matching elements", "const allDivs = document.querySelectorAll('div');"),
        ("Basic DOM Traversal", "parentElement, children, firstChild, lastChild"),
        ("Changing Content", "innerText, innerHTML, textContent"),
        ("Basic Styling Manipulation", "element.style.propertyName, classList.add(), classList.remove()")
    ]),
    ("📌 Intermediate Topics", [
        ("Events Handling", "Event types: click, mouseover, keydown, submit, change"),
        ("addEventListener() vs onclick", "Using event listeners to handle click events."),
        ("Event bubbling and capturing", "Understanding how events propagate in the DOM."),
        ("event.preventDefault(), event.stopPropagation()", "Prevent default actions in event handling."),
        ("Event Delegation", "Efficiently handle events on dynamic content."),
        ("Creating and Inserting New Elements", "document.createElement(), appendChild(), prepend()"),
        ("Manipulating Attributes", "getAttribute(), setAttribute(), removeAttribute()"),
        ("classList manipulation", "add(), remove(), toggle()")
    ]),
    ("📌 Advanced Topics", [
        ("Complex DOM Traversal", "closest(), matches(), childNodes vs children"),
        ("Custom Events", "new CustomEvent(), dispatchEvent()"),
        ("Performance Optimization", "Minimizing DOM manipulation for better performance."),
        ("Working with Forms", "form.submit(), form.reset(), form.elements"),
        ("Advanced Styling Manipulation", "classList.toggle(), working with CSS Variables"),
        ("Dynamic DOM Elements and Real-time Interaction", "Pagination, Infinite scroll, Modal popups"),
        ("Accessibility (A11y)", "Adding ARIA attributes programmatically for accessibility.")
    ])
]

# Set font for the document
pdf.set_font("Arial", size=12)

# Loop through sections and topics
for section_title, topics in sections:
    # Add section title
    pdf.set_font("Arial", 'B', 14)
    pdf.cell(200, 10, txt=section_title, ln=True, align="L")
    pdf.ln(5)

    # Add topics and descriptions
    pdf.set_font("Arial", size=12)
    for topic, description in topics:
        pdf.cell(200, 10, txt=f"{topic}: {description}", ln=True)

    # Add a space between sections
    pdf.ln(5)

# Output the file
pdf_file_path = '/mnt/data/DOM_Manipulation_Topics.pdf'
pdf.output(pdf_file_path)

pdf_file_path