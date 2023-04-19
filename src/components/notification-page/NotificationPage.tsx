import { BellFilled, BellTwoTone } from "@ant-design/icons";
import { FC, memo } from "react";
import FriendListSearch from "../Friends-Page/FriendListSearch";
import { notifications } from "../../Mock-Data/notifications";
import NotificationRow from "./NotificationRow";

type NotificationPageProps = {};

const NotificationPage: FC<NotificationPageProps> = (props) => {
  return (
    <div className="md:pr-6 md:pt-6 md:pb-6 h-screen pb-10">
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between">
        <FriendListSearch />
        <div className="h-full md:px-4 bg-white overflow-y-auto md:rounded-lg">
          {notifications.map((notification) => {
            return <NotificationRow notification={notification} />;
          })}
        </div>
      </div>
    </div>
  );
};

NotificationPage.defaultProps = {};

export default memo(NotificationPage);
