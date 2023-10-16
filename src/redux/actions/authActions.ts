import {
  LoginAction,
  LoginCompletedAction,
  SignupAction,
  SignupCompleted,
} from "../../modals/authModals";
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP,
  SIGNUP_COMPLETED,
  REMOVE_SIGNUP_TOAST,
  SIGNUP_ERROR,
} from "./actionConstants";

export const loginAction = (payload: LoginAction) => ({
  type: LOGIN,
  payload,
});

export const loginCompletedAction = (payload: LoginCompletedAction) => ({
  type: LOGIN_COMPLETED,
  payload,
});

export const loginErrorAction = (error: string) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const signupAction = (payload: SignupAction) => ({
  type: SIGNUP,
  payload,
});

export const signupCompletedAction = (payload: SignupCompleted) => ({
  type: SIGNUP_COMPLETED,
  payload,
});

export const removeSignupToast = () => ({
  type: REMOVE_SIGNUP_TOAST,
});

export const signupErrorAction = (payload: any) => ({
  type: SIGNUP_ERROR,
  payload,
});
