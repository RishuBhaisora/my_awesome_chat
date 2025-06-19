import { createSelector } from "reselect";
import { notificationSelector } from ".";

export const notificationsLoadingSelector = createSelector(
  [notificationSelector],
  (notificationState) => notificationState.notificationsLoading
);

export const notificationsSelector = createSelector(
  [notificationSelector],
  (notificationState) => notificationState.notifications
);

export const notificationsErrorSelector = createSelector(
  [notificationSelector],
  (notificationState) => notificationState.notificationsError
);

export const unseenNotificationsCountSelector = createSelector(
  [notificationsSelector],
  (notifications) => notifications.filter((n) => !n.seen).length
);