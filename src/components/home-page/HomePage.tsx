import { memo } from "react";
import ResponsiveContainer from "../../shared-resources/components/ResponsiveContainer";
import FriendRequests from "./FriendRequests";
import Friends from "./Friends";
import SuggestedFriends from "./SuggestedFriends";
import { useWidth } from "../../hooks/useWidth";

const HomePage = () => {
  const width = useWidth();
  return (
    <div>
      <div className="md:flex hidden">
        <ResponsiveContainer className="flex">
          <FriendRequests />
          {width >= 950 && <Friends />}
          <SuggestedFriends />
        </ResponsiveContainer>
      </div>
      <div className="flex md:hidden">
        <FriendRequests />
        {/* <Friends /> */}
        {/* <SuggestedFriends /> */}
      </div>
    </div>
  );
};

export default memo(HomePage);
