import React from 'react'
import { useState } from 'react'
import './input.css'

const Input = ({todos, setTodos}) => {
  
  const [data, setData] = useState("");
 
  return (
    <>
    <input 
    className='todo-input'
    type="text"
    placeholder= 'Add a todo list'
    value={data}
    onChange = {(e) => {setData(e.target.value);}}
    />
    <button onClick={() => {
      //spread operator
      setTodos([...todos, data]);
      localStorage.setItem("todos", JSON.stringify([...todos, data]));
      setData("");
    } 
     }>Add</button>
     <button onClick={() => {
      setTodos([...todos, data]);
      
     }}>Delete</button>
     <button>Update</button>
     <ol>
      {todos.map((item, index) => {
        return <li key={index} onClick={() => {
          setTodos(todos.filter((i) => i !== item ))
        }}>{item}</li>
      })}
     </ol>
  

   </>
  )
}

export default Input