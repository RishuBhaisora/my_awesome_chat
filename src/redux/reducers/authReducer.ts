import { Reducer } from "redux";
import { produce } from "immer";
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  REMOVE_AUTH_TOAST,
  LOGOUT,
  SIGNUP,
  SIGNUP_COMPLETED,
  SIGNUP_ERROR,
  RESET_PASSWORD_SUCCESS_MESSAGE,
  GET_RESET_PASSWORD_OTP,
  RESET_PASSWORD_ERROR_MESSAGE,
  RESET_PASSWORD,
} from "../actions/actionConstants";
import { User } from "../../modals/authModals";

export interface AuthState {
  loggedInUser?: User;
  loginLoading: boolean;
  loginError?: string;
  token?: string;
  isTokenExpired: boolean;
  signupLoading: boolean;
  signupMessage?: string;
  signupError?: string;
  resetPasswordSuccessMessage?: string;
  resetPasswordErrorMessage?: string;
  resetPasswordLoading: boolean;
  email?: string;
}

const initialState: AuthState = {
  loginLoading: false,
  isTokenExpired: false,
  signupLoading: false,
  resetPasswordLoading: false,
};

export const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action: any
) =>
  produce(state, (draft: AuthState) => {
    switch (action.type) {
      case LOGIN: {
        draft.loginLoading = true;
        break;
      }
      case LOGIN_COMPLETED: {
        draft.token = action.payload.token;
        draft.isTokenExpired = false;
        draft.loggedInUser = action.payload.user;
        draft.loginLoading = false;
        break;
      }
      case LOGIN_ERROR: {
        if (action.payload === "jwt expired") {
          draft.isTokenExpired = true;
          draft.token = undefined
        }
        draft.loginError = action.payload;
        draft.loginLoading = false;
        break;
      }
      case LOGOUT: {
        draft.loggedInUser = undefined;
        draft.token = undefined;
        draft.loginLoading = false;
        draft.loginError = undefined;
        break;
      }
      case SIGNUP: {
        draft.signupLoading = true;
        break;
      }
      case SIGNUP_COMPLETED: {
        draft.signupLoading = false;
        draft.signupMessage = action.payload.message;
        break;
      }

      case SIGNUP_ERROR: {
        draft.signupLoading = false;
        draft.signupError = action.payload;
        break;
      }
      case GET_RESET_PASSWORD_OTP: {
        draft.resetPasswordLoading = true;
        draft.email = action.payload.email;
        break;
      }
      case RESET_PASSWORD: {
        draft.resetPasswordLoading = true;
        draft.resetPasswordSuccessMessage = action.payload;        
        break;
      }
      case RESET_PASSWORD_SUCCESS_MESSAGE: {
        draft.resetPasswordLoading = false;
        draft.resetPasswordSuccessMessage = action.payload;        
        break;
      }
      case RESET_PASSWORD_ERROR_MESSAGE: {
        draft.resetPasswordLoading = false;
        draft.resetPasswordErrorMessage = action.payload;
        break;
      }
      case REMOVE_AUTH_TOAST: {
        draft.loginError = undefined;
        draft.signupMessage = undefined;
        draft.signupError = undefined;
        draft.resetPasswordSuccessMessage = undefined;
        draft.resetPasswordErrorMessage = undefined;
        if(action.resetSuccess){
          draft.email = undefined
        }
        break;
      }
      default:
        break;
    }
  });
