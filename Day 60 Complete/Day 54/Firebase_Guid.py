from fpdf import FPDF

# Create a PDF class
class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, "Firebase Firestore + Hosting + Auth Guide", ln=True, align="C")
        self.ln(10)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, title, ln=True)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font("Courier", "", 10)
        self.multi_cell(0, 5, body)
        self.ln()

    def add_chapter(self, title, content):
        self.add_page()
        self.chapter_title(title)
        self.chapter_body(content)

# Content from the document created above
content = """
1. Project Initialization

Commands:
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install

Firebase Tools Installation:
npm install -g firebase-tools
firebase login

2. Firebase Setup

Initialize Firebase:
firebase init

During Init:
- ✔ Firestore: Configure security rules and indexes files for Firestore
- ✔ Hosting: Configure files for Firebase Hosting
- Use existing project (select from list)
- Public directory: dist
- Configure as single-page app: Yes
- GitHub deploys: No

This will generate:
- firebase.json
- firestore.rules
- firestore.indexes.json

3. Firestore Database Setup (Code)

Firebase Config (src/firebase.ts)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

Add / Get Firestore Data
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

// Add data
await addDoc(collection(db, 'tasks'), {
  title: 'Learn Firebase',
  completed: false
});

// Get data
const querySnapshot = await getDocs(collection(db, 'tasks'));
querySnapshot.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

4. Firebase Auth Setup (Code)

Signup & Login (Email/Password)
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

// Sign Up
await createUserWithEmailAndPassword(auth, 'test@example.com', 'password123');

// Login
await signInWithEmailAndPassword(auth, 'test@example.com', 'password123');

5. Build and Deploy

Build App:
npm run build

Deploy to Firebase:
firebase deploy

6. Hosting Output

After successful deploy:
- 🎯 Visit the Hosting URL shown in terminal.
- Example: https://your-project-id.web.app

Summary:
| Feature | Tools/Code |
|--------|-------------|
| Hosting | firebase init, npm run build, firebase deploy |
| Firestore DB | getFirestore, addDoc, getDocs |
| Auth | getAuth, createUserWithEmailAndPassword |

🧠 Tip: Use .env file to hide Firebase keys in production.
"""

# Generate PDF
pdf = PDF()
pdf.add_chapter("Firebase Firestore + Hosting + Auth Guide", content)
pdf_path = "/mnt/data/Firebase_Firestore_Guide.pdf"
pdf.output(pdf_path)

pdf_path
