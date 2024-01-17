import { Reducer } from "redux";
import { produce } from "immer";
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT,
  REMOVE_SIGNUP_TOAST,
  SIGNUP,
  SIGNUP_COMPLETED,
  SIGNUP_ERROR,
  RESET_PASSWORD_SUCCESS_MESSAGE,
  REMOVE_RESET_PASSWORD_TOAST,
  GET_RESET_PASSWORD_OTP,
  RESET_PASSWORD_ERROR_MESSAGE,
} from "../actions/actionConstants";
import { User } from "../../modals/authModals";

export interface AuthState {
  loggedInUser?: User;
  loginLoading: boolean;
  error?: string;
  token?: string;
  isTokenExpired: boolean;
  signupLoading: boolean;
  signupMessage?: string;
  signupError?: string;
  resetPasswordSuccessMessage?: string;
  resetPasswordErrorMessage?: string;
  email?: string;
}

const initialState: AuthState = {
  loginLoading: false,
  isTokenExpired: false,
  signupLoading: false,
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
        draft.error = action.payload;

        draft.loginLoading = false;
        break;
      }
      case LOGOUT: {
        draft.loggedInUser = undefined;
        draft.token = undefined;
        draft.loginLoading = false;
        draft.error = undefined;
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
        draft.signupError = action.payload.message;
        break;
      }

      case REMOVE_SIGNUP_TOAST: {
        draft.signupMessage = undefined;
        draft.signupError = undefined;
        break;
      }
      case GET_RESET_PASSWORD_OTP: {
        draft.email = action.payload.email;
        break;
      }
      case RESET_PASSWORD_SUCCESS_MESSAGE: {
        draft.resetPasswordSuccessMessage = action.payload;        
        break;
      }
      case RESET_PASSWORD_ERROR_MESSAGE: {
        draft.resetPasswordErrorMessage = action.payload;
        break;
      }
      case REMOVE_RESET_PASSWORD_TOAST: {
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
