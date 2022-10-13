import { FC, memo } from "react";
import FriendRow, { friendRowType } from "./FriendRow";

export type friendListType = { friends: friendRowType[] };
const FriendList: FC<friendListType> = memo(({ friends }) => {
  return (
    <div className="md:p-5 md:w-1/3 w-full h-screen pb-10">
      <div className="w-full h-full bg-white overflow-y-scroll rounded-lg">
        <div className="h-12 p-2 border-b-2 border-slate-400">
          <input className="w-full h-full rounded-lg bg-gray-300" />
        </div>
        {friends.map((item: friendRowType, i: number) => (
          <FriendRow
            key={i}
            image={item.image}
            message={item.message}
            name={item.name}
            id={i.toString()}
          />
        ))}
      </div>
    </div>
  );
});

export default FriendList;
