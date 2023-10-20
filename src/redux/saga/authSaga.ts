import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { LOGIN } from "../actions/actionConstants";
import { LoginAction } from "../../modals/authModals";


export function* loginSaga(action: {
  type: "LOGIN";
  payload: LoginAction;
}): any {
  
}

export function* authSaga() {
  yield all([takeLatest(LOGIN, loginSaga)]);
}
