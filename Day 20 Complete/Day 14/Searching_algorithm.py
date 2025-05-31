from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 14)
        self.cell(0, 10, 'Linear Search and Binary Search - Simple Guide', 0, 1, 'C')
        self.ln(5)

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, title, 0, 1)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font('Arial', '', 11)
        self.multi_cell(0, 8, body)
        self.ln()

    def code_block(self, code):
        self.set_font('Courier', '', 10)
        self.set_fill_color(230, 230, 230)
        self.multi_cell(0, 6, code, fill=True)
        self.ln()

pdf = PDF()
pdf.add_page()

# Title
pdf.set_font('Arial', 'B', 16)
pdf.cell(0, 10, 'Linear Search and Binary Search — Easy Explanation', 0, 1, 'C')
pdf.ln(5)

# Linear Search Chapter
pdf.chapter_title('1. Linear Search')
linear_search_text = (
    "What is it?\n"
    "Linear Search checks every element of an array one by one from start to end until the target is found.\n\n"
    "Example:\n"
)
linear_search_code = (
    "let numbers = [5, 12, 8, 21, 7];\n"
    "let target = 21;\n\n"
    "function linearSearch(arr, target) {\n"
    "  for (let i = 0; i < arr.length; i++) {\n"
    "    if (arr[i] === target) {\n"
    "      return i;\n"
    "    }\n"
    "  }\n"
    "  return -1;\n"
    "}\n\n"
    "console.log(linearSearch(numbers, target));  // Output: 3"
)

pdf.chapter_body(linear_search_text)
pdf.code_block(linear_search_code)
pdf.chapter_body("Time Complexity: O(n) — Linear search checks elements one by one.")

# Binary Search Chapter
pdf.chapter_title('2. Binary Search')
binary_search_text = (
    "What is it?\n"
    "Binary Search is a fast way to find a target in a sorted array by repeatedly dividing the search interval in half.\n\n"
    "Example:\n"
)
binary_search_code = (
    "let sortedNumbers = [3, 6, 9, 15, 18];\n"
    "let target = 15;\n\n"
    "function binarySearch(arr, target) {\n"
    "  let start = 0;\n"
    "  let end = arr.length - 1;\n\n"
    "  while (start <= end) {\n"
    "    let mid = Math.floor((start + end) / 2);\n\n"
    "    if (arr[mid] === target) {\n"
    "      return mid;\n"
    "    } else if (arr[mid] < target) {\n"
    "      start = mid + 1;\n"
    "    } else {\n"
    "      end = mid - 1;\n"
    "    }\n"
    "  }\n\n"
    "  return -1;\n"
    "}\n\n"
    "console.log(binarySearch(sortedNumbers, target));  // Output: 3"
)

pdf.chapter_body(binary_search_text)
pdf.code_block(binary_search_code)
pdf.chapter_body("Time Complexity: O(log n) — Binary search divides the search space in half each step.")

# Summary Table
summary_text = (
    "Summary:\n\n"
    "Feature          | Linear Search             | Binary Search                  \n"
    "-----------------|---------------------------|-------------------------------\n"
    "Array Condition  | Unsorted or Sorted        | Sorted                        \n"
    "Approach         | One by one check          | Divide and conquer            \n"
    "Time Complexity  | O(n)                      | O(log n)                     \n"
    "Use Case         | Small or unsorted data    | Large sorted data            "
)
pdf.chapter_body(summary_text)

# Save file
pdf_path = "/mnt/data/Linear_and_Binary_Search_Guide_Tanveer.pdf"
pdf.output(pdf_path)

pdf_path
