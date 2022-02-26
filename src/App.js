import React,{useState} from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './style.css'
const App= () => {
  

  return (
    <div>
      <h1>My Tasks</h1>
      <AddTodo/>
      <TodoList/>
   </div>
  )
}

export default App