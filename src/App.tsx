import { Navigate, Route, Routes } from "react-router-dom";
import FriendList from "./components/Friends-Page/FriendList";
import FriendsPage from "./components/Friends-Page/FriendsPage";
import MessageBox from "./components/Friends-Page/message-box/MessageBox";
import SettingsPage from "./components/settings-page/SettingsPage";
import LoginPage from "./components/signup-login-page/LoginPage";
import SignUpLogin from "./components/signup-login-page/SignUpLogin";
import SignUpPage from "./components/signup-login-page/SignUpPage";
import MainLayout from "./MainLayout";
import { mockFriends } from "./Mock-Data/mock-friends";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpLogin />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Route>
      <Route path="/user" element={<Navigate to="/user/message/friends" />} />
      <Route path="/user" element={<MainLayout />}>
        <Route path="/user/settings" element={<SettingsPage />} />
        <Route
          path="/user/message/friends"
          element={<FriendsPage friends={mockFriends as any} />}
        >
          <Route
            path="/user/message/friends"
            element={<FriendList friends={mockFriends as any} />}
          />
          <Route path="/user/message/friends/:id" element={<MessageBox />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
