import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from "./Component/About"
import Help from "./Component/Help"
import Blog from "./Component/Blog"
import Services from "./Component/Services"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/help' element={<Help/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;