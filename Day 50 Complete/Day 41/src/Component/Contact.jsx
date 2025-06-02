import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f0f4f8",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "20px", textAlign: "center" }}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px"
            }}
            placeholder="Your full name"
          />
        </label>

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px"
            }}
            placeholder="Your email address"
          />
        </label>

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              resize: "vertical"
            }}
            placeholder="Write your message here"
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#2980b9",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer",
            width: "100%",
            transition: "background-color 0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#1c5980"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#2980b9"}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
