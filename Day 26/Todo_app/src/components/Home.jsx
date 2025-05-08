import React, { useState } from 'react'
import Navbar from './Navbar';
import { v4 as uuidv4 } from 'uuid';
function Home() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const handleEdit = () => {
      colog("edit");
  }
  const handleDelete = () => {
   }
  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(),todo, isCompleted: false}])
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
    
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(`This is a Value of Id ${id}`);
    
    let index = todos.findIndex(item => item.id === id);
      let newTodos = [...todos];            
      console.log(`This is Index Value Index ${index}`);
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
  }
  

  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[85vh]'>
      <div className="addTodo my-5">
      <h1 className=' text-xl font-bold mb-2 my-3'>Add a Todo</h1>
      <input onChange={handleChange} value={todo} type="text" className='p-1 w-1/3 rounded-md' />
      <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm font-bold text-white mx-6">Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
      {
      todos.map((item, index) => {
  return <div key={index} className="todo my-3 flex w-1/2 justify-between">
    <input name={item.id} onChange={handleCheckbox} className='w-4' type="checkbox" value={item.isCompleted} id="" />
      <div className={item.isCompleted ? "line-through" : "font-bold"}>{item.todo}</div>
      <div className="buttons">
        <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm font-bold text-white mx-1'>Edit</button>
        <button  onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm font-bold text-white mx-1'>Delete</button>
      </div>
    </div>
  
})}
        </div>
      </div>      
    </>
  )
}

export default Home;
        // ya chatgpt ka link hai yha sa bat karni hai 
          // chatgpt.com/c/6819ddd3-276c-8011-82fc-cdc85ea5ef43
        // ya todo app ka link  hai yha sa video dekhni hai 
        // https://www.youtube.com/watch?v=SBuZSalHLe0