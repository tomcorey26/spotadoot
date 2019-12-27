import { tokenTypes } from "./token.types";

const INITIAL_STATE = {
  refresh_token: window.localStorage.getItem("refreshToken") || "",
  access_token: ""
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tokenTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload
      };
    default:
      return state;
  }
};

export default tokenReducer;
