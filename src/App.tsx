import { Route, Routes } from "react-router-dom";
import FriendsPage from "./components/Friends-Page/FriendsPage";
import { mockFriends } from "./Mock-Data/mock-friends";

function App() {
  return (
    <Routes>
      <Route index element={<FriendsPage friends={mockFriends} />} />
    </Routes>
  );
}

export default App;
