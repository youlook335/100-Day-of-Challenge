import React from 'react'
import Span from './Span'

function Button({count}) {
  return (
    <div>Button
        <Span count={count}/>
    </div>
  )
}

export default Button