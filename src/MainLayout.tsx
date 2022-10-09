import { FC, memo } from "react";
import { Outlet } from "react-router";
import ControlBarComponent from "./components/control bar/ControlBarComponent";

type MainLayoutProps = {};

const MainLayout: FC<MainLayoutProps> = (MainLayoutProps) => {
  return (
    <div className="bg-gray-500 overflow-hidden">
      <ControlBarComponent />
      <div className="md:relative left-32 ">
        <Outlet />
      </div>
    </div>
  );
};

MainLayout.defaultProps = {};

export default memo(MainLayout);
