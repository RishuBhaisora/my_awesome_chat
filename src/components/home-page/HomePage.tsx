import { memo } from "react";
import ResponsiveContainer from "../../shared-resources/components/ResponsiveContainer";
import FriendRequests from "./FriendRequests";
import SuggestedFriends from "./SuggestedFriends";
import { useWidth } from "../../hooks/useWidth";
import FriendSearchList from "./FriendSearchList";

const HomePage = () => {
  const width = useWidth();
  return (
    <div>
      <div className="md:flex hidden">
        <ResponsiveContainer className="flex">
          <FriendRequests />
          {width >= 950 && <FriendSearchList />}
          <SuggestedFriends />
        </ResponsiveContainer>
      </div>
      <div className="flex md:hidden">
        <FriendRequests />
      </div>
    </div>
  );
};

export default memo(HomePage);
