import { FC, memo } from "react";
import { avatarSize } from "./constant";

type AvatarProps = {
  src: string;
  size:
    | "small"
    | "medium"
    | "large"
    | "phone_small"
    | "phone_medium"
    | "phone_large";
  onClick?: () => void;
};

const Avatar: FC<AvatarProps> = (AvatarProps) => {
  const size = avatarSize[AvatarProps.size];

  return (
    <img
      onClick={AvatarProps.onClick}
      className={`rounded-full object-cover ${size}`}
      src={AvatarProps.src}
    />
  );
};

Avatar.defaultProps = {};

export default memo(Avatar);
