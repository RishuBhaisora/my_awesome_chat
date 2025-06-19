import { FC, memo } from "react";
import { NodeIndexOutlined } from "@ant-design/icons";

interface Props {
  name: string;
}
const HeaderMessageBox: FC<Props> = ({ name }) => {
  return (
    <div className="flex items-start justify-between  md:mx-8 py-4 md:py-6 border-b-2 border-slate-400 md:relative fixed bg-white md:bottom-0 md:top-[0px] w-full md:w-auto mx-0  p-[15px] md:p-0 ">
      <div className="flex space-x-6">
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-300 text-xl text-white font-bold">
          {name[0]}
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <h6 className="font-light">{"online"}</h6>
        </div>
      </div>
      <NodeIndexOutlined style={{ fontSize: "32px" }} />
    </div>
  );
};

HeaderMessageBox.defaultProps = {};

export default memo(HeaderMessageBox);
