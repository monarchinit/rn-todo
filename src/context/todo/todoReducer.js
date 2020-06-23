import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./todoTypes";

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
  DEFAULT: (state, payload) => state,
};

export const todoReducer = (state, { type, payload }) =>
  (handlers[type] || handlers.DEFAULT)(state, payload);
