import { Navigate, Route, Routes } from "react-router-dom";
import FriendList from "./components/Friends-Page/FriendList";
import FriendsPage from "./components/Friends-Page/FriendsPage";
import MessageBox from "./components/Friends-Page/message-box/MessageBox";
import MainLayout from "./MainLayout";
import { mockFriends } from "./Mock-Data/mock-friends";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/message" />} />
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/settings" element={<SettingsPage />} /> */}
        <Route
          path="/message"
          element={<FriendsPage friends={mockFriends as any} />}
        >
          <Route
            path="/message/friends"
            element={<FriendList friends={mockFriends as any} />}
          />
          <Route path="/message/friends/:id" element={<MessageBox />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
