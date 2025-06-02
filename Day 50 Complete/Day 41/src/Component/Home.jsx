import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "#2c3e50" }}>Welcome to MK</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Your ultimate platform for Education, Property, Exam Preparation, and much more!
        </p>
      </header>

      {/* Education Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#2980b9", borderBottom: "2px solid #2980b9", paddingBottom: "5px" }}>Education</h2>
        <p>
          Explore high-quality educational resources, tutorials, and courses to help you achieve academic excellence. From school to university, MK provides guidance tailored for every level.
        </p>
        <ul>
          <li>Interactive video lessons</li>
          <li>Subject-wise study materials</li>
          <li>Online quizzes and assessments</li>
        </ul>
      </section>

      {/* Property Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#27ae60", borderBottom: "2px solid #27ae60", paddingBottom: "5px" }}>Property</h2>
        <p>
          Discover the best real estate opportunities and learn everything about property buying, selling, and investment with expert advice.
        </p>
        <ul>
          <li>Latest property listings</li>
          <li>Investment tips and market analysis</li>
          <li>Legal guidance for property transactions</li>
        </ul>
      </section>

      {/* Exam Preparation Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#e67e22", borderBottom: "2px solid #e67e22", paddingBottom: "5px" }}>Exam Preparation</h2>
        <p>
          Get ready for your exams with comprehensive preparation materials, past papers, and expert strategies.
        </p>
        <ul>
          <li>ICS, FSC, Matric, and University level papers</li>
          <li>Time management tips</li>
          <li>Practice tests and revision notes</li>
        </ul>
      </section>

      {/* More Features Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#8e44ad", borderBottom: "2px solid #8e44ad", paddingBottom: "5px" }}>More Features</h2>
        <p>
          MK is constantly growing! Stay tuned for more features like career counseling, job alerts, skill development workshops, and community forums.
        </p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "60px", color: "#aaa", fontSize: "14px" }}>
        © 2025 MK. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
