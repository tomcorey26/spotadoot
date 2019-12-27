import { createSelector } from "reselect";

const selectToken = state => state.token;

export const selectAccessToken = createSelector(
  [selectToken],
  token => token.access_token
);
