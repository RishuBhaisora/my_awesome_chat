import { FC, memo } from "react";
import Avatar from "../../../../shared-resources/avatar/Avatar";
import { NodeIndexOutlined } from "@ant-design/icons";

type HeaderMessageBoxProps = {};

const HeaderMessageBox: FC<HeaderMessageBoxProps> = (HeaderMessageBoxProps) => {
  return (
    <div className="flex items-start justify-between md:mx-12 mx-6 py-4 md:py-6 border-b-2 border-slate-400">
      <div className="flex space-x-6">
        <Avatar
          size="large"
          src="https://www.whatsappimages.in/wp-content/uploads/2021/06/HD-New-Beautiful-Unique-Profile-Images-Pictures.gif"
        />
        <div>
          <h3>{"Ramesh Khan"}</h3>
          <h6>{"online"}</h6>
        </div>
      </div>
      <NodeIndexOutlined style={{ fontSize: "32px" }} />
    </div>
  );
};

HeaderMessageBox.defaultProps = {};

export default memo(HeaderMessageBox);
