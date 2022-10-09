import {
  HomeOutlined,
  SettingOutlined,
  NotificationOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { FC, memo } from "react";

type ControlBarComponentProps = {};

const ControlBarComponent: FC<ControlBarComponentProps> = (
  ControlBarComponentProps
) => {
  return (
    <div className="w-[92vw] h-20 bg-[#1a66ff] m-5 absolute bottom-0 sm:w-32 rounded-lg sm:h-[90vh] sm:bottom-3 flex sm:flex-col items-center justify-between py-6 mt-2 sm:mt-0 px-3 overflow-hidden">
      <img
        className="sm:w-20 sm:h-20 w-10 h-10 rounded-full object-cover"
        src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
      />
      <div className="flex sm:flex-col justify-between sm:h-2/5 w-3/5">
        <HomeOutlined className="text-white" />
        <MessageOutlined className="text-white" />
        <NotificationOutlined className="text-white" />
        <SettingOutlined className="text-white" />
      </div>

      <LogoutOutlined className="text-white" />
    </div>
  );
};

ControlBarComponent.defaultProps = {};

export default memo(ControlBarComponent);
