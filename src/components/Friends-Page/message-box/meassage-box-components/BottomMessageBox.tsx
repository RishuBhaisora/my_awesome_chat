import { FC, memo, useState } from "react";
import { MessageOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { sendMessageAction } from "../../../../redux/actions/chatActions";
interface Props {
  friendId: string;
}

const BottomMessageBox: FC<Props> = ({ friendId }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    dispatch(sendMessageAction({ friend_id: friendId, message }));
    setMessage("");
  };
  return (
    <div className="flex items-start md:relative fixed justify-between bg-white md:bottom-0 bottom-[60px] w-full md:w-auto mx-0 md:mx-8  p-[15px] md:p-0 md:py-6 border-t-2 border-slate-400">
      <input
        className="bg-gray-200 h-8 w-5/6 rounded-lg"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <MessageOutlined
        style={{ fontSize: "36px" }}
        onClick={handleSendMessage}
      />
    </div>
  );
};

export default memo(BottomMessageBox);
