import react from 'react'
import Tittle, { heading} from "./Tittle/Tittle";
import Input from "./input";
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
    const [todos,setTodos] = useState([]);

    useEffect(( ) => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        //console.log(todos);
        setTodos(todos || []);
    }, []);
    
    return(
        <div className='todo-app'>
            <div className='form'>
            <h1>{heading}</h1>
            <Tittle todos={todos} setTodos={setTodos}/>
            <Input todos={todos} setTodos={setTodos}/>
        </div>
        </div>
    )
}

export default App;