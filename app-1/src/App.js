import React, { useState } from 'react'
import List from './components/List'
import AddTodo from './components/AddTodo'
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      <List todos={todos}/>
    </div>
  );
}

export default App;
