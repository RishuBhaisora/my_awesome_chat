import { FC, memo } from "react";
import { MessageOutlined } from "@ant-design/icons";

type BottomMessageBoxProps = {};

const BottomMessageBox: FC<BottomMessageBoxProps> = (BottomMessageBoxProps) => {
  return (
    <div className="flex items-start justify-between md:mx-8 mx-2 py-4 md:py-6 border-t-2 border-slate-400">
      <input className="bg-gray-200 h-8 w-5/6 rounded-lg" />
      <MessageOutlined style={{ fontSize: "36px" }} />
    </div>
  );
};

BottomMessageBox.defaultProps = {};

export default memo(BottomMessageBox);
