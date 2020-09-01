import React, { useReducer } from "react";
import { ActiveTodoIdContext } from "./activeTodoIdContext";
import { activeTodoIdReducer } from "./activeTodoIdReducer";
export const ActiveTodoIdState = ({ children }) => {
  const [state, dispatch] = useReducer(activeTodoIdReducer, null);
  const changeActiveTodoId = (action) => dispatch(action);

  return (
    <ActiveTodoIdContext.Provider
      value={{ activeTodoId: state, changeActiveTodoId }}
    >
      {children}
    </ActiveTodoIdContext.Provider>
  );
};
