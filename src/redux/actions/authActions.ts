import { LoginAction, LoginCompletedAction } from "../../modals/authModals";
import { LOGIN, LOGIN_COMPLETED, LOGIN_ERROR, LOGOUT } from "./actionConstants";

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
