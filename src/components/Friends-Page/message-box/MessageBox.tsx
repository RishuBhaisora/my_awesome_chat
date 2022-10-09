import { FC, memo } from "react";
import BottomMessageBox from "./meassage-box-components/BottomMessageBox";
import HeaderMessageBox from "./meassage-box-components/HeaderMessageBox";
import Messages from "./meassage-box-components/Messages";

type MessageBoxProps = {};

const MessageBox: FC<MessageBoxProps> = (MessageBoxProps) => {
  return (
    <div className="md:w-1/2 w-[90vw] h-[93vh] m-5 bg-white md:rounded-lg flex flex-col justify-between">
      <HeaderMessageBox />
      <Messages />
      <BottomMessageBox />
    </div>
  );
};

MessageBox.defaultProps = {};

export default memo(MessageBox);
