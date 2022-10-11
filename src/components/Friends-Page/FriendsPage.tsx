import { FC, memo, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import FriendList, { friendListType } from "./FriendList";
import "./friends-page.scss";
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
    <div className="friends-page-wrapper">
      <div>
        {width > 768 ? (
          <input className="input-search" />
        ) : (
          <h1 className="m-5">"COMING SOON"</h1>
        )}
        <div className="friends-list">
          {width > 768 ? <FriendList friends={friends} /> : <Outlet />}
        </div>
      </div>
      {width > 768 && <MessageBox />}
    </div>
  );
});

export default FriendsPage;
