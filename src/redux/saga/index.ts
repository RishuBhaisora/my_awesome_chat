import { fork, all } from "@redux-saga/core/effects";
import { authSaga } from "./authSaga";
import { friendshipSaga } from "./friendshipSaga";
import { chatSaga } from "./chatSaga";
import { notificationsSaga } from "./notificationSaga";

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(friendshipSaga),
    fork(chatSaga),
    fork(notificationsSaga),
  ]);
}
