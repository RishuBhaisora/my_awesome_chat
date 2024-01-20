import React, { FC, memo, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { suggestedFriendsSelector, 
        suggestedFriendsLoadingSelector,
        suggestedFriendsErrorSelector,
        sendFriendRequestLoadingSelector,
   sendFriendRequestErrorSelector,
    sendFriendRequestSuccessSelector,
} from "../../redux/selectors/friendshipSelector";
  import { toastService } from "../../services/ToastService";
import { getSuggestedFriendsAction, sendFriendRequestAction,removeFriendsToastAction } from "../../redux/actions/friendshipAction";
import NoData from "../../shared-resources/components/NoData";
import Popup from "../../shared-resources/components/Popup";
import 'reactjs-popup/dist/index.css';
const FriendSuggestions: FC = () => {
  const dispatch = useDispatch();
  const suggestedFriends = useSelector(suggestedFriendsSelector);
  const loading = useSelector(sendFriendRequestLoadingSelector)
  const suggestedFrndLoading=useSelector(suggestedFriendsLoadingSelector)
  const suggestedFriendError=useSelector(suggestedFriendsErrorSelector)
  const error=useSelector(sendFriendRequestErrorSelector)
  const message=useSelector(sendFriendRequestSuccessSelector)
  useEffect(() => {
    console.log("loading", loading)
    dispatch(getSuggestedFriendsAction());
  }, []);
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
      toastService.showError(error);}
    if (suggestedFriendError) {
      toastr.showError(suggestedFriendError);
    }
      setTimeout(() => {
       dispatch(removeFriendsToastAction());
       
      }, 1000);
  }, [error]);

  return (
    <>
      {!suggestedFrndLoading && suggestedFriends.length == 0 && <NoData title="No Suggested Friends" 
                                         loading={suggestedFrndLoading}/>}
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
<Popup title="send Friend Request"
  onBtnClick={()=>dispatch(sendFriendRequestAction(friend.id))}
  loading={loading}
  className="text-green-500"/>
            </div>
          </div>
        </div>
      ))}


    </>
  );
};

export default memo(FriendSuggestions);
