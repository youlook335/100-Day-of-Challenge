import React from 'react'

function Card(props) {
  return (
    <>
        <div className="white">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </>
  )
}

export default Card;