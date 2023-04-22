import { fork, all } from "@redux-saga/core/effects";
import { authSaga } from "./authSaga";

export function* rootSaga() {
  yield all([fork(authSaga)]);
}
