import { FC, memo } from "react";
import FriendRow, { friendRowType } from "./FriendRow";

export type friendListType = { friends: friendRowType[] };
const FriendList: FC<friendListType> = memo(({ friends }) => {
  return (
    <div className="p-3 w-full">
      <h3 className="font-bold ">Friends</h3>
      {friends.map((item: friendRowType) => (
        <FriendRow image={item.image} message={item.message} name={item.name} />
      ))}
    </div>
  );
});

export default FriendList;
