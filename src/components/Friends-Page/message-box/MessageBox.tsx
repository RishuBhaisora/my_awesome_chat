import { memo } from "react";
import BottomMessageBox from "./meassage-box-components/BottomMessageBox";
import HeaderMessageBox from "./meassage-box-components/HeaderMessageBox";
import Messages from "./meassage-box-components/Messages";

const MessageBox = () => {

  return (
    <div className="w-full " >
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
