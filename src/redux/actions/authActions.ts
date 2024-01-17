import {
  LoginAction,
  LoginCompletedAction,
  SignupAction,
  SignupCompleted,
  ResetPasswordOtpPayload,
  ResetPasswordPayload 
} from "../../modals/authModals";
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP,
  SIGNUP_COMPLETED,
  REMOVE_AUTH_TOAST,
  SIGNUP_ERROR,
  GET_RESET_PASSWORD_OTP,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS_MESSAGE,
  RESET_PASSWORD_ERROR_MESSAGE
  
} from "./actionConstants";

export const loginAction = (payload: LoginAction) => ({
  type: LOGIN,
  payload
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

export const signupErrorAction = (payload: any) => ({
  type: SIGNUP_ERROR,
  payload,
});

export const getPasswordResetOtpAction = (payload: ResetPasswordOtpPayload) => ({
  type: GET_RESET_PASSWORD_OTP,
  payload,
});

export const resetPasswordAction = (payload: ResetPasswordPayload) => ({
type : RESET_PASSWORD,
payload,
})

export const resetPasswordSuccessAction = (payload: string) => ({
  type: RESET_PASSWORD_SUCCESS_MESSAGE,
  payload,
});

export const resetPasswordErrorAction = (payload: string) => ({
  type: RESET_PASSWORD_ERROR_MESSAGE,
  payload,
});

export const removeAuthToast = (resetSuccess: boolean = false) => ({
  type: REMOVE_AUTH_TOAST,
  resetSuccess
});
