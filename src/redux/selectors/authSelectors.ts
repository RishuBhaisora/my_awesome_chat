import { createSelector } from "reselect";
import { authSelector } from ".";

export const loginLoadingSelector = createSelector(
  [authSelector],
  (friendState) => friendState.loginLoading
  
);
export const loggedInUserSelector = createSelector(
  [authSelector],
  (friendState) => friendState.loggedInUser
);
export const loginErrorSelector = createSelector(
  [authSelector],
  (friendState) => friendState.error
);
export const isTokenExpiredSelector = createSelector(
  [authSelector],
  (friendState) => friendState.isTokenExpired
);
export const loginTokenSelector = createSelector(
  [authSelector],
  (friendState) => friendState.token
);

export const signupLoadingSelector = createSelector(
  [authSelector],
  (friendState) => friendState.signupLoading
  
);
  