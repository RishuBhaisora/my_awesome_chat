import { FC, memo } from "react";
import FriendRow, { friendRow } from "./FriendRow";

export type friendList = { friends: friendRow[] };
const FriendList: FC<friendList> = memo(({ friends }) => {
  return (
    <div className="p-3">
      {friends.map((item: friendRow) => (
        <FriendRow image={item.image} message={item.message} name={item.name} />
      ))}
    </div>
  );
});

export default FriendList;
