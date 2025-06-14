# Re-generating PDF without emojis (which caused encoding error)

class PDFClean(FPDF):
    def header(self):
        self.set_font("Arial", "B", 14)
        self.cell(0, 10, "Two Pointer Technique in TypeScript", ln=True, align="C")
        self.ln(5)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.set_text_color(30, 30, 120)
        self.cell(0, 10, title, ln=True)
        self.set_text_color(0, 0, 0)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font("Arial", "", 11)
        self.multi_cell(0, 8, body)
        self.ln()

pdf = PDFClean()
pdf.add_page()

# Introduction
pdf.chapter_title("What is Two Pointer Technique?")
pdf.chapter_body("""
Two Pointer is an algorithmic technique used to reduce time complexity by using two indices (pointers) to traverse a data structure, usually an array or a string.

- It's not a Data Structure.
- It is used when you have to iterate over data from both ends or scan it in a linear pass with two indexes.
""")

# Use Cases
pdf.chapter_title("Common Use Cases")
pdf.chapter_body("""
1. Finding target sum in a sorted array
2. Reversing an array or string
3. Removing duplicates from sorted array
4. Checking if a string is a palindrome
5. Trapping Rain Water
6. Container With Most Water
""")

# Example 1: Target Sum
pdf.chapter_title("Example 1: Pair with Target Sum (Sorted Array)")
pdf.chapter_body("""
function twoSumSorted(arr: number[], target: number): [number, number] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }

  return null;
}
""")

# Example 2: Is Palindrome
pdf.chapter_title("Example 2: Is Palindrome")
pdf.chapter_body("""
function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}
""")

# Example 3: Remove Duplicates
pdf.chapter_title("Example 3: Remove Duplicates from Sorted Array")
pdf.chapter_body("""
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
""")

# Summary
pdf.chapter_title("Summary")
pdf.chapter_body("""
Two Pointer = 2 indexes (e.g., left, right) that move across array/string to solve problems more efficiently.

Mostly used for linear problems where nested loops can be avoided.
""")

pdf_output_path_clean = "/mnt/data/Two_Pointer_Technique_TS.pdf"
pdf.output(pdf_output_path_clean)

pdf_output_path_clean
