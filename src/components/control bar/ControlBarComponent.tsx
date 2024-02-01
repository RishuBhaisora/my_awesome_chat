import {
  HomeOutlined,
  SettingOutlined,
  NotificationOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { memo } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import DrawerCard from "./DrawerCard";
import { loggedInUserSelector } from "../../redux/selectors/authSelectors";

const ControlBarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector(loggedInUserSelector);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
  };

  return (
    <div className="md:left-0 w-full md:w-[225px] md:h-full fixed bottom-0 md:p-[34px]">
      <div className=" bg-[#1A66FF] h-[60px] md:h-full md:rounded-[20px] flex md:flex-col items-center justify-between py-6 px-3">
        <div className="w-[95px] h-[95px] md:relative md:flex justify-center items-center hidden rounded-full bg-yellow-300 text-xl text-white font-bold">
          {user?.name.split(" ")[0]}
        </div>

        <div className="md:hidden flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold">
          {user?.name[0]}
        </div>

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
