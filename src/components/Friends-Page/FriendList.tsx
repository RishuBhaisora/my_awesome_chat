import { FC, memo } from "react";
import FriendListSearch from "./FriendListSearch";
import FriendRow, { friendRowType } from "./FriendRow";

export type friendListType = { friends: friendRowType[] };
const FriendList: FC<friendListType> = memo(({ friends }) => {
  return (
    <div className="md:w-2/5 h-screen md:py-6 md:px-3 pb-10">
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between">
        <FriendListSearch />
        <div className="w-full h-full bg-white overflow-y-auto md:rounded-lg">
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
    </div>
  );
});

export default FriendList;
