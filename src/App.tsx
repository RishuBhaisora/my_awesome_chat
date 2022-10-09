import { Navigate, Route, Routes } from "react-router-dom";
import FriendsPage from "./components/Friends-Page/FriendsPage";
import MainLayout from "./MainLayout";
import { mockFriends } from "./Mock-Data/mock-friends";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/message" />} />
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/message"
          element={<FriendsPage friends={mockFriends} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
