import { FC, memo } from "react";
import { Outlet } from "react-router";
import ControlBarComponent from "./components/control bar/ControlBarComponent";

type MainLayoutProps = {};

const MainLayout: FC<MainLayoutProps> = (MainLayoutProps) => {
  return (
    <div className="bg-slate-400 h-screen">
      <ControlBarComponent />
      <div className="md:w-5/6 md:absolute md:right-0">
        <Outlet />
      </div>
    </div>
  );
};

MainLayout.defaultProps = {};

export default memo(MainLayout);
