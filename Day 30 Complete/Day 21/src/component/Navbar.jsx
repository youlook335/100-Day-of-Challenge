import "./Navbar.css"
import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="p-5 bg-gray-800 text-white">
            <ul className="te flex gap-4 list-none">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;