import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { FC, memo } from "react";
interface LoaderProps {
  size?: "small" | "medium" | "large";
}
const Loader: FC<LoaderProps> = ({ size }) => {
  const fontSize = size === "small" ? 28 : size === "medium" ? 35 : 47;
  const antIcon = (
    <LoadingOutlined style={{ fontSize, color: "#3375f9" }} spin />
  );

  return <Spin indicator={antIcon} />;
};

export default memo(Loader);
