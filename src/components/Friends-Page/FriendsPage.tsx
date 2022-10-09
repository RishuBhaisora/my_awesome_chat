import { FC, memo } from "react";
import FriendList, { friendListType } from "./FriendList";
import "./friends-page.scss";

const FriendsPage: FC<friendListType> = memo(({ friends }) => {
  return (
    <div className="friends-page-wrapper ">
      <input className="input-search" />
      <div className="friends-list">
        <FriendList friends={friends} />
      </div>
    </div>
  );
});

export default FriendsPage;
