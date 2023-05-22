import { memo } from "react";
import BottomMessageBox from "./meassage-box-components/BottomMessageBox";
import HeaderMessageBox from "./meassage-box-components/HeaderMessageBox";
import Messages from "./meassage-box-components/Messages";
import { useHeight } from "../../../hooks/useHeight";
import cx from "classnames";
import { useWidth } from "../../../hooks/useWidth";

const MessageBox = () => {
  const width = useWidth();

  return (
    <div className={"w-full h-full md:pb-0 pb-16 "}>
      <div
        className={cx(
          "w-full h-full bg-white md:rounded-[20px] flex flex-col justify-between ",
          { "bottom-shadow": width > 768 }
        )}
      >
        <HeaderMessageBox />
        <Messages />
        <BottomMessageBox />
      </div>
    </div>
  );
};

export default memo(MessageBox);
