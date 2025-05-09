import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { v4 as uuidv4 } from 'uuid';
function Home() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let savedTodos = JSON.parse(todoString);
      setTodos(savedTodos);
    }
    
  }, []);
  
  const saveTOLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  


  const handleEdit = (e, id) => {
    let to = todos.filter(i=>i.id === id)
    setTodo(to[0].todo);
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveTOLS();
   }

   const handleDelete = (e, id) => {
     Swal.fire({
       title: 'Are you sure?',
       text: "You won't be able to revert this!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Yes, delete it!'
     }).then((result) => {
       if (result.isConfirmed) {
         const newTodos = todos.filter(item => item.id !== id);
         setTodos(newTodos);
         Swal.fire('Deleted!', 'Your todo has been deleted.', 'success');
         saveTOLS();
       }
     });
   };
   
  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(),todo, isCompleted: false}]);
    setTodo("");
    saveTOLS();
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
      let newTodos = [...todos];            
      console.log(`This is Index Value Index ${index}`);
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
      saveTOLS();
  }
  
  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[85vh]'>
      <div className="addTodo my-5">
      <h1 className=' text-xl font-bold mb-2 my-3'>Add a Todo</h1>
      <input placeholder='Write a Content' onChange={handleChange} value={todo} type="text" className='p-1 w-1/3 rounded-md' />
      <button onClick={handleAdd} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm font-bold text-white mx-6">Save</button>
      </div>
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        {todos.length === 0 && <div className='mt-2'>No Todos Available. Add a new todo!</div>}
      {
      todos.map((item, index) => {
  return <div key={index} className="todo my-3 flex w-1/2 justify-between">
    <div className='flex gap-5'>
      
    <input name={item.id} onChange={handleCheckbox} className='w-4' type="checkbox" value={item.isCompleted} />

      <div className={item.isCompleted ? "line-through" : "font-bold"}>{item.todo}</div>
    </div>
      <div className="buttons ">

        <button onClick={(e)=>{handleEdit(e , item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm font-bold text-white mx-1'>Edit</button>

        <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md text-sm font-bold text-white mx-1'>Delete</button>

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
        // https://chatgpt.com/c/681cd9f6-28b0-8011-a2e1-2f606ac9c5        
        // ya todo app ka link  hai yha sa video dekhni hai 
        // https://www.youtube.com/watch?v=SBuZSalHLe0