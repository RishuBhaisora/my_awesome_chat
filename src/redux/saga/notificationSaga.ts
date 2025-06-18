import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import {
  GET_NOTIFICATIONS,
  READ_ALL_NOTIFICATIONS,
} from "../actions/actionConstants";
import { getErrorMessage } from "../../utils/reduxUtils";
import { notificationService } from "../../services/NotificationService";
import { setNotificationsAction, setNotificationsErrorAction } from "../actions/notificationsAction";

export function* getNotificationsSaga(): any {
  try {
    const { data } = yield call(notificationService.getNotifications);
    yield put(setNotificationsAction(data.notifications));
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error);
    yield put(setNotificationsErrorAction(error));
  }
}

export function* readAllNotificationsSaga(): any {
  try {
    const { data } = yield call(notificationService.readAllNotifications);
    yield put(setNotificationsAction(data.notifications));
  } catch (e: any) {
    const error = getErrorMessage(e);
    console.warn(error);
    yield put(setNotificationsErrorAction(error));
  }
}

export function* notificationsSaga() {
  yield all([takeLatest(GET_NOTIFICATIONS, getNotificationsSaga)]);
  yield all([takeLatest(READ_ALL_NOTIFICATIONS, readAllNotificationsSaga)]);
}
