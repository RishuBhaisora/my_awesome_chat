import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { LOGIN } from "../actions/actionConstants";
import authService from "../../services/authService";
import { LoginAction } from "../../modals/authModals";
import { loginCompletedAction, loginErrorAction } from "../actions/authActions";
import { get } from "lodash";

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

export function* authSaga() {
  yield all([takeLatest(LOGIN, loginSaga)]);
}
