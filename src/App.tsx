import { Route, Routes } from "react-router-dom";
import ModalPage from "./components/Modal-Page/ModalPage";
function App() {
  return (
    <Routes>
      <Route index element={<ModalPage />} />
    </Routes>
  );
}

export default App;
