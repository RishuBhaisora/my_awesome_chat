import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { suggestedFriendsSelector } from "../../redux/selectors/friendshipSelector";
import { getSuggestedFriendsAction, sendFriendRequestAction } from "../../redux/actions/friendshipAction";

const FriendSuggestions: FC = () => {
  const dispatch = useDispatch();
  const suggestedFriends = useSelector(suggestedFriendsSelector);

  useEffect(() => {
    dispatch(getSuggestedFriendsAction());
  }, []);

  return (
    <>
      {suggestedFriends.map((friend: any, i: number) => (
        <div
          key={i}
          className="flex px-4 py-2 border-slate-400 border-b-2 items-center"
        >
          <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold">
            {friend.name[0]}
          </div>
          <div className="ml-5 flex md:flex-col justify-center gap-6 md:gap-1">
            <h1 className="text-lg font-bold">{friend.name}</h1>
            <div className="flex gap-3 mt-1 md:mt-0">
              <button onClick={() => dispatch(sendFriendRequestAction(friend.id)) } className="font-medium text-green-600">
                Send Friend Request
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(FriendSuggestions);
