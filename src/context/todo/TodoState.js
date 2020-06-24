import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
} from "./todoTypes";
import { ScreenContext } from "../screen/screenContext";
import screenTypes from "../screen/screenTypes";

const initialState = { todos: [], loading: false, error: null };

const fetchAPI = async function (url, method, token, _body) {
  const BASE_URL = "https://stormy-bastion-99597.herokuapp.com/";
  let response;
  // switch (method) {
  // case "GET":
  response = await fetch(BASE_URL + url, {
    method,
    headers: { "Content-type": "application/json", Authorization: token },
    body: JSON.stringify(_body),
  });
  break;
  // }
  response = await response.json();
  return response;
};

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreenState } = useContext(ScreenContext);

  const addTodo = (value) => {
    const res = fetchAPI(
      "todos",
      "get",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI1ZWQzYjcwNDYzN2MyZDI2NTQwZThmZGUiLCJ1ZXNlcklkIjoiNWVkMmM4NjhhM2RiMWMzMzI4ZWNkM2M2IiwiaWF0IjoxNTkwOTMzMjUyfQ.E3-rPVtaJnnxyOOsfikSiYF_ONFLmGIdXTFFDORUnVA"
    );
    console.log(res, "res");
    dispatch({ type: ADD_TODO, payload: { value } });
  };
  const changeSaveTodo = (id, value) =>
    dispatch({ type: UPDATE_TODO, payload: { id, value } });
  const removeItem = (id) => {
    const activeTodo = state.todos.find((el) => el.id === id);
    Alert.alert(
      "Remove Item",
      `Are you sure you want to delete "${activeTodo.value}"`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            changeScreenState({ type: screenTypes.MAIN_SCREEN });
            dispatch({ type: DELETE_TODO, payload: { id } });
          },
        },
      ],
      { cancelable: false }
    );
  };
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = (error) =>
    dispatch({ type: SHOW_ERROR, payload: { error } });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, changeSaveTodo, removeItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};
