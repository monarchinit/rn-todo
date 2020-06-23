import React, { useReducer } from "react";
import { ScreenContext } from "./screenContext";
import { screenReducer } from "./screenReducer";
import screenTypes from "./screenTypes";
export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, screenTypes.MAIN_SCREEN);
  const changeScreenState = (type) => {
    dispatch({ type });
  };

  return (
    <ScreenContext.Provider value={{ screenState: state, changeScreenState }}>
      {children}
    </ScreenContext.Provider>
  );
};
