# Fixing encoding error by replacing em dash (—) and other problematic characters with ASCII equivalents

safe_text = lambda text: text.replace("—", "-").replace("✔", "-")

pdf = PDFPlain()
pdf.add_page()

pdf.chapter_title("Problem Statement")
pdf.chapter_body(safe_text("Given an array of integers 'nums' of unique elements, return all possible subsets (the power set)."))

pdf.chapter_title("Input")
pdf.chapter_body("nums = [1, 2, 3]")

pdf.chapter_title("Output")
pdf.chapter_body(safe_text("""[
  [],
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 3],
  [2],
  [2, 3],
  [3]
]"""))

pdf.chapter_title("Approach: Backtracking")
pdf.chapter_body(safe_text("""Use recursion to explore all possible subsets by choosing or not choosing each element.

Steps:
1. Start from index 0 with an empty path.
2. For each index, include the current number and move forward.
3. Backtrack by removing the number and trying next.
4. Store each valid subset in the result array."""))

pdf.chapter_title("TypeScript Code")
code = """function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, path: number[]) {
        result.push([...path]);  // Save current subset

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);              // Choose
            backtrack(i + 1, path);          // Explore
            path.pop();                      // Backtrack
        }
    }

    backtrack(0, []);
    return result;
}

// Example usage:
console.log(subsets([1, 2, 3]));
"""
pdf.chapter_body(code)

pdf.chapter_title("Time & Space Complexity")
pdf.chapter_body(safe_text("""Time Complexity: O(2^n) - Each element has 2 choices (include or not include)
Space Complexity: O(n) - Recursive path space"""))

pdf.chapter_title("Summary")
pdf.chapter_body(safe_text("""- Backtracking is used to explore decision trees.
- Subsets problem generates all combinations of elements.
- Recursive + Backtrack + Include/Exclude pattern.
- Clean, elegant TypeScript implementation."""))

output_path = "/mnt/data/Backtracking_Subsets_TypeScript.pdf"
pdf.output(output_path)
output_path
