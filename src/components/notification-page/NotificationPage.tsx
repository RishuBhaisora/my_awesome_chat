import { memo, useEffect } from "react";
import NotificationRow from "./NotificationRow";
import ResponsiveContainer from "../../shared-resources/components/ResponsiveContainer";
import CustomSearch from "../../shared-resources/components/CustomSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotificationsAction,
  readAllNotificationsAction,
  setNotificationsErrorAction,
} from "../../redux/actions/notificationsAction";
import {
  notificationsErrorSelector,
  notificationsLoadingSelector,
  notificationsSelector,
} from "../../redux/selectors/notificationsSelectors";
import Loader from "../../shared-resources/components/Loader";
import { toastService } from "../../services/ToastService";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(notificationsSelector);
  const notificationsLoading = useSelector(notificationsLoadingSelector);
  const notificationsError = useSelector(notificationsErrorSelector);

  useEffect(() => {
    dispatch(getNotificationsAction());
  }, []);

  useEffect(() => {
    if (notifications.length > 0) {
      dispatch(readAllNotificationsAction());
    }
  }, [notifications]);

  useEffect(() => {
    if (notificationsError) {
      toastService.showError(notificationsError);
      setTimeout(() => {
        dispatch(setNotificationsErrorAction(undefined));
      }, 1000);
    }
  }, [notificationsError]);

  if (notificationsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">No notifications</h1>
      </div>
    );
  }
  return (
    <ResponsiveContainer>
      <div className="w-full h-full flex flex-col justify-between md:pb-0 pb-16">
        <CustomSearch />
        <div className="h-full bottom-shadow md:px-4 bg-white overflow-y-auto md:rounded-[20px]">
          {notifications.map((notification) => {
            return <NotificationRow notification={notification.message} key={notification.id} />;
          })}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default memo(NotificationPage);
