import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendListAction, removeFriendAction } from "../../redux/actions/friendshipAction";
import { friendsListSelector } from "../../redux/selectors/friendshipSelector";

const Friends: FC = () => {
  const dispatch = useDispatch()
  const friendList = useSelector(friendsListSelector)

  useEffect(()=>{
    dispatch(getFriendListAction())
  },[])

  return (
    <>
    {friendList.map((item: any, i: number) => (
        <div
          key={i}
          className="flex px-4 py-2 border-slate-400 border-b-2 items-center"
        >
          <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold">
            {item.friend_details.name[0]}
          </div>
          <div className="ml-5 flex md:flex-col justify-center gap-6 md:gap-1">
            <h1 className="text-lg font-bold">
              {item.friend_details.name}
            </h1>
            <div className="flex gap-3 mt-1 md:mt-0">
              <button onClick={() => dispatch(removeFriendAction(item.friend_id))} className="font-medium text-red-600">
                Remove friend
              </button>
            </div>
          </div>
        </div>
      ))}
      </>
  );
}

export default memo(Friends);