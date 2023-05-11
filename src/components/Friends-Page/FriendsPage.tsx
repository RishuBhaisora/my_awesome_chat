import { FC, memo } from "react";
import { Outlet } from "react-router";
import FriendList, { friendListType } from "./FriendList";
import MessageBox from "./message-box/MessageBox";
import Container from "../../shared-resources/components/Container";

const FriendsPage: FC<friendListType> = memo(({ friends }) => {
  return (
    <>
      <div className="md:flex hidden">
        <Container className="flex">
          <FriendList friends={friends} />
          <MessageBox />
        </Container>
      </div>
      <div className="md:hidden flex">
        <Outlet />
      </div>
    </>
  );
});

export default memo(FriendsPage);
