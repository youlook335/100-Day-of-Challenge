import React from "react";

const faqs = [
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the Sign Up button on the top right and fill in your details."
  },
  {
    question: "What if I forget my password?",
    answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact support by visiting the Contact page and sending us a message."
  },
  {
    question: "Are the resources free?",
    answer: "Yes, most of our educational resources are free to access."
  },
  {
    question: "Can I access content offline?",
    answer: "Currently, offline access is not available, but we are working on it."
  }
];

const Help = () => {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#e9f0f8",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      color: "#34495e"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Help & FAQs</h1>

      {faqs.map((faq, index) => (
        <div key={index} style={{
          marginBottom: "20px",
          padding: "15px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
        }}>
          <h3 style={{ marginBottom: "8px", color: "#2980b9" }}>{faq.question}</h3>
          <p style={{ margin: 0 }}>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Help;
