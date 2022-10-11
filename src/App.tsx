import { Navigate, Route, Routes } from "react-router-dom";
import FriendList from "./components/friends-page/FriendList";
import FriendsPage from "./components/friends-page/FriendsPage";
import MessageBox from "./components/friends-page/message-box/MessageBox";
import MainLayout from "./MainLayout";
import { mockFriends } from "./mock-data/mock-friends";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/message" />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/message" element={<FriendsPage friends={mockFriends} />}>
          <Route
            path="/message/friends"
            element={<FriendList friends={mockFriends} />}
          />
          <Route path="/message/friends/:id" element={<MessageBox />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
