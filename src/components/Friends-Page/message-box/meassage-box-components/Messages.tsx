import { Typography } from "antd";
import { FC, memo, useEffect, useRef} from "react";
import "./Messages.scss";
import { useHeight } from "../../../../hooks/useHeight";
import { useWidth } from "../../../../hooks/useWidth";
import { useSelector } from "react-redux";
import { userFriendChatSelector } from "../../../../redux/selectors/chatSelectors";

const Messages: FC = () => {
  const height = useHeight();
  const width = useWidth();
  const userFriendChat = useSelector(userFriendChatSelector)
  const messages = userFriendChat?.messages
  const containerRef = useRef(null);  

  const styledHeight = `${height - 213}px`;

  useEffect(() => {
    const recentMessage = messages[messages.length -1]
    const elementToScrollTo = document.getElementById(recentMessage?.id);

    if (elementToScrollTo) {
      const container: any = containerRef.current;
      container.scrollTop = container.scrollHeight;
      elementToScrollTo.scrollIntoView({ behavior: 'auto' });
    } 
  }, [messages, height]);

  return (
    <div
      ref={containerRef}
      style={{ height: width <= 768 ? styledHeight : "100%" }}
      className={
        "bg-white w-full  md:relative fixed md:top-0 top-[83px] overflow-y-auto md:px-6 px-4 "
      }
    >
      {messages.map(
        (m:any, i:number) => {
          let typeClass = "";          
          if (m.senderId !== userFriendChat.friend_id) {
            typeClass = "text-end bg-[#1a66ff] ml-auto mr-2 md:mr-2 text-white";
          } else {
            typeClass = "text-start bg-gray-300 ml-2 md:ml-2";
          }
          return (
            <Typography
              id={m.id}
              key={i}
              className={`${typeClass} px-3 py-1 my-4 w-fit max-w-70vw md:max-w-sm rounded-2xl text-xs md:text-sm`}
            >
              {m.content}
            </Typography>
          );
        }
      )}
    </div>
  );
};

export default memo(Messages);
