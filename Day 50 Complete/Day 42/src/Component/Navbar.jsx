import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo with circle */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full text-gray-900 font-bold text-xl select-none">
            T
          </div>
          {/* <span className="text-white text-2xl font-semibold">MyBrand</span> */}
        </div>

        {/* Navigation */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link to="/about" className="text-white hover:text-yellow-400">About</Link>
          <Link to="/services" className="text-white hover:text-yellow-400">Services</Link>
          <Link to="/contact" className="text-white hover:text-yellow-400">Contact</Link>
          <Link to="/blog" className="text-white hover:text-yellow-400">Blog</Link>
          <Link to="/help" className="text-white hover:text-yellow-400">Help</Link>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </nav>
  );
}

export default Navbar;
