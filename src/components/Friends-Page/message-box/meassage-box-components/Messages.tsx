import { Typography } from "antd";
import { FC, memo, useEffect, useRef } from "react";
import { mockMessages } from "../../../../Mock-Data/mock-messages";
import "./Messages.scss";
import { useHeight } from "../../../../hooks/useHeight";
import { useWidth } from "../../../../hooks/useWidth";

type MessagesProps = {};

const Messages: FC<MessagesProps> = (MessagesProps) => {
  const containerRef = useRef(null);
  const height = useHeight();
  const width = useWidth();

  const styledHeight = `${height - 213}px`;

  useEffect(() => {
    const container: any = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [height]);

  return (
    <div
      ref={containerRef}
      style={{ height: width <= 768 ? styledHeight : "100%" }}
      className={
        "bg-white w-full  md:relative fixed md:top-0 top-[83px] overflow-y-auto md:px-6 px-4 "
      }
    >
      {[...mockMessages, ...mockMessages, ...mockMessages, ...mockMessages].map(
        (m, i) => {
          let typeClass = "";
          if (m.type === "send") {
            typeClass = "text-end bg-[#1a66ff] ml-auto mr-2 md:mr-2 text-white";
          } else {
            typeClass = "text-start bg-gray-300 ml-2 md:ml-2";
          }
          return (
            <Typography
              key={i}
              className={`${typeClass} px-3 py-1 my-4 w-fit max-w-70vw md:max-w-sm rounded-2xl text-xs md:text-sm`}
            >
              {m.message}
            </Typography>
          );
        }
      )}
    </div>
  );
};

export default memo(Messages);
