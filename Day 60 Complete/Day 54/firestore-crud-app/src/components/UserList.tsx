// src/components/UserList.tsx
import { useEffect, useState } from "react";
import { db } from "../firebase"; // Adjust the import path as necessary
import { collection, getDocs } from "firebase/firestore";

type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    const userList: User[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as User[];
    setUsers(userList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">User List</h2>
      <ul className="space-y-1">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded bg-white">
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
