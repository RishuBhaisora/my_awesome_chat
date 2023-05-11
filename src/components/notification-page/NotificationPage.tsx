import { memo } from "react";
import FriendListSearch from "../Friends-Page/FriendListSearch";
import { notifications } from "../../Mock-Data/notifications";
import NotificationRow from "./NotificationRow";
import Container from "../../shared-resources/components/Container";

const NotificationPage = () => {
  return (
    <Container>
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between">
        <FriendListSearch />
        <div className="h-full md:px-4 bg-white overflow-y-auto md:rounded-lg">
          {notifications.map((notification) => {
            return <NotificationRow notification={notification} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default memo(NotificationPage);
