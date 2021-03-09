import React, { useState } from "react";
import './AddTodo.css';
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/Actions/actions";

const AddTodo = () => {
  const [newTask, setNewTask] = useState();
  const dispatch = useDispatch();

  const handelAdd = () => {
    const newTodo = {
      text: newTask,
      id: Math.random(),
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setNewTask("");
  };
    return (
        <div className="header">
            <h2>My To Do List</h2>
            <div className="containe">
                <input type="text" placeholder="Title..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} />
                <button className="addBtn" onClick={handelAdd}
                >Add</button>
            </div>
        </div>
    );
}

export default AddTodo;