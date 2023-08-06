import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { LOGIN, SIGNUP } from "../actions/actionConstants";
import authService from "../../services/authService";
import { LoginAction, SignupAction } from "../../modals/authModals";
import {
  loginCompletedAction,
  loginErrorAction,
  signupCompletedAction,
} from "../actions/authActions";
import { get } from "lodash";
import { notification } from "antd";

export function* loginSaga(action: {
  type: "LOGIN";
  payload: LoginAction;
}): any {
  try {
    const { data } = yield call(authService.login, action.payload);
    localStorage.setItem("token", data.token);
    yield put(loginCompletedAction(data));
  } catch (e: any) {
    const error = get(e, ["response", "data"]);
    yield put(loginErrorAction(error));
  }
}

export function* signupSaga(action: {
  type: "SIGNUP";
  payload: SignupAction;
}): any {
  try {
    const { data } = yield call(authService.signup, action.payload);
    yield put(signupCompletedAction(data));
  } catch (error) {
    console.log(error, "error");
  }
}

export function* authSaga() {
  yield all([takeLatest(SIGNUP, signupSaga)]);
  yield all([takeLatest(LOGIN, loginSaga)]);
}
