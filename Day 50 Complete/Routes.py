from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 14)
        self.cell(0, 10, "React Router DOM Basics - Examples Guide", ln=True, align="C")
        self.ln(5)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.set_text_color(30, 30, 120)
        self.cell(0, 10, title, ln=True)
        self.set_text_color(0, 0, 0)

    def chapter_body(self, body):
        self.set_font("Arial", "", 11)
        self.multi_cell(0, 8, body)
        self.ln()

pdf = PDF()
pdf.add_page()

examples = [
    {
        "title": "1. BrowserRouter",
        "body": "React App ke around router system lagana hota hai.\n\nExample:\n- Jaise ek ghar ke andar alag alag kamray hote hain, waise hi React App ke andar alag pages hote hain.\n- BrowserRouter us ghar ka darwaza hai jo andar jane ka rasta deta hai."
    },
    {
        "title": "2. Routes + Route",
        "body": "Ye batata hai kaun sa URL kis component ko dikhaye.\n\nExample:\n- '/' → Home Page\n- '/about' → About Page\n- '/contact' → Contact Page\n- Jaise: Jab koi '/about' likhe to About wala section dikhana."
    },
    {
        "title": "3. Link",
        "body": "React me bina reload ke page change karne ka tariqa.\n\nExample:\n- Home page me button 'Go to About' ho, us par click karne par user '/about' page par chala jaye.\n- Link React ka anchor tag hota hai."
    },
    {
        "title": "4. useParams",
        "body": "URL me se dynamic value nikalne ke liye.\n\nExample:\n- Agar URL hai '/user/15' to useParams() se '15' milta hai.\n- Is ID se aap database se user ka detail fetch kar sakte hain."
    },
    {
        "title": "5. useNavigate",
        "body": "React code se user ko manually kisi aur page par bhejna.\n\nExample:\n- Agar user login kare, to usse '/dashboard' par bhej do.\n- Ya button click hone par '/profile' par bhejna."
    },
    {
        "title": "6. Navigate (Redirect)",
        "body": "Condition ke base par kisi ko auto dusre page par bhejna.\n\nExample:\n- Agar user login nahi hai to usse '/login' par automatically redirect kar do.\n- Ye tab use hota hai jab user restricted page par bina permission ke jaye."
    },
    {
        "title": "7. 404 Not Found Route",
        "body": "Invalid route par fallback component dikhana.\n\nExample:\n- Agar koi '/unknownpage' likhe, to 'Page Not Found' component dikhana.\n- Ye app ki user experience ko better banata hai."
    }
]

for example in examples:
    pdf.chapter_title(example["title"])
    pdf.chapter_body(example["body"])

pdf_path = "/mnt/data/React_Router_DOM_Basics_Examples.pdf"
pdf.output(pdf_path)
pdf_path
