import React, { useState } from 'react'; 

  

function TodoList() { 

  const [todos, setTodos] = useState([]); 

  const [todoInput, setTodoInput] = useState(''); 

  

  const addTodo = () => { 

    if (todoInput.trim()) { 

      setTodos([...todos, todoInput]); 

      setTodoInput(''); 

    } 

  }; 

  

  const removeTodo = (index) => { 

    setTodos(todos.filter((_, i) => i !== index)); 

  }; 

  

  return ( 

    <div> 

      <input  

        type="text"  

        placeholder="Enter a todo"  

        value={todoInput}  

        onChange={(e) => setTodoInput(e.target.value)}  

      /> 

      <button onClick={addTodo}>Add Todo</button> 

      <ul> 

        {todos.map((todo, index) => ( 

          <li key={index}> 

            {todo}  

            <button onClick={() => removeTodo(index)}>Remove</button> 

          </li> 

        ))} 

      </ul> 

    </div> 

  ); 

} 

  

export default TodoList; 