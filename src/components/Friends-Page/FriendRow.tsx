import { FC, memo } from "react";

export type friendRowType = {
  image: string;
  name: string;
  message: string;
};
const FriendRow: FC<friendRowType> = memo(({ image, name, message }) => {
  return (
    <div className="flex py-4 border-slate-400 border-b-2 items-center">
      <img className="rounded-full w-12 h-12 object-cover" src={image} />
      <div className="ml-5">
        <h1 className="text-lg font-bold">{name}</h1>
        <h6 className="text-xs text-[#4D4D4D]">{message}</h6>
      </div>
    </div>
  );
});

export default FriendRow;
