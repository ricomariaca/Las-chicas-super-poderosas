import { types } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload //user information
      };
    case types.logout:
      return {
        logged: false
      };
    default:
      return state;
  }
}