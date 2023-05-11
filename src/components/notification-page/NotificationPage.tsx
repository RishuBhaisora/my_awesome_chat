import { memo } from "react";
import FriendListSearch from "../Friends-Page/FriendListSearch";
import { notifications } from "../../Mock-Data/notifications";
import NotificationRow from "./NotificationRow";
import ResponsiveContainer from "../../shared-resources/components/ResponsiveContainer";

const NotificationPage = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between md:pb-0 pb-16">
        <FriendListSearch />
        <div className="h-full md:px-4 bg-white overflow-y-auto md:rounded-lg">
          {notifications.map((notification) => {
            return <NotificationRow notification={notification} />;
          })}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default memo(NotificationPage);
