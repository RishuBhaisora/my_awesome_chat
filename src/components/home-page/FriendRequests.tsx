import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSearch from "../../shared-resources/components/CustomSearch";
import cx from "classnames";
import Menu from "../../shared-resources/components/Menu";
import DottedMenu from "../../shared-resources/icons/DottedMenu";
import Friends from "../Friends-Page/Friends";
import NoData from "../../shared-resources/components/NoData";
import { mockFriends } from "../../Mock-Data/mock-friends";
import {
  friendRequestsSelector,
  friendRequestsLoadingSelector,
  sentFriendRequestsSelector,
  sentFriendRequestsLoadingSelector,
  acceptFriendRequestSuccessSelector,
  acceptFriendRequestErrorSelector,
  acceptFriendRequestLoadingSelector,
  suggestedFriendsSelector,
  rejectFriendRequestSuccessSelector,
  rejectFriendRequestErrorSelector,
  rejectFriendRequestLoadingSelector,
  cancelFriendRequestSuccessSelector,
  cancelFriendRequestErrorSelector,
  cancelFriendRequestLoadingSelector,
  friendsListSelector
} from "../../redux/selectors/friendshipSelector";
import { acceptFriendRequestAction, cancelFriendRequestAction, getFriendRequestsAction, getSentFriendRequestsAction, getSuggestedFriendsAction, rejectFriendRequestAction,
removeFriendsToastAction,
       sendFriendRequestAction,
       removeFriendAction} from "../../redux/actions/friendshipAction";
import FriendSuggestions from "./FriendSuggestions";
import Popup from "../../shared-resources/components/Popup";
import {toastService} from "../../services/ToastService";
import Loader from "../../shared-resources/components/Loader";

const searchOptions = [
  { key: "friendRequests", value: "Friend Request" },
  { key: "sentRequests", value: "Sent Requests" },
  { key: "suggestedFriends", value: "Suggested Friends" },
  { key: "friends", value: "Friends" },
];

const FriendList = memo(() => {
  const dispatch = useDispatch();
  const [searchFor, setSearchFor] = useState("friendRequests");
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchFriendReqResult, setSearchFriendReqResult] = useState<any[]>([]);
  const [searchSentReqResult, setSearchSentReqResult] = useState<any[]>([]);
  const [searchFriendsResult, setSearchFriendsResult] = useState<any[]>([]);

  const [searchSuggestedFriendsResult, setSearchSuggestedFriendsResult] = useState<any[]>([]);
  const friendRequests = useSelector(friendRequestsSelector);
  const sentFriendRequests = useSelector(sentFriendRequestsSelector);
  const frndReqLoading=useSelector(friendRequestsLoadingSelector);
  const sentFrndReqLoading=useSelector(sentFriendRequestsLoadingSelector);
  
  const declineLoading = useSelector(rejectFriendRequestLoadingSelector);
  const loading = useSelector(cancelFriendRequestLoadingSelector)
  const acceptFrndReqLoading = useSelector(acceptFriendRequestLoadingSelector)
  const acceptFrndReqMessage=useSelector(acceptFriendRequestSuccessSelector)
  const acceptFrndReqError=useSelector(acceptFriendRequestErrorSelector)
  const rejectFrndReqMessage=useSelector(rejectFriendRequestSuccessSelector)
  const rejectFrndReqError=useSelector(rejectFriendRequestErrorSelector)
  const cancelFrndReqMessage=useSelector(cancelFriendRequestSuccessSelector)
  const cancelFrndReqError=useSelector(cancelFriendRequestErrorSelector)
  const suggestedFriends = useSelector(suggestedFriendsSelector)

  const friends = useSelector(friendsListSelector)
  useEffect(() => {
    dispatch(getFriendRequestsAction());
    dispatch(getSentFriendRequestsAction())
  }, []);

  useEffect(() =>{
    if (acceptFrndReqMessage) {
      toastService.showSuccess(acceptFrndReqMessage)}

      if (rejectFrndReqMessage) {
        toastService.showSuccess(rejectFrndReqMessage)
      }
      if (cancelFrndReqMessage) {
        toastService.showSuccess(cancelFrndReqMessage)
      }
      setTimeout(() => {
        dispatch(removeFriendsToastAction());
        
      }, 1000);
      
    },
  [acceptFrndReqMessage,rejectFrndReqMessage,cancelFrndReqMessage])

useEffect(() =>{
  if (acceptFrndReqError) {
    toastService.showError(acceptFrndReqError)}
  
  if (rejectFrndReqError) {
      toastService.showError(rejectFrndReqError)
  }
  if (cancelFrndReqError) {
    toastService.showError(cancelFrndReqError)
  }
  setTimeout(() =>{
    dispatch(removeFriendsToastAction());
  },1000)
  
},[acceptFrndReqError,rejectFrndReqError,cancelFrndReqError])
  
  const renderMenu = () => {
    return (
      <>
        <DottedMenu
          setOpen={setOpen}
          open={open}
          className="top-[13%] z-10 right-[18px] md:hidden h-[25px] w-[25px] "
        />
        {open && (
          <Menu
            className="top-[130px] right-[16px]"
            options={searchOptions}
            selected={searchFor}
            setOpen={setOpen}
            setOption={setSearchFor}
          />
        )}
      </>
    );
  };

  useEffect(() =>{
if (searchFor==="friendRequests" && friendRequests) {
  const filteredFriendRequests = friendRequests.filter((friend) =>
friend.friend_details.name?.toLowerCase().includes(searchValue?.toLowerCase()))

setSearchFriendReqResult(filteredFriendRequests)

}
    if (searchFor==="sentRequests" && sentFriendRequests){
  
  const filteredSentFriendRequests = sentFriendRequests.filter((friend) =>
friend.friend_details.name?.toLowerCase().includes(searchValue?.toLowerCase()))
      console.log("filteredSentFriendRequests",filteredSentFriendRequests)
  setSearchSentReqResult(filteredSentFriendRequests)
}
    if (searchFor==="suggestedFriends" && suggestedFriends ){
      

  const filteredSuggestedFriends = suggestedFriends.filter((friend) =>
friend.name?.toLowerCase().includes(searchValue?.toLowerCase()))
      console.log("filteredSuggestedFriends",filteredSuggestedFriends)

      setSearchSuggestedFriendsResult(filteredSuggestedFriends)
}
    if (searchFor==="friends" && friends) {
  
  const filteredFriends = friends.filter((friend) =>
friend.friend_details.name?.toLowerCase().includes(searchValue?.toLowerCase()))
  setSearchFriendsResult(filteredFriends)
}
  },[searchValue])
  
  
  return (
    <div className=" xl:w-[45%] lg:w-[60%] w-full md:h-full  h-screen md:pr-[34px] pr-0 md:pb-0 pb-16 ">
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between md:gap-[15px]">
        <div className="md:flex flex-col hidden">
          <CustomSearch
            options={searchOptions}
            selectedOption={searchFor}
            setOption={(key) => setSearchFor(key)}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:hidden">
          <CustomSearch options={searchOptions}
            selectedOption={searchFor}
            setOption={(key) => setSearchFor(key)}
            onChange={(e) => setSearchValue(e.target.value)
            }
            value={searchValue}
 />
        </div>
        {renderMenu()}
        <div
          className={cx(
            "bottom-shadow w-full md:h-[40%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "md:flex flex-col hidden ": searchFor !== "friendRequests" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Friend Requests
          </div>

          
          {!frndReqLoading && friendRequests.length==0 && <NoData 
                                                          title="No Friend Requests"
                                                            loading={frndReqLoading}/>}
          
            <div className="overflow-y-auto h-full">
            
            {!searchValue && friendRequests.map((item: any, i: number) => (
              <div
                key={i}
                className="flex px-4 py-2 border-slate-400 border-b-2 items-center">
                <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold" >{item.friend_details.name[0]}</div>
                <div className="ml-5 flex md:flex-col justify-center gap-6 md:gap-1">
                  <h1 className="text-lg font-bold">{item.friend_details.name}</h1>
                  <div className="flex gap-3 mt-1 md:mt-0">
                    <button className="font-medium text-green-600" onClick={() => dispatch(acceptFriendRequestAction(item.friend_id))}>Accept</button>
                    <Popup
                      title="Decline"
                      onBtnClick={() => dispatch(rejectFriendRequestAction(item.friend_id))}
                      loading={declineLoading} />
                  </div>
                </div>
              </div>
            ))}
              
              {searchValue && searchFriendReqResult.length > 0 && searchFriendReqResult.map((item: any, i: number) =>(
          <div
            key={i}
            className="flex px-4 py-2 border-slate-400 border-b-2 items-center">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold" >{item.friend_details.name[0]}</div>
            <div className="ml-5 flex md:flex-col justify-center gap-6 md:gap-1">
              <h1 className="text-lg font-bold">{item.friend_details.name}</h1>
              <div className="flex gap-3 mt-1 md:mt-0">
                <button className="font-medium text-green-600" onClick={() => dispatch(acceptFriendRequestAction(item.friend_id))}>Accept</button>
                <Popup
                  title="Decline"
                  onBtnClick={() => dispatch(rejectFriendRequestAction(item.friend_id))}
                  loading={declineLoading} />
              </div>
            </div>
          </div>
              ))}
              {searchValue && searchFriendReqResult.length == 0 && <NoData title="No friend request"/>}
          </div>

        </div>
        <div
          className={cx(
            "bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "md:flex flex-col hidden": searchFor !== "sentRequests" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Sent Requests
          </div>

          <div className="overflow-y-auto h-full">
            {!sentFrndReqLoading && sentFriendRequests.length==0 && <NoData title ="No sent Requests"
loading={sentFrndReqLoading}/>} 
            {!searchValue && sentFriendRequests.map((item: any, i: number) => (
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
                    <Popup title="Cancel Request"
                      onBtnClick={() => dispatch(cancelFriendRequestAction(item.friend_id))}
                      loading={loading} />

                  </div>
                </div>
              </div>
            ))}
            {searchValue && searchSentReqResult.length >0 && searchSentReqResult.map((item: any, i: number) =>(
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
                <Popup title="Cancel Request"
                  onBtnClick={() => dispatch(cancelFriendRequestAction(item.friend_id))}
                  loading={loading} />

              </div>
            </div>
          </div>
            ))}
            {searchValue && searchSentReqResult.length == 0 && <NoData title="No sent Requests"/>}
          </div>
        </div>
        <div
          className={cx(
            "flex md:hidden bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "flex flex-col ": searchFor === "suggestedFriends" },
            { "hidden ": searchFor !== "suggestedFriends" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Suggested Friends
          </div>

          <div className="overflow-y-auto h-full">
            {!searchValue &&<FriendSuggestions />}
            {  searchValue && searchSuggestedFriendsResult.length> 0 && searchSuggestedFriendsResult.map((friend: any, i: number) =>(
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
            {searchValue && searchSuggestedFriendsResult.length == 0 && <NoData title="No Suggested friends"/>}
          </div>
        </div>
        <div
          className={cx(
            "flex md:hidden bottom-shadow w-full md:h-[45%] h-[88%] bg-white  md:rounded-[20px] p-4 md:pt-16 pt-11 md:relative",
            { "flex flex-col ": searchFor === "friends" },
            { "hidden ": searchFor !== "friends" }
          )}
        >
          <div className="absolute md:top-2 md:left-6 top-[12%] text-[20px] font-[700] leading-[30px]">
            Friends
          </div>

          <div className="overflow-y-auto h-full">
            {!searchValue &&  <Friends />}
            {searchValue && searchFriendsResult.length >0 && searchFriendsResult.map((item: any, i: number) =>(
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
            {searchValue && searchFriendsResult.length == 0 && <NoData title="No Friends"/>}
          </div>
        </div>
      </div>
    </div>
  );
});

export default FriendList;
