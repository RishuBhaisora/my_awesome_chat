import { FC, memo, useEffect, useState } from "react";
import FriendRow, { friendRowType } from "./FriendRow";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsAction } from "../../redux/actions/friendsAction";
import { getFriendsSelector } from "../../redux/selectors/friendsSelectors";
import CustomSearch from "../../shared-resources/components/CustomSearch";
import cx from "classnames";
import Menu from "../../shared-resources/components/Menu";
import DottedMenu from "../../shared-resources/icons/DottedMenu";
const searchOptions = [
  { key: "recentChats", value: "Recent Chats" },
  { key: "friends", value: "Friends" },
];
export type friendListType = { friends: friendRowType[] };
const FriendList: FC<friendListType> = memo(({ friends }) => {
  const dispatch = useDispatch();
  const [searchFor, setSearchFor] = useState("recentChats");
  const [open, setOpen] = useState(false);

  const getFriendsData = useSelector(getFriendsSelector);
  console.log(getFriendsData, searchFor);

  useEffect(() => {
    dispatch(getFriendsAction());
  }, []);

  const renderMenu = () => {
    return (
      <>
        <DottedMenu
          setOpen={setOpen}
          open={open}
          className="top-[92px] z-10 right-[18px] md:hidden h-[25px] w-[25px] "
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
          <div className="absolute md:top-2 md:left-6 top-[85px] text-[20px] font-[700] leading-[30px]">
            Recent Chats
          </div>

          <div className="overflow-y-auto h-full">
            {friends.map((item: friendRowType, i: number) => (
              <FriendRow
                key={i}
                image={item.image}
                message={item.message}
                name={item.name}
                id={i.toString()}
              />
            ))}
          </div>
        </div>
        <div
          className={cx(
            "bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 pt-11 md:relative",
            { "md:flex flex-col hidden": searchFor !== "friends" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[85px] text-[20px] font-[700] leading-[30px]">
            Friends
          </div>

          <div className="overflow-y-auto h-full">
            {friends.map((item: friendRowType, i: number) => (
              <FriendRow
                key={i}
                image={item.image}
                message={item.message}
                name={item.name}
                id={i.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default FriendList;
