import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recentChatsSelector } from "../../redux/selectors/chatSelectors";
import { getRecentChatsAction } from "../../redux/actions/chatActions";
import { useNavigate, useParams } from "react-router";
import { friendsListSelector } from "../../redux/selectors/friendshipSelector";

const RecentChats: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friendList = useSelector(friendsListSelector);
  const recentChats = useSelector(recentChatsSelector);
  const { friend_id } = useParams();

  useEffect(() => {
    if (!friend_id) {
      let id = "no-data";
      if (recentChats.length) {
        id = recentChats[0].friend_id;
      } else if (friendList.length) {
        id = friendList[0].friend_id;
      }
      navigate(`/user/friends/message/${id}`);
    }
  }, [recentChats, friendList]);

  useEffect(() => {
    dispatch(getRecentChatsAction());
  }, []);

  return (
    <>
      {recentChats.map((item: any, i: number) => (
        <div
          key={i}
          className="flex px-4 py-2 border-slate-400 border-b-2 items-center"
        >
          <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold">
            {item.friend_details.name[0]}
          </div>
          <div className="ml-5 flex md:flex-col justify-center gap-6 md:gap-1">
            <h1 className="text-lg font-bold">{item.friend_details.name}</h1>
            <div className="flex gap-3 mt-1 md:mt-0">
              <button
                onClick={() =>
                  navigate(`/user/friends/message/${item.friend_id}`)
                }
                className="font-medium text-green-600"
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(RecentChats);
