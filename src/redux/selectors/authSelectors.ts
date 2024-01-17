import { createSelector } from "reselect";
import { authSelector } from ".";

export const loginLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.loginLoading
  
);
export const loggedInUserSelector = createSelector(
  [authSelector],
  (authState) => authState.loggedInUser
);
export const loginErrorSelector = createSelector(
  [authSelector],
  (authState) => authState.loginError
);
export const isTokenExpiredSelector = createSelector(
  [authSelector],
  (authState) => authState.isTokenExpired
);
export const loginTokenSelector = createSelector(
  [authSelector],
  (authState) => authState.token
);

export const signupLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.signupLoading
  
);

export const signupMessageSelector = createSelector(
  [authSelector],
  (authState) => authState.signupMessage
  
);


export const signupErrorSelector = createSelector(
  [authSelector],
  (authState) => authState.signupError
);

export const resetPasswordSuccessSelector = createSelector(
  [authSelector],
  (authState) => authState.resetPasswordSuccessMessage
);

export const resetPasswordErrorSelector = createSelector(
  [authSelector],
  (authState) => authState.resetPasswordErrorMessage
);

export const resetPasswordEmailSelector = createSelector(
  [authSelector],
  (authState) => authState.email
);

export const resetPasswordLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.resetPasswordLoading)