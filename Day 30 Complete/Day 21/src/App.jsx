import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Card from './component/Card'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="crd">
      <Card title="Card 1 " description= "This is a Card Description 1"/>
      <Card title="Card 2" description= "This is a Card Description 2"/>
      <Card title="Card 3" description= "This is a Card Description 3"/>
      <Card title="card 4" description= "This is a Card Description 4"/>

      </div>
      <Footer/>
    </>
  )
}

export default App
