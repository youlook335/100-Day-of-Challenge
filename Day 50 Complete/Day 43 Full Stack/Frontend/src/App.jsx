import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const controller = new AbortController()
    ;(async ()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        })
        const limited = response.data.slice(0, 10)
        setProducts(limited);
        console.log(limited);
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log('Request was aborted', error.message);
          return
        }
        setError(true)
        setLoading(false)
        
      }
      
    })()
    return () => {
      controller.abort()
    }
  }, [search])
  return (
    <>
    {loading && <h1>Loading...</h1>}

    <input type="text" 
    value={search}
     onChange={(e)=>setSearch(e.target.value)}/>
    {error && <h1>Something went wrong</h1>}
    <h1>Number of Products are : {products.length}</h1>

    </>
  )
}

export default App;