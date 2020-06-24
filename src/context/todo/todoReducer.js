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

const handlers = {
  [ADD_TODO]: (state, { value }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), value }],
  }),
  [UPDATE_TODO]: (state, { id, value }) => ({
    ...state,
    todos: state.todos.map((el) => {
      if (el.id === id) {
        el.value = value;
      }
      return el;
    }),
  }),
  [DELETE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter((el) => el.id !== id),
  }),
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),
  [SHOW_ERROR]: (state, { payload }) => ({ ...state, error: payload.error }),
  [CLEAR_ERROR]: (state) => ({ ...state, error: null }),
  [FETCH_TODOS]: (state, { payload }) => ({ ...state, todos: payload.todos }),
  DEFAULT: (state, payload) => state,
};

export const todoReducer = (state, { type, payload }) =>
  (handlers[type] || handlers.DEFAULT)(state, payload);
