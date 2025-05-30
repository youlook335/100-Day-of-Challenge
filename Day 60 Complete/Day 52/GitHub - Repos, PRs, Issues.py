from fpdf import FPDF

class GitHubPDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 14)
        self.cell(0, 10, "GitHub Basics: Repos, PRs, Issues", ln=True, align="C")
        self.ln(5)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, title, ln=True)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font("Arial", "", 11)
        self.multi_cell(0, 8, body)
        self.ln()

pdf = GitHubPDF()
pdf.add_page()

# Repos
pdf.chapter_title("1. Repos (Repositories)")
pdf.chapter_body("""
Repo یعنی Repository ایک folder یا project ہوتا ہے جسے GitHub پر رکھا جاتا ہے۔
اس میں ہوتا ہے:
- code
- commits
- branches
- settings

بنائیں:
1. GitHub پر "New Repository" پر کلک کریں
2. نام دیں، README چیک کریں (اگر چاہیں)
3. Create Repository

URL Format:
https://github.com/username/repo-name
""")

# PRs
pdf.chapter_title("2. PRs (Pull Requests)")
pdf.chapter_body("""
Pull Request کا مطلب ہے: کسی نے تبدیلی کی اور چاہتا ہے کہ وہ main code میں شامل ہو جائے۔

Steps:
1. نئی branch میں کام کریں
2. GitHub پر push کریں
3. "Compare & Pull Request" پر کلک کریں
4. PR title + description لکھیں
5. Submit کریں

Example:
"Please merge login feature into main."
""")

# Issues
pdf.chapter_title("3. Issues")
pdf.chapter_body("""
Issues GitHub پر task management کا طریقہ ہے۔

استعمال:
- bug
- نئی feature
- سوال
- کسی کو کام assign کرنا

Format:
- Title: مختصر بیان
- Description: مکمل وضاحت
- Labels: bug, enhancement, question
- Assignee: جس کو یہ کام کرنا ہے

Example:
Title: "Fix navbar responsiveness"
Description: "Navbar mobile view میں خراب ہو رہا ہے..."
""")

# Recap Table (simplified)
pdf.chapter_title("Recap Table")
pdf.chapter_body("""
| Concept | مطلب/استعمال |
|---------|------------------------------|
| Repo    | GitHub پر project folder     |
| PR      | تبدیلی شامل کرنے کی درخواست |
| Issue   | کام یا bug کا نوٹ             |
""")

# Save PDF
github_pdf_path = "/mnt/data/GitHub_Basics_Repos_PRs_Issues.pdf"
pdf.output(github_pdf_path)

github_pdf_path
