import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendListAction, removeFriendAction,removeFriendsToastAction } from "../../redux/actions/friendshipAction";
import { friendsListSelector,
        removeFriendLoadingSelector,
        removeFriendSuccessSelector,
       removeFriendErrorSelector} from "../../redux/selectors/friendshipSelector";
import Popup from "../../shared-resources/components/Popup"
import {toastService} from "../../services/ToastService";


const Friends: FC = () => {
  const dispatch = useDispatch()
  const friendList = useSelector(friendsListSelector)
  const loading=useSelector(removeFriendLoadingSelector)
  const error=useSelector(removeFriendErrorSelector)
  const message=useSelector(removeFriendSuccessSelector)

  useEffect(()=>{
    dispatch(getFriendListAction())
  },[])

  useEffect(() => {
    if (message) {
      toastService.showSuccess(message);
      setTimeout(() => {
        dispatch(removeFriendsToastAction());
      }, 1000);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      toastService.showError(error);
      setTimeout(() => {
        dispatch(removeFriendsToastAction());
      }, 1000);
    }
  }, [error]);


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
              <Popup
                title="Remove Friend" onBtnClick={() => dispatch(removeFriendAction(item.friend_id))}
                loading={loading}
                className="font-medium text-red-600"
                />
              </div>
          </div>
        </div>
      ))}
      </>
  );
}

export default memo(Friends);