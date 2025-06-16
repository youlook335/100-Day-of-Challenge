// src/components/UserForm.tsx
import { useState } from "react";
import {db} from "../firebase"; // Adjust the import path as necessary
import { collection, addDoc } from "firebase/firestore";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    await addDoc(collection(db, "users"), {
      name,
      email
    });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded space-y-2">
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add User
      </button>
    </form>
  );
};

export default UserForm;
