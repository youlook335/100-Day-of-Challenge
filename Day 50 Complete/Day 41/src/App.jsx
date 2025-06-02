import Navbar from './Component/Navbar'
import "./App.css"
import {  Route,  Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Help from './Component/Help'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
    </>
  )
}

export default App;