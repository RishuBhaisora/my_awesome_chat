import { memo, useEffect } from "react";
import BottomMessageBox from "./message-box-components/BottomMessageBox";
import HeaderMessageBox from "./message-box-components/HeaderMessageBox";
import Messages from "./message-box-components/Messages";
import cx from "classnames";
import { useWidth } from "../../../hooks/useWidth";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserFriendMessagesAction } from "../../../redux/actions/chatActions";
import { userFriendChatsSelector } from "../../../redux/selectors/chatSelectors";

const MessageBox = () => {
  const width = useWidth();
  const { friend_id } = useParams();
  const dispatch = useDispatch();
  const userFriendChats = useSelector(userFriendChatsSelector);  
  const friendChat = userFriendChats?.[friend_id || ""];

  const fetchData = () => {
    if (friend_id && friend_id !== "no-data") {
      dispatch(getUserFriendMessagesAction({ friend_id }));
    }
  };

  useEffect(() => {
    fetchData();
  }, [friend_id]);

  return (
    <div className={"w-full h-full md:pb-0 pb-16 "}>
      <div
        className={cx(
          "w-full h-full bg-white md:rounded-[20px] flex flex-col justify-between ",
          { "bottom-shadow": width > 768 }
        )}
      >
        {friend_id === "no-data" || !friendChat ? (
          <div className="flex justify-center items-center h-[100vh]">
            <p className="font-medium">No friends to chat</p>
          </div>
        ) : (
          <>
            <HeaderMessageBox name={friendChat.friend_details.name} />
            <Messages userFriendChat={friendChat} />
            <BottomMessageBox friendId={friendChat.friend_id} />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(MessageBox);
