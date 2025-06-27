# 🛡️ Simple Auth API (Backend Only)

This is a simple **Authentication API** built using **Node.js + Express + TypeScript**.  
No database, no JWT — just pure session logic (for learning/testing).  
You can test this API easily using **Postman**.

---

## 📁 Project Structure

```
📦 project-root
┣ 📜 index.ts          // Main API file
┣ 📜 users.ts          // In-memory users and session
┣ 📜 package.json
┣ 📜 tsconfig.json
```

---

## 🚀 Features

✅ Register new user  
✅ Login existing user  
✅ Session-based login system (no JWT)  
✅ Protected route: `/secret`  
✅ Logout route to end session  
✅ Error handling with status codes  
✅ Tested using Postman

---

## 📦 How to Run the Project

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Dev Server
```bash
npm run dev
```

> App will run on:  
> `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Route        | Description          |
|--------|--------------|----------------------|
| POST   | `/register`  | Register new user    |
| POST   | `/login`     | Login user           |
| GET    | `/secret`    | Protected route      |
| GET    | `/logout`    | End session (logout) |

---

## 📮 How to Use with Postman

### 🧱 Step 1: Download & Install Postman
- [https://www.postman.com/downloads](https://www.postman.com/downloads)
- Run the `.exe` file and complete setup

### 🧱 Step 2: Create New Request
- Open Postman → `New` → `Request`

### 🧱 Step 3: Test the Endpoints

#### 🔐 Register
- **Method:** POST  
- **URL:** `http://localhost:3000/register`  
- **Body (JSON):**
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

#### 🔐 Login
- **Method:** POST  
- **URL:** `http://localhost:3000/login`  
- **Body (JSON):**
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

#### 🔐 Access Protected Route
- **Method:** GET  
- **URL:** `http://localhost:3000/secret`

#### 🔐 Logout
- **Method:** GET  
- **URL:** `http://localhost:3000/logout`

---

## ⚠️ Error Handling Guide

| Situation                          | What Happens                            |
|------------------------------------|------------------------------------------|
| User already exists (register)     | `400 Bad Request` + `"User already exists"` |
| Invalid login credentials          | `401 Unauthorized` + `"Invalid credentials"` |
| Accessing `/secret` without login | `401 Unauthorized` + `"Access Denied"` |
| Wrong route like `/abc`            | `404 Not Found` + `"Cannot GET /abc"` |

👉 **Tip:** Agar route ka method galat ho jaaye (e.g. GET on `/register`)  
Postman se `POST`/`GET` sahi select karo.

---

## 🧠 Concepts You Learn Here

- How to build backend APIs in Express
- How to handle sessions without JWT or DB
- How to send requests with Postman
- How to handle HTTP errors (400, 401, 404)
- How to structure routes for clarity

---

## 🔒 Security Note

⚠️ This app uses in-memory session, suitable only for learning.  
Not for production. For real apps:
- Use MongoDB or PostgreSQL
- Use `bcrypt` for password hashing
- Use JWT or session cookies for authentication

---

## 🛠️ Made By

Built with ❤️ by **Tanveer**  
`Day 78-79: Backend Auth Practice – 100 Days of Code Challenge`