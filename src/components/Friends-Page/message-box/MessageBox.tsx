import { memo, useEffect } from "react";
import BottomMessageBox from "./meassage-box-components/BottomMessageBox";
import HeaderMessageBox from "./meassage-box-components/HeaderMessageBox";
import Messages from "./meassage-box-components/Messages";
import cx from "classnames";
import { useWidth } from "../../../hooks/useWidth";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserFriendMessagesAction } from "../../../redux/actions/chatActions";
import { userFriendChatSelector } from "../../../redux/selectors/chatSelectors";

const MessageBox = () => {
  const width = useWidth();
  const { friend_id } = useParams();
  const dispatch = useDispatch();
  const userFriendChat = useSelector(userFriendChatSelector);

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
        {friend_id === "no-data" || !userFriendChat ? (
          <div className="flex justify-center items-center h-[100vh]">
            <p className="font-medium">No friends to chat</p>
          </div>
        ) : (
          <>
            <HeaderMessageBox name={userFriendChat.friend_details.name} />
            <Messages />
            <BottomMessageBox friendId={userFriendChat.friend_id} />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(MessageBox);
