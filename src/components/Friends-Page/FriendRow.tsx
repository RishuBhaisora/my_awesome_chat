import { FC, memo } from "react";

export type friendRowType = {
  image: string;
  name: string;
  message: string;
};
const FriendRow: FC<friendRowType> = memo(({ image, name, message }) => {
  return (
    <div className="flex pb-3 border-b-2">
      <img className="rounded-full w-20 h-20 object-cover" src={image} />
      <div className="mt-5 ml-5">
        <h1 className="text-lg font-bold">{name}</h1>
        <h2>{message}</h2>
      </div>
    </div>
  );
});

export default FriendRow;
