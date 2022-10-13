import { FC, memo } from "react";
import { useNavigate } from "react-router";
import Avatar from "../../shared-resources/avatar/Avatar";

export type friendRowType = {
  image: string;
  name: string;
  message: string;
};
const FriendRow: FC<friendRowType> = memo(({ image, name, message }) => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/message/friends/dummy")}
      className="flex py-4 border-slate-400 border-b-2 items-center"
    >
      <Avatar src={image} size="large" />
      <div className="ml-5">
        <h1 className="text-lg font-bold">{name}</h1>
        <h6 className="text-xs text-[#4D4D4D]">{message}</h6>
      </div>
    </div>
  );
});

export default FriendRow;
