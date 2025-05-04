import React, { useEffect, useState } from 'react'
import "./Effect.css"

const Lecture_2 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      alert(`Counter is a Current Value ${count}`)
    }, [count]);
    useEffect(() => {
      alert("This is a Simple UseEffect");
      console.log(count);
      
    }, [])
    
  return (
    <>
       <button className='bnn'>Update Counter {count}</button>
       <br />
       <button className="btnn" onClick={()=>setCount(count + 1)}>Counter is Now :</button>

       
    </>
  )
}

export default Lecture_2;