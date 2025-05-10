# Remove special unicode characters like Ω (Omega), Θ (Theta) for compatibility
content_cleaned = [
    ("A. Basic Concepts", 
     "Time Complexity: Kitna waqt lagta hai algorithm ko run karne mein, input size ke hisaab se.\n"
     "Space Complexity: Kitni memory lagti hai algorithm ko run karte waqt.\n"
     "Input Size (n): Yeh input data ka size hai, jisse performance measure ki jati hai.\n"
     "Time vs Space: Time speed batata hai, Space memory batata hai."),
    
    ("B. Asymptotic Notations", 
     "Big O: Worst-case performance.\n"
     "Big Omega: Best-case performance.\n"
     "Big Theta: Average or exact performance.\n"
     "Yeh notations estimate karte hain code kis speed se chalega."),
    
    ("C. Types of Time Complexities", 
     "O(1): Constant - Jaise ek element access karna.\n"
     "O(log n): Logarithmic - Jaise binary search.\n"
     "O(n): Linear - Jaise simple loop.\n"
     "O(n log n): Linearithmic - Jaise merge sort.\n"
     "O(n^2): Quadratic - Jaise nested loop.\n"
     "O(2^n), O(n!): Exponential & factorial - Bohat slow algorithms."),
    
    ("D. Types of Space Complexities", 
     "O(1): Constant - Fixed variables.\n"
     "O(n): Linear - Input ke proportional memory.\n"
     "Recursive stack: Jab function recursion use karta hai.\n"
     "Auxiliary space: Extra space jo function ne use ki."),
    
    ("E. Case Analysis", 
     "Best Case: Jab input ideal ho.\n"
     "Worst Case: Jab input worst ho.\n"
     "Average Case: Normal expected input.\n"
     "Amortized: Average over multiple operations."),
    
    ("F. Time Complexity in Code", 
     "Loops: O(n), nested loops: O(n^2).\n"
     "Conditionals: Affect nahi karti time complexity ko.\n"
     "Function Calls: Agar recursion hai to stack bhi count hoti hai.\n"
     "Master Theorem: Recursive algorithms analyse karne ke liye."),
    
    ("G. Space Complexity in Code", 
     "Variables: Constant space.\n"
     "Arrays/Objects: Space increases with input.\n"
     "Recursion stack: Har recursive call memory use karta hai.\n"
     "Extra structures: Sets, maps extra space lete hain."),
    
    ("H. Common Algorithm Complexities", 
     "Linear Search: O(n)\n"
     "Binary Search: O(log n)\n"
     "Bubble Sort: O(n^2)\n"
     "Merge Sort: O(n log n)\n"
     "Hash Tables: Average O(1)\n"
     "DFS/BFS: O(V + E) (graph traversal)"),
    
    ("I. Comparison & Optimization", 
     "Time vs Memory ka tradeoff hota hai.\n"
     "Kuch algorithms fast hain magar zyada memory lete hain.\n"
     "Optimize karna hota hai: speed bhi achi ho aur memory bhi kam lage.")
]

# Create PDF again
pdf_cleaned = PDF()
pdf_cleaned.add_page()

for title, body in content_cleaned:
    pdf_cleaned.chapter_title(title)
    pdf_cleaned.chapter_body(body)

# Save cleaned PDF
cleaned_pdf_path = "/mnt/data/Time_Space_Complexity_Topics_Explained.pdf"
pdf_cleaned.output(cleaned_pdf_path)
cleaned_pdf_path
