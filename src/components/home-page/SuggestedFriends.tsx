import { memo } from "react";
import FriendRow, { friendRowType } from "../Friends-Page/FriendRow";
import { mockFriends } from "../../Mock-Data/mock-friends";
import CustomSearch from "../../shared-resources/components/CustomSearch";

const SuggestedFriends = () => {
  const friends = mockFriends as any;
  return (
    <div className="xl:w-[45%] lg:w-[60%] w-full md:h-full h-screen  pr-0 md:pb-0 pb-16">
      <div className="w-full h-full md:rounded-lg flex flex-col justify-between">
        <CustomSearch />
        <div className="bottom-shadow  w-full h-[90%] bg-white  md:rounded-[20px] p-4 pt-16 relative">
          <div className="absolute top-2 left-6 text-[20px] font-[700] leading-[30px]">
          Suggested Friends
          </div>
          <div className="overflow-y-auto h-full">
            {friends.map((item: friendRowType, i: number) => (
              <FriendRow
                key={i}
                image={item.image}
                message={item.message}
                name={item.name}
                id={i.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SuggestedFriends);