import { FC, memo } from "react";
import FriendRow, { friendRowType } from "./FriendRow";

export type friendListType = { friends: friendRowType[] };
const FriendList: FC<friendListType> = memo(({ friends }) => {
  return (
    <div className=" w-full ">
      {friends.map((item: friendRowType, i: number) => (
        <FriendRow
          key={i}
          image={item.image}
          message={item.message}
          name={item.name}
        />
      ))}
    </div>
  );
});

export default FriendList;
