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
import Loader from "./shared-resources/components/Loader";
import HomePage from "./components/home-page/HomePage";


const authPageUrls = ["/login", "/signUp", "/forgetPassword", "/resetPassword"];

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
      } else if (!authPageUrls.includes(currentPath)) {
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
    <>
      
    <Routes>
      {loggedInUser ? (
        <>
        <Route
            path="/"
            element={<Navigate to={"/home"} />}
          />
          <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomePage />}/>
            <Route path="/user/settings" element={<SettingsPage />} />
            <Route path="/user/notification" element={<NotificationPage />} />
            <Route
              path="/user/friends"
              element={<FriendsPage/>}
            >
              <Route
                path="/user/friends/message"
                element={<FriendList/>}
              />
              <Route
                path="/user/friends/message/:id"
                element={<MessageBox />}
              />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={redirectUrl ?? "/"} />} />
        </>
      ) : (
        <Route path="*" element={<AuthPage />}/>      )}
    </Routes>
    </>
  );
}

export default App;
