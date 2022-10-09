import { Route, Routes } from "react-router-dom";
import FriendList from "./components/Friends-Page/FriendList";
import { mockFriends } from "./Mock-Data/mock-friends";
function App() {
  return (
    <Routes>
      <Route index element={<FriendList friends={mockFriends} />} />
    </Routes>
  );
}

export default App;
