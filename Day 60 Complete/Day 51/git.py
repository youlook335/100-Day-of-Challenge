# Let's re-create the PDF using only ASCII characters to avoid any encoding issues.

clean_text = {
    "title": "Git Basics Practical Exercise",
    "intro": """
This exercise is designed to teach you 3 basic Git commands in practice:
1. git init
2. git commit
3. git branch
""",
    "step1": """
Step 1: Git Init

mkdir my-website
cd my-website
git init

This initializes a new Git repository in your folder.
""",
    "step2": """
Step 2: First Commit

echo "<h1>Welcome to My Website</h1>" > index.html
git add index.html
git commit -m "Initial commit with homepage"

You just made your first commit.
""",
    "step3": """
Step 3: Create a Branch

git branch new-footer
git checkout new-footer

You are now working on the 'new-footer' branch.
""",
    "step4": """
Step 4: Make Changes in Branch

echo "<footer>Contact us at example@email.com</footer>" >> index.html
git add index.html
git commit -m "Added footer section"

This commit exists only on the new-footer branch.
""",
    "step5": """
Step 5: Switch Back to Main

git checkout main

You are now back on the main branch.
""",
    "summary": """
Summary:

- git init: Started a Git repository
- git commit: Saved changes
- git branch: Created a separate line of development

You have successfully practiced Git basics.
"""
}

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", "B", 16)
pdf.cell(0, 10, clean_text["title"], ln=True, align="C")
pdf.ln(10)

pdf.set_font("Arial", "", 12)
for section in ["intro", "step1", "step2", "step3", "step4", "step5", "summary"]:
    pdf.multi_cell(0, 8, clean_text[section])
    pdf.ln(2)

ascii_pdf_path = "/mnt/data/Git_Basics_Practical_Exercise_ASCII.pdf"
pdf.output(ascii_pdf_path)
ascii_pdf_path
