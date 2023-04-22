import { Reducer } from "redux";
import { produce } from "immer";
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGOUT,
} from "../actions/actionConstants";
import { User } from "../../modals/authModals";

export interface LoginState {
  loggedInUser?: User;
  loading: boolean;
  error?: string;
  token?: string;
  isTokenExpired: boolean;
}
const initialState: LoginState = {
  loading: false,
  isTokenExpired: false,
};

export const authReducer: Reducer<LoginState> = (
  state: LoginState = initialState,
  action: any
) =>
  produce(state, (draft: LoginState) => {
    switch (action.type) {
      case LOGIN: {
        draft.loading = true;
        break;
      }
      case LOGIN_COMPLETED: {
        draft.token = action.payload.token;
        draft.isTokenExpired = false;
        draft.loggedInUser = action.payload.user;
        draft.loading = false;
        break;
      }
      case LOGIN_ERROR: {
        if (action.payload === "jwt expired") {
          draft.isTokenExpired = true;
        }
        draft.error = action.payload;

        draft.loading = false;
        break;
      }
      case LOGOUT: {
        draft.loggedInUser = undefined;
        draft.token = undefined;
        draft.loading = false;
        draft.error = undefined;
        break;
      }
      default:
        break;
    }
  });
