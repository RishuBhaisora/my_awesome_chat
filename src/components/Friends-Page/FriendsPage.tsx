import { FC, memo } from "react";
import { Outlet } from "react-router";
import FriendList, { friendListType } from "./FriendList";
import MessageBox from "./message-box/MessageBox";
import ResponsiveContainer from "../../shared-resources/components/ResponsiveContainer";

const FriendsPage: FC<friendListType> = memo(({ friends }) => {
  return (
    <>
      <div className="md:flex hidden">
        <ResponsiveContainer className="flex">
          <FriendList friends={friends} />
          <MessageBox />
        </ResponsiveContainer>
      </div>
      <div className="md:hidden flex">
        <Outlet />
      </div>
    </>
  );
});

export default memo(FriendsPage);
