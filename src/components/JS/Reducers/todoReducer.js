import {
    ADD_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
  } from "../ActionsTypes/actionsTypes";
  
  
  const initialState = {
      todoList: [
        {
          text: "My First Todo",
          id: 0,
        },
    
        {
          text: "My Seconde Todo",
          id: 1,
        },
    
        {
          text: "My Third Todo",
          id: 2,
        },
      ],
    };
    
    const todoReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        case ADD_TODO:
          return {
            ...state,
    
            todoList: [...state.todoList, payload],
          };
          case EDIT_TODO:
            return {
              ...state,
      
              todoList: state.todoList.map((todo) =>
                todo.id === payload.id ? { ...todo, text: payload.text } : todo
              ),
            };
            case COMPLETE_TODO:
              return {
                ...state,
                todoList: state.todoList.map((todo) =>
                  todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
                ),
              };
          default:
          return state;
      }
    }
    export default todoReducer;