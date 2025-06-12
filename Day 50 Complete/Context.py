# Replacing special unicode characters (like en-dash “–”) with simple ASCII equivalents ("-")

import re

def clean_text(text):
    # Replace en-dash, em-dash, and other special characters with hyphen or remove them
    text = re.sub(r'[–—]', '-', text)
    return text.encode('ascii', 'ignore').decode('ascii')

# Clean all content before adding to PDF
pdf = CleanPDF()
pdf.add_page()

pdf.chapter_title("Context API Kya Hai?")
pdf.chapter_body(clean_text("""React ka Context API ek aisa tool hai jo aapko global state manage karne ki sahulat deta hai bina props drilling ke.
Iska use tab hota hai jab ek data ko app ke multiple levels tak bhejna hota hai.""" ))

pdf.chapter_title("Real-Life Example")
pdf.chapter_body(clean_text("""Agar aapke paas ek user ka data hai (name, email, isLoggedIn), aur aap is data ko multiple components me use karna chahte hain.
Agar har component ko props bhejna pade to kaafi complex ho jata hai. Context API se aap ek global state bana kar is problem ko solve kar sakte hain.
"""))

pdf.chapter_title("Context API ke Core Components")
pdf.chapter_body(clean_text("""1. React.createContext() - Context object banata hai
2. Context.Provider - Data provide karta hai sabhi child components ko
3. useContext(ContextName) - Data ko consume karta hai kisi bhi component me"""))

pdf.chapter_title("Complete Deep Example")
pdf.chapter_body(clean_text("""Chaliye ek Login System banate hain jisme Context API ka proper use hota hai:

1. UserContext.js (Context aur Provider)

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

2. App.js

import React from 'react';
import { UserProvider } from './UserContext';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <UserProvider>
      <Home />
      <Profile />
    </UserProvider>
  );
}

3. Home.js

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
  const { login } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => login({ name: 'Tanveer', email: 'tanveer@example.com' })}>
        Login
      </button>
    </div>
  );
};

4. Profile.js

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  if (!user) return <p>Please log in</p>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};"""))

pdf.chapter_title("Kab Use Karein Context API?")
pdf.chapter_body(clean_text("""- Jab aapko ek global state chahiye ho
- Jab aapko multiple components me same data chahiye ho
- Jab aap auth, theme, ya language toggle jaise feature bana rahe ho"""))

pdf.chapter_title("Summary")
pdf.chapter_body(clean_text("""Context API ek lightweight aur efficient tareeqa hai state ko globally manage karne ka.
Agar aap Redux use nahi karna chahte, to Context API ka use kar ke simple aur effective solution create kar sakte hain."""))

output_path = "/mnt/data/Context_API_Deep_Dive.pdf"
pdf.output(output_path)
output_path
