import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { LOGIN } from "../actions/actionConstants";
import authService from "../../services/authService";
import { LoginAction } from "../../modals/authModals";
import { loginCompletedAction, loginErrorAction } from "../actions/authActions";

export function* loginSaga(action: {
  type: "LOGIN";
  payload: LoginAction;
}): any {
  try {
    const { data } = yield call(authService.login, action.payload);
    localStorage.setItem("token", data.token);
    yield put(loginCompletedAction(data));
  } catch (e: any) {
    
    yield put(loginErrorAction(e));
  }
}

export function* authSaga() {
  yield all([takeLatest(LOGIN, loginSaga)]);
}
