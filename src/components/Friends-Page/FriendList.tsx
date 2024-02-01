import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSearch from "../../shared-resources/components/CustomSearch";
import cx from "classnames";
import Menu from "../../shared-resources/components/Menu";
import DottedMenu from "../../shared-resources/icons/DottedMenu";
import Friends from "./Friends";
import RecentChats from "./RecentChats";
const searchOptions = [
  { key: "recentChats", value: "Recent Chats" },
  { key: "friends", value: "Friends" },
];
const FriendList: FC= memo(() => {
  const [searchFor, setSearchFor] = useState("recentChats");
  const [open, setOpen] = useState(false);


  const renderMenu = () => {
    return (
      <>
        <DottedMenu
          setOpen={setOpen}
          open={open}
          className="top-[13%] z-10 right-[18px] md:hidden h-[25px] w-[25px] "
        />
        {open && (
          <Menu
            className="top-[126px] right-[16px]"
            options={searchOptions}
            selected={searchFor}
            setOpen={setOpen}
            setOption={setSearchFor}
          />
        )}
      </>
    );
  };

  return (
    <div className=" xl:w-[45%] lg:w-[60%] w-full md:h-full h-screen md:pr-[34px] pr-0 md:pb-0 pb-16">
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between">
        <div className="md:flex flex-col hidden">
          <CustomSearch
            options={searchOptions}
            selectedOption={searchFor}
            setOption={(key) => setSearchFor(key)}
          />
        </div>
        <div className="flex flex-col md:hidden">
          <CustomSearch />
        </div>
        {renderMenu()}
        <div
          className={cx(
            "bottom-shadow w-full md:h-[40%] h-[88%] bg-white  md:rounded-[20px] p-4 pt-11 md:relative",
            { "md:flex flex-col hidden ": searchFor !== "recentChats" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Recent Chats
          </div>

          <div className="overflow-y-auto h-full">
            <RecentChats/>
          </div>
        </div>
        <div
          className={cx(
            "bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 pt-11 md:relative",
            { "md:flex flex-col hidden": searchFor !== "friends" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Friends
          </div>

          <div className="overflow-y-auto h-full">
            <Friends/>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FriendList;
