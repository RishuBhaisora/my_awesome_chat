import { FC, memo, useEffect, useState } from "react";
import { Outlet } from "react-router";
import FriendList, { friendListType } from "./FriendList";
import MessageBox from "./message-box/MessageBox";

const FriendsPage: FC<friendListType> = memo(({ friends }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <>
      {width > 768 ? (
        <div className="flex">
          <FriendList friends={friends} />
          <MessageBox />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
});

export default memo(FriendsPage);
