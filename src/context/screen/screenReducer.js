import { AUTH_SCREEN, MAIN_SCREEN, TODO_SCREEN } from "./screenTypes";

const handlers = {
  [AUTH_SCREEN]: (_, type) => type,
  [MAIN_SCREEN]: (_, type) => type,
  [TODO_SCREEN]: (_, type) => type,
  DEFAULT: (state, _) => state,
};

export const screenReducer = (state, { type }) =>
  (handlers[type] || handlers.DEFAULT)(state, type);
