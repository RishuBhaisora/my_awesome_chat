import { memo } from "react";
import { Route, Routes } from "react-router";
import SignUpLogin from "../components/signup-login-page/SignUpLogin";
import LoginPage from "../components/signup-login-page/LoginPage";
import SignUpPage from "../components/signup-login-page/SignUpPage";
import ForgetPassword from "../components/signup-login-page/ForgetPassword";
import ResetPassword from "../components/signup-login-page/ResetPassword";

const AuthPage = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpLogin />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default memo(AuthPage);
