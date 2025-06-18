import { NotificationType } from "../reducers/notificationReducer";
import { GET_NOTIFICATIONS, READ_ALL_NOTIFICATIONS, SET_NOTIFICATIONS, SET_NOTIFICATIONS_ERROR } from "./actionConstants";

export const getNotificationsAction = () => ({
  type: GET_NOTIFICATIONS,
});

export const setNotificationsAction = (notifications: NotificationType[]) => ({
  type: SET_NOTIFICATIONS,
  payload: notifications,
});

export const setNotificationsErrorAction = (error: string | undefined) => ({
  type: SET_NOTIFICATIONS_ERROR,
  payload: error,
});

export const readAllNotificationsAction = () => ({
  type: READ_ALL_NOTIFICATIONS,
});