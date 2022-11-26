import { FC, memo } from "react";

type FriendListSearchProps = {};

const FriendListSearch: FC<FriendListSearchProps> = (props) => {
  return (
    <div className="p-2 md:pb-6 md:px-0 md:pt-0">
      <input className="w-full h-[6vh] rounded-lg bg-white" />
    </div>
  );
};

FriendListSearch.defaultProps = {};

export default memo(FriendListSearch);
