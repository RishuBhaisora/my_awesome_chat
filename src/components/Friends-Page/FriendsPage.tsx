import { FC, memo } from "react";
import FriendList, { friendListType } from "./FriendList";
import "./friends-page.scss";
import MessageBox from "./message-box/MessageBox";

const FriendsPage: FC<friendListType> = memo(({ friends }) => {
  return (
    <div className="friends-page-wrapper">
      <div>
        <input className="input-search" />
        <div className="friends-list">
          <FriendList friends={friends} />
        </div>
      </div>
      <MessageBox />
    </div>
  );
});

export default FriendsPage;
