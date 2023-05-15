import { memo } from "react";
import { Outlet } from "react-router";
import ControlBarComponent from "../components/control bar/ControlBarComponent";

const MainLayout = () => {  
  return (
    <div className="bg-[#ebeaeb] h-screen">
      <ControlBarComponent />
      <div className="md:w-5/6 md:absolute md:right-0">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(MainLayout);
