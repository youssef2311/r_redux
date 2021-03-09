import React from 'react'
import {useSelector} from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';

const TodoLists = () => {
    const todoList = useSelector((state) => state.todoList);
  
    return (
      <ul className="todo-list">
        {todoList.map((todo) => (
            <TodoCard todo={todo} />
         ))} 
        </ul>
        );
  };
  
  export default TodoLists;