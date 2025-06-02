import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Footer from './Component/Footer'
import About from './Component/About'

function App() {

  return (
    <>
      <Navbar />
      {/* <Home/>\ */}
      <About/>
      <Footer/>
    </>
  )
}

export default App