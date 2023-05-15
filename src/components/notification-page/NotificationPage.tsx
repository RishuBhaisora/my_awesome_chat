import { memo } from "react";
import { notifications } from "../../Mock-Data/notifications";
import NotificationRow from "./NotificationRow";
import ResponsiveContainer from "../../shared-resources/components/ResponsiveContainer";
import CustomSearch from "../../shared-resources/components/CustomSearch";

const NotificationPage = () => {
  return (
    <ResponsiveContainer>
      <div className="w-full h-full flex flex-col justify-between md:pb-0 pb-16">
        <CustomSearch />
        <div className="h-full bottom-shadow md:px-4 bg-white overflow-y-auto md:rounded-[20px]">
          {notifications.map((notification) => {
            return <NotificationRow notification={notification} />;
          })}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default memo(NotificationPage);
