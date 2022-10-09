import { FC, memo } from "react";

type MessagesProps = {};

const Messages: FC<MessagesProps> = (MessagesProps) => {
  return <div className="bg-green-100 w-full h-full"></div>;
};

Messages.defaultProps = {};

export default memo(Messages);
