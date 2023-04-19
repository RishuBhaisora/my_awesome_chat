import { BellFilled } from "@ant-design/icons";
import { FC, memo } from "react";

type NotificationRowProps = {
  notification: string;
};

const NotificationRow: FC<NotificationRowProps> = (props) => {
  return (
    <div className="flex border-b-2 md:p-4 p-3 space-x-4 items-center">
      <BellFilled />
      <h3 className="font-semibold">{props.notification}</h3>
    </div>
  );
};

NotificationRow.defaultProps = {};

export default memo(NotificationRow);
