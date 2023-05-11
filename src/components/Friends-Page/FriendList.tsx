import { FC, memo, useEffect } from "react";
import FriendListSearch from "./FriendListSearch";
import FriendRow, { friendRowType } from "./FriendRow";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsAction } from "../../redux/actions/friendsAction";
import { getFriendsSelector } from "../../redux/selectors/friendsSelectors";

export type friendListType = { friends: friendRowType[] };
const FriendList: FC<friendListType> = memo(({ friends }) => {
  const dispatch = useDispatch();

  const getFriendsData = useSelector(getFriendsSelector);
  console.log(getFriendsData);

  useEffect(() => {
    dispatch(getFriendsAction());
  }, []);

  return (
    <div className="xl:w-[45%] lg:w-[60%] w-full md:h-full h-screen md:pr-[34px] pr-0 md:pb-0 pb-16">
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
