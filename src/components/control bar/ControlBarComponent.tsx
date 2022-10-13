import {
  HomeOutlined,
  SettingOutlined,
  NotificationOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { FC, memo } from "react";
import { useNavigate } from "react-router";

type ControlBarComponentProps = {};

const ControlBarComponent: FC<ControlBarComponentProps> = (
  ControlBarComponentProps
) => {
  let navigate = useNavigate();

  return (
    <div className="md:left-0 w-full md:w-1/6 md:h-full absolute bottom-0 md:p-5">
      <div className=" bg-[#1a66ff] h-10 md:h-full md:rounded-lg flex md:flex-col items-center justify-between py-6 px-3">
        <img
          className="md:w-20 md:h-20 w-10 h-10 rounded-full object-cover"
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        />
        <div className="flex md:flex-col justify-between md:h-2/5 w-3/5">
          <HomeOutlined className="text-white" />
          <MessageOutlined
            className="text-white"
            onClick={() => navigate("/message/friends")}
          />
          <NotificationOutlined className="text-white" />
          <SettingOutlined className="text-white" />
        </div>

        <LogoutOutlined className="text-white" />
      </div>
    </div>
  );
};

ControlBarComponent.defaultProps = {};

export default memo(ControlBarComponent);
