import { Typography } from "antd";
import { FC, memo } from "react";
import { mockMessages } from "../../../../mock-data/mock-messages";

type MessagesProps = {};

const Messages: FC<MessagesProps> = (MessagesProps) => {
  return (
    <div className="bg-white w-full h-full overflow-y-scroll overflow-x-hidden">
      {mockMessages.map((m, i) => {
        let typeClass = "";
        if (m.type === "send") {
          typeClass = "text-end bg-[#1a66ff] ml-auto mr-12 text-white";
        } else {
          typeClass = "text-start bg-gray-300 ml-12";
        }
        return (
          <Typography
            key={i}
            className={`${typeClass} px-3 py-1 my-4 w-fit rounded-2xl max-w-xs`}
          >
            {m.message}
          </Typography>
        );
      })}
    </div>
  );
};

Messages.defaultProps = {};

export default memo(Messages);
