import React, { useState } from "react";
import axios from "axios";

export default function GeminiAPI() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      const response = await axios.post(
  `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
  {
    contents: [
      {
        role: "user",
        parts: [{ text: "Tell me a joke" }],
      },
    ],
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);


      const text = response.data.candidates[0].content.parts[0].text;
      setData(text);
    } catch (error) {
      console.error(error);
      setData("Error fetching data");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={fetchData}>
        {loading ? "Loading..." : "Get Joke from Gemini"}
      </button>
      <p style={{ marginTop: 20 }}>{data}</p>
    </div>
  );
}
