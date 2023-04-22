import { memo } from "react";
import { Route, Routes } from "react-router";
import SignUpLogin from "../components/signup-login-page/SignUpLogin";
import LoginPage from "../components/signup-login-page/LoginPage";
import SignUpPage from "../components/signup-login-page/SignUpPage";


const AuthPage = () => {
  return (
      <Routes>
        <Route path="/" element={<SignUpLogin />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Route>
      </Routes>
  );
};

export default memo(AuthPage);
