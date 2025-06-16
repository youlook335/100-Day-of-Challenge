import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

type UserData = {
  name: string;
  fatherName: string;
  email: string;
  age: number;
  qualification: string;
  dob: string;
  cnic: string;
  fatherCnic: string;
  address: string;
  createdAt?: Timestamp;
};

export default function Dashboard() {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    fatherName: "",
    email: "",
    age: 0,
    qualification: "",
    dob: "",
    cnic: "",
    fatherCnic: "",
    address: "",
  });

  const [users, setUsers] = useState<UserData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      createdAt: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "users"), newUser);
      alert("✅ Submitted!");
      setUsers([newUser]);
      setFormData({
        name: "",
        fatherName: "",
        email: "",
        age: 0,
        qualification: "",
        dob: "",
        cnic: "",
        fatherCnic: "",
        address: "",
      });
    } catch (err) {
      alert("❌ Error saving data");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#eef1f5",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4CAF50", marginBottom: "30px" }}>📝 User Form + 📋 Table</h1>

      <div style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
        {/* Form */}
        <div style={{
          flex: "1",
          minWidth: "350px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", name: "name" },
              { label: "Father Name", name: "fatherName" },
              { label: "Email", name: "email", type: "email" },
              { label: "Age", name: "age", type: "number" },
              { label: "Qualification", name: "qualification" },
              { label: "DOB", name: "dob", type: "date" },
              { label: "CNIC", name: "cnic" },
              { label: "Father CNIC", name: "fatherCnic" },
            ].map(({ label, name, type = "text" }) => (
              <div key={name} style={{ marginBottom: "12px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>{label}</label>
                <input
                  type={type}
                  name={name}
                  value={(formData as any)[name]}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            ))}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#4CAF50",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Table */}
        <div style={{
          flex: "2",
          minWidth: "400px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          overflowX: "auto"
        }}>
          <h2 style={{ color: "#333", marginBottom: "20px" }}>Submitted Data</h2>
          {users.length > 0 ? (
            <table border={1} cellPadding={8} style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={{ background: "#4CAF50", color: "white" }}>
                <tr>
                  <th>Name</th>
                  <th>Father</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Qualification</th>
                  <th>DOB</th>
                  <th>CNIC</th>
                  <th>Father CNIC</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                    <td>{user.name}</td>
                    <td>{user.fatherName}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.qualification}</td>
                    <td>{user.dob}</td>
                    <td>{user.cnic}</td>
                    <td>{user.fatherCnic}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ color: "#999" }}>No data submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
