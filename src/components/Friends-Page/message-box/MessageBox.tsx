import { FC, memo } from "react";
import BottomMessageBox from "./meassage-box-components/BottomMessageBox";
import HeaderMessageBox from "./meassage-box-components/HeaderMessageBox";
import Messages from "./meassage-box-components/Messages";

type MessageBoxProps = {};

const MessageBox: FC<MessageBoxProps> = (MessageBoxProps) => {
  return (
    <div className="h-screen w-full pb-10 md:pb-6 md:w-3/5 md:p-6">
      <div className="w-full h-full bg-white md:rounded-lg flex flex-col justify-between ">
        <HeaderMessageBox />
        <Messages />
        <BottomMessageBox />
      </div>
    </div>
  );
};

MessageBox.defaultProps = {};

export default memo(MessageBox);
