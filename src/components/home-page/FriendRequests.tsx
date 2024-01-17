
import {  memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSearch from "../../shared-resources/components/CustomSearch";
import cx from "classnames";
import Menu from "../../shared-resources/components/Menu";
import DottedMenu from "../../shared-resources/icons/DottedMenu";
import Friends from "../Friends-Page/Friends";
import { mockFriends } from "../../Mock-Data/mock-friends";
import { friendRequestsSelector, sentFriendRequestsSelector, suggestedFriendsSelector } from "../../redux/selectors/friendshipSelector";
import { acceptFriendRequestAction, cancelFriendRequestAction, getFriendRequestsAction, getSentFriendRequestsAction, getSuggestedFriendsAction, rejectFriendRequestAction } from "../../redux/actions/friendshipAction";
import FriendSuggestions from "./FriendSuggestions";

const searchOptions = [
    { key: "friendRequests", value: "Friend Request" },
    { key: "sentRequests", value: "Sent Requests" },
    { key: "suggestedFriends", value: "Suggested Friends" },
    { key: "friends", value: "Friends" },
  ];

const FriendList = memo(() => {
  const dispatch = useDispatch();
  const [searchFor, setSearchFor] = useState("friendRequests");
  const [open, setOpen] = useState(false);
  const friendRequests = useSelector(friendRequestsSelector);
  const sentFriendRequests = useSelector(sentFriendRequestsSelector);
  
  useEffect(() => {
    dispatch(getFriendRequestsAction());
    dispatch(getSentFriendRequestsAction())
  }, []);

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
            className="top-[130px] right-[16px]"
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
    <div className=" xl:w-[45%] lg:w-[60%] w-full md:h-full  h-screen md:pr-[34px] pr-0 md:pb-0 pb-16 ">
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between md:gap-[15px]">
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
            "bottom-shadow w-full md:h-[40%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "md:flex flex-col hidden ": searchFor !== "friendRequests" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Friend Requests
          </div>

          <div className="overflow-y-auto h-full">
            {friendRequests.map((item: any, i: number) => (
               <div
               key={i}
               className="flex px-4 py-2 border-slate-400 border-b-2 items-center"
             >
               <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold" >{item.friend_details.name[0]}</div>
               <div className="ml-5 flex md:flex-col justify-center gap-6 md:gap-1">
                 <h1 className="text-lg font-bold">{item.friend_details.name}</h1>
                 <div className="flex gap-3 mt-1 md:mt-0">
                 <button className="font-medium text-green-600" onClick={() => dispatch(acceptFriendRequestAction(item.friend_id))}>Accept</button>
                 <button className="font-medium text-red-600" onClick={() => dispatch(rejectFriendRequestAction(item.friend_id))}>Decline</button>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
        <div
          className={cx(
            "bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "md:flex flex-col hidden": searchFor !== "sentRequests" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Sent Requests
          </div>

          <div className="overflow-y-auto h-full">
          {sentFriendRequests.map((item: any, i: number) => (
              <div
                key={i}
                className="flex px-4 py-2 border-slate-400 border-b-2 items-center"
              >
                <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold">
                  {item.friend_details.name[0]}
                </div>
                <div className="ml-5 flex md:flex-col justify-center gap-6 md:gap-1">
                  <h1 className="text-lg font-bold">
                    {item.friend_details.name}
                  </h1>
                  <div className="flex gap-3 mt-1 md:mt-0">
                    <button onClick={() => dispatch(cancelFriendRequestAction(item.friend_id)) } className="font-medium text-red-600">
                      Cancel Request
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={cx(
            "flex md:hidden bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "flex flex-col ": searchFor === "suggestedFriends" },
            { "hidden ": searchFor !== "suggestedFriends" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Suggested Friends
          </div>

          <div className="overflow-y-auto h-full">
          <FriendSuggestions/>
          </div>
        </div>
        <div
          className={cx(
            "flex md:hidden bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "flex flex-col ": searchFor === "friends" },
            { "hidden ": searchFor !== "friends" }
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
