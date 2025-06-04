import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const  {products, error, loading} = customquery('/api/products')
  
  if(error){
    return <h1>Something went wrong</h1>
  }
  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <h1>Number of Products are : {products.length}</h1>

    </>
  )
}

export default App;

const customquery =(path)=>{
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    (async ()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(path)
        const limited = response.data.slice(0, 10)
        setProducts(limited);
        console.log(limited);
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
        
      }
      
    })()
    
  }, [])
return {products, error, loading}
}
