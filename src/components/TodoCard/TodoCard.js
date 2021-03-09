import React from 'react'
import './TodoCard.css'
import { useDispatch } from "react-redux";
import { completeTodo } from "../JS/Actions/actions";
import EditTodo from '../EditTodo/EditTodo';

const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <ul className="todo-card">
            <span className="todo-text" style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
                onClick={() => dispatch(completeTodo(todo.id))} >{todo.text}</span>
            <i className="fas fa-trash-alt"></i>
            <EditTodo todo={todo} />
        </ul>
    )
}

export default TodoCard;