import { FC, memo } from "react";
import { MessageOutlined } from "@ant-design/icons";

const BottomMessageBox = () => {
  return (
    <div className="flex items-start md:relative fixed justify-between bg-white md:bottom-0 bottom-[60px] w-full md:w-auto mx-0 md:mx-8  p-[15px] md:p-0 md:py-6 border-t-2 border-slate-400">
      <input className="bg-gray-200 h-8 w-5/6 rounded-lg" />
      <MessageOutlined style={{ fontSize: "36px" }} />
    </div>
  );
};


export default memo(BottomMessageBox);
