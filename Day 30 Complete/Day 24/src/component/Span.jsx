import React, { useContext } from 'react'
import Last_component from './Last_component'
import { counterContext } from './context/context'

function Span() {
  const value = useContext(counterContext)
  return (
    <div>
        Span Page
        <button onClick={()=> value.setCount((count)=>count + 5)}>
        <Last_component/>
        </button>
    </div>
  )
}

export default Span