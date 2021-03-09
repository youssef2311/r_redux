import React from 'react';
import './App.css';
import AddTodo from "./components/AddTodo/AddTodo";
import TodoLists from './components/TodoLists/TodoLists';

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoLists />
    </div>
  )
}

export default App;