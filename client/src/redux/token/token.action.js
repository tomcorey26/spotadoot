import { tokenTypes } from "./token.types";

export const setToken = token => ({
  type: tokenTypes.SET_ACCESS_TOKEN,
  payload: token
});
