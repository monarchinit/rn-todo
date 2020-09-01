import { CHANGE_ACTIVE_TODO_ID } from "./activeTodoIdTypes";

const handlers = {
  [CHANGE_ACTIVE_TODO_ID]: (_, { payload }) => payload.id,
  DEFAULT: (state, _) => state,
};

export const activeTodoIdReducer = (state, action) =>
  (handlers[action.type] || handlers.DEFAULT)(state, action);
