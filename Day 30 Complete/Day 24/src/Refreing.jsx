import React, { useEffect, useRef, useState } from 'react'

const Refreing = () => {
  // hum useref ko DOM mma bhi use kar sakta hai
  // 🔁 useRef render count track کرنے کے لیے
  const a = useRef(0); // first render pe 1
  const [count, setCount] = useState(0);

  useEffect(() => {
    a.current += 1;
    console.log(`This is the part of Rendering: ${a.current}`);
  });

  return (
    <>
      <h2>Render Count: {a.current}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
}

export default Refreing;