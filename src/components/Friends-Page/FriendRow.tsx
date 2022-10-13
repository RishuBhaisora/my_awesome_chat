import { FC, memo } from "react";
import { useNavigate } from "react-router";
import Avatar from "../../shared-resources/avatar/Avatar";

export type friendRowType = {
  id: string;
  image: string;
  name: string;
  message: string;
};
const FriendRow: FC<friendRowType> = memo(({ id, image, name, message }) => {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/message/friends/${id}`)}
      className="flex px-4 py-2 border-slate-400 border-b-2 items-center"
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
