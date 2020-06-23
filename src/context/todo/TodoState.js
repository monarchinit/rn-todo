import React, { useReducer } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./todoTypes";

const initialState = { todos: [{ id: "1", value: "Hello World !!!" }] };

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (value) => dispatch({ type: ADD_TODO, payload: { value } });
  const changeSaveTodo = (id, value) =>
    dispatch({ type: UPDATE_TODO, payload: { id, value } });
  const removeItem = (id) => dispatch({ type: DELETE_TODO, payload: { id } });

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, changeSaveTodo, removeItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};
