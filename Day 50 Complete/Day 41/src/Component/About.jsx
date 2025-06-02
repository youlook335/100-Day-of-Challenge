import React from "react";

const About = () => {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      color: "#333",
      lineHeight: "1.6"
    }}>
      <h1 style={{ color: "#34495e", marginBottom: "20px" }}>About MK</h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        MK is dedicated to empowering learners and professionals by providing high-quality resources on education, property, exam preparation, and more.
      </p>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#2980b9", marginBottom: "10px" }}>Our Mission</h2>
        <p>
          To make knowledge accessible to everyone and support individuals in achieving their academic and professional goals.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#27ae60", marginBottom: "10px" }}>What We Offer</h2>
        <ul>
          <li>Comprehensive study materials and tutorials</li>
          <li>Up-to-date property market information</li>
          <li>Exam preparation tips and practice tests</li>
          <li>Career counseling and skill development</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#e67e22", marginBottom: "10px" }}>Our Team</h2>
        <p>
          A group of passionate educators, real estate experts, and tech enthusiasts working together to provide the best platform for our users.
        </p>
      </section>

      <footer style={{ textAlign: "center", color: "#aaa", fontSize: "14px", marginTop: "40px" }}>
        © 2025 MK. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
