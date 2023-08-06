import { Reducer } from "redux";
import { produce } from "immer";
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP,
  SIGNUP_COMPLETED,
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
      default:
        break;
    }
  });
