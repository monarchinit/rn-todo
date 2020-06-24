import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
const axios = require("axios");
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
  FETCH_TODOS,
} from "./todoTypes";
import { ScreenContext } from "../screen/screenContext";
import screenTypes from "../screen/screenTypes";

const initialState = { todos: [], loading: false, error: null };

axios.defaults.baseURL = "https://stormy-bastion-99597.herokuapp.com";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI1ZWYzNDI5MTFmYjE3YzAwMjI1M2Y4ZWMiLCJ1ZXNlcklkIjoiNWVmMzQyOTExZmIxN2MwMDIyNTNmOGViIiwiaWF0IjoxNTkzMDAwNTkzfQ.PmslWk5SsjU6M10ZLjv_ssJz_liq5Hl9Lq590-oXU0A";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";

const fetchAPI = async (url, method, _body) => {
  try {
    const res = await axios({ url, method, data: _body });
    return res.data;
  } catch (e) {
    console.log(e, "error");
  }
};

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreenState } = useContext(ScreenContext);

  const addTodo = async (value) => {
    const res = await fetchAPI("todos", "POST", { value });
    dispatch({ type: ADD_TODO, payload: { data: res.todo } });
  };
  const changeSaveTodo = (id, value) =>
    dispatch({ type: UPDATE_TODO, payload: { id, value } });
  const removeItem = (id) => {
    const activeTodo = state.todos.find((el) => el._id === id);
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
  const fetchTodos = async () => {
    const response = await fetchAPI("todos", "GET");
    console.log(response.todos, "response");
    dispatch({ type: FETCH_TODOS, payload: { todos: response.todos } });
  };
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = (error) =>
    dispatch({ type: SHOW_ERROR, payload: { error } });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        changeSaveTodo,
        removeItem,
        getTodos: fetchTodos,
        error: state.error,
        loading: state.loading,
        showLoader,
        hideLoader,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
