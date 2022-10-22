import { Typography } from "antd";
import { FC, memo } from "react";
import { mockMessages } from "../../../../mock-data/mock-messages";

import "./Messages.scss";

type MessagesProps = {};

const Messages: FC<MessagesProps> = (MessagesProps) => {
  return (
    <div className="bg-white w-full h-full overflow-y-scroll md:px-6">
      {mockMessages.map((m, i) => {
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
      })}
    </div>
  );
};

Messages.defaultProps = {};

export default memo(Messages);
