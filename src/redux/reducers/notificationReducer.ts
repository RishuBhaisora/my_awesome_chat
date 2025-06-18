import { Reducer } from "redux";
import { produce } from "immer";
import {
  GET_NOTIFICATIONS,
  SET_NOTIFICATIONS_ERROR,
  SET_NOTIFICATIONS,
  READ_ALL_NOTIFICATIONS,
} from "../actions/actionConstants";

export interface NotificationType {
  id: string;
  message: string;
  createdAt: string;
  seen: boolean;
  userId: string;
}

export interface NotificationState {
  notificationsLoading: boolean;
  notifications: NotificationType[];
  notificationsError?: string;
}

const initialState: NotificationState = {
  notificationsLoading: false,
  notifications: [],
};

export const notificationReducer: Reducer<NotificationState> = (
  state: NotificationState = initialState,
  action: any
) =>
  produce(state, (draft: NotificationState) => {
    switch (action.type) {
      case GET_NOTIFICATIONS: {
        draft.notificationsLoading = true;
        draft.notificationsError = undefined;
        break;
      }

      case SET_NOTIFICATIONS: {
        draft.notificationsLoading = false;
        draft.notificationsError = undefined;
        draft.notifications = action.payload;
        break;
      }

      case SET_NOTIFICATIONS_ERROR: {
        draft.notificationsLoading = false;
        draft.notificationsError = action.payload;
        break;
      }

      default:
        break;
    }
  });
