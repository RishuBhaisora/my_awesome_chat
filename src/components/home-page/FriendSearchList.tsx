import { memo } from "react";
import CustomSearch from "../../shared-resources/components/CustomSearch";
import Friends from "../Friends-Page/Friends";

const FriendSearchList = () => {
  return (
    <div className=" xl:w-[45%] lg:w-[60%] w-full md:h-full h-screen md:pr-[34px] pr-0 md:pb-0 pb-16">
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between">
        <CustomSearch />
        <div className="bottom-shadow  w-full h-[90%] bg-white  md:rounded-[20px] p-4 pt-11 relative">
          <div className="absolute top-2 left-6 text-[20px] font-[700] leading-[30px]">
            Friends
          </div>
          <div className="overflow-y-auto h-full">
            <Friends/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FriendSearchList);
