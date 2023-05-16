import {
  HomeOutlined,
  SettingOutlined,
  NotificationOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { memo } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import DrawerCard from "./DrawerCard";

const ControlBarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
  };

  return (
    <div className="md:left-0 w-full md:w-[225px] md:h-full fixed bottom-0 md:p-[34px]">
      <div className=" bg-[#1A66FF] h-[60px] md:h-full md:rounded-[20px] flex md:flex-col items-center justify-between py-6 px-3">
        <img
          className="md:w-[95px] md:h-[95px] md:relative w-12 h-12 rounded-full object-cover drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]"
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        />

        <div className="flex md:block justify-between w-3/5 md:w-max">
          <DrawerCard
            selected={path === "/home"}
            onClick={() => navigate("/home")}
          >
            <HomeOutlined className="text-white md:text-2xl text-lg" />
          </DrawerCard>
          <DrawerCard
            selected={path.includes("/user/friends/message")}
            onClick={() => navigate("/user/friends/message")}
          >
            <MessageOutlined className="text-white md:text-2xl text-lg" />{" "}
          </DrawerCard>
          <DrawerCard
            selected={path === "/user/notification"}
            onClick={() => navigate("/user/notification")}
          >
            <NotificationOutlined className="text-white md:text-2xl text-lg" />
          </DrawerCard>
          <DrawerCard
            selected={path === "/user/settings"}
            onClick={() => navigate("/user/settings")}
          >
            <SettingOutlined className="text-white md:text-2xl text-lg" />
          </DrawerCard>
        </div>

        <LogoutOutlined
          onClick={handleLogout}
          className="text-white md:text-2xl text-lg mr-3 mb-[2px]"
        />
      </div>
    </div>
  );
};

export default memo(ControlBarComponent);
