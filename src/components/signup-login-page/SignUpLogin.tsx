import { FC, memo, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "../../shared-resources/avatar/Button";

type SignUpLoginProps = {};

const SignUpLogin: FC<SignUpLoginProps> = (props) => {
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate("/login");
  }, []);

  const loginClicked = useMemo(() => {
    if (location.pathname === "/login") return true;
    else return false;
  }, [location]);
  const signUpClicked = useMemo(() => {
    if (location.pathname === "/signUp") return true;
    else return false;
  }, [location]);

  console.log(loginClicked, signUpClicked);

  return (
    <div className="flex md:items-center justify-center p-2 bg-slate-400 md:p-0  flex-col min-h-screen max-h-[200vh]">
      <div className=" md:w-1/3  pb-2 rounded-md">
        <Button
          text="LogIn"
          clicked={loginClicked}
          onClick={() => navigate("/login")}
        />
        <Button
          text="SignUp"
          clicked={signUpClicked}
          onClick={() => navigate("/signUp")}
        />
      </div>
      <div className="bg-white p-2 h-[85vh] md:w-1/3 w-full rounded-md overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

SignUpLogin.defaultProps = {};

export default memo(SignUpLogin);
