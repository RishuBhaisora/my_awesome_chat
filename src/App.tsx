import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import FriendList from "./components/Friends-Page/FriendList";
import FriendsPage from "./components/Friends-Page/FriendsPage";
import MessageBox from "./components/Friends-Page/message-box/MessageBox";
import SettingsPage from "./components/settings-page/SettingsPage";
import MainLayout from "./pages/MainLayout";
import { mockFriends } from "./Mock-Data/mock-friends";
import NotificationPage from "./components/notification-page/NotificationPage";
import { useSelector, useDispatch } from "react-redux";
import {
  isTokenExpiredSelector,
  loggedInUserSelector,
  loginLoadingSelector,
} from "./redux/selectors/authSelectors";
import { useEffect, useState } from "react";
import { loginAction } from "./redux/actions/authActions";
import AuthPage from "./pages/AuthPage";
import Loader from "./shared-resources/Loader";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector(loggedInUserSelector);
  const isTokenExpired = useSelector(isTokenExpiredSelector);
  const queryParams = new URLSearchParams(location.search);
  const redirectUrl = queryParams.get("redirectUrl");
  const loginLoading = useSelector(loginLoadingSelector);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isTokenExpired) {
      localStorage.removeItem("token");
      navigate("/login?redirectUrl=" + location.pathname);
    }
  }, [isTokenExpired]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!loggedInUser && token) {
      setLoading(true);
      dispatch(loginAction({ token }));
    } else if (!loggedInUser) {
      const currentPath = location.pathname;
      if (currentPath && currentPath === "/") {
        navigate("/login");
      } else if (currentPath !== "/login" && currentPath !== "/signUp") {
        navigate("/login?redirectUrl=" + currentPath);
      }
    }
    setLoading(false);
  }, [loggedInUser, location.pathname, token]);

  if (loading || loginLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader/>
      </div>
    );
  }
  return (
    <Routes>
      {loggedInUser ? (
        <>
          <Route
            path="/user"
            element={<Navigate to={"/user/message/friends"} />}
          />
          <Route path="/user" element={<MainLayout />}>
            <Route path="/user/settings" element={<SettingsPage />} />
            <Route path="/user/notification" element={<NotificationPage />} />
            <Route
              path="/user/message"
              element={<FriendsPage friends={mockFriends as any} />}
            >
              <Route
                path="/user/message/friends"
                element={<FriendList friends={mockFriends as any} />}
              />
              <Route
                path="/user/message/friends/:id"
                element={<MessageBox />}
              />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={redirectUrl ?? "/user"} />} />
        </>
      ) : (
        <Route path="*" element={<AuthPage />}/>      )}
    </Routes>
  );
}

export default App;
