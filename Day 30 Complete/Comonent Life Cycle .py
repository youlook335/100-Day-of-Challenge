from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, "React Component Lifecycle (with Hooks)", 0, 1, "C")

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, title, 0, 1, "L")
        self.ln(2)

    def chapter_body(self, body):
        self.set_font("Arial", "", 11)
        self.multi_cell(0, 10, body)
        self.ln()

pdf = PDF()
pdf.add_page()

# Intro
pdf.chapter_title("1. Lifecycle Meaning in React")
pdf.chapter_body(
    "React Lifecycle ka matlab hai ke har component teen important stages se guzarta hai:\n\n"
    "- Mounting (jab component render hota hai)\n"
    "- Updating (jab props ya state change hoti hai)\n"
    "- Unmounting (jab component destroy hota hai)\n\n"
    "Yeh lifecycle humein control deta hai ke hum kab kya code chalayein—API call, cleanup, etc."
)

# Hooks Code Explanation
pdf.chapter_title("2. Lifecycle with Hooks (useEffect)")
pdf.chapter_body(
    "React functional components mein lifecycle ko control karne ke liye hum useEffect hook ka use karte hain.\n\n"
    "Mounting:\n"
    "useEffect(() => {\n"
    "  console.log('Component mounted');\n"
    "}, []);\n\n"
    "Updating:\n"
    "useEffect(() => {\n"
    "  console.log('Component updated');\n"
    "}, [dependency]);\n\n"
    "Unmounting:\n"
    "useEffect(() => {\n"
    "  return () => {\n"
    "    console.log('Component will unmount');\n"
    "  };\n"
    "}, []);"
)

# Final Thoughts
pdf.chapter_title("3. Summary")
pdf.chapter_body(
    "React Lifecycle ka samajh hona zaroori hai taake aap apne components ko clean, efficient aur bug-free bana sakein.\n"
    "useEffect hook is core tool for this. Lifecycle ka matlab sirf code likhna nahi, balkay smart tarike se code manage karna hai."
)

output_path = "/mnt/data/React_Component_Lifecycle_Hooks_Urdu.pdf"
pdf.output(output_path)
output_path
